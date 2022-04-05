<template>
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card  align="start" class="pa-16">

      <div >
          <div align="center" class="text-h5 pb-10">
            <b>COMPLETED TRANSACTION FOR</b>
          </div>
          <div>
            <v-row>
              <v-col >
                <v-card class="pa-5 mb-10" elevation="5">
                  <div>
                    Reference Code : {{items.code}}
                  </div>
                  <div>
                    Customer Name : {{items.firstname}} {{items.firstname}}
                  </div>
                  <div>
                    Contact : {{items.contact_number}}
                  </div>
                   <div>
                    Email : {{items.email}}
                  </div>
                  <div>
                    <v-row>
              <v-col cols="auto">
                    <div>
                      Reservation Information:
                    </div>
                      </v-col>
                      <v-col align="start">
                        <div>
                          {{items.pool_type == 'undefined' ? '' : items.pool_type}}
                        </div>
                        <div>
                          {{items.package=='undefined' ? '' : items.package}}
                        </div>
                        <div>
                          {{items.date}}
                        </div>
                        <div class="text-h6">
                          {{items.total_price}}
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-col>
              <v-col>
               <div align="center">
                  <div>
                 <b> PROOF OF PAYMENT</b>
                </div>
                <div>
                 <b> For Online Reservation</b>
                </div>
               </div>
                <v-card class="pa-5" elevation="5">
                    <v-img :src="items.proofOfPayment" height="300" width="300">

                    </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <div v-if="items.status!='Request For Cancellation' && items.status!='reschedule' ">
            Remarks:
          </div>
          <div v-if="items.status!='Request For Cancellation' && items.status!='reschedule'">
            <v-textarea outlined readonly></v-textarea>
          </div>
           <div v-if="items.status=='Request For Cancellation'">
            Reason For Cancellation:
          </div>
          <div v-if="items.status=='Request For Cancellation' || items.status=='Cancelled'  ">
            <v-textarea outlined readonly v-model="items.cancellation_description"></v-textarea>
          </div>
          <div v-if="items.status=='reschedule'">
              Reason For Reschedule:
          </div>
          <div v-if="items.status=='reschedule' || items.status=='Cancelled'">
            <v-textarea outlined readonly v-model="items.reason_reschedule"></v-textarea>
          </div>
          <div v-if="items.status=='reschedule'">
            Preferred Schedule: {{items.date_reschedule}}
          </div>
        
      </div>

            <!-- <div class="text-h5">First Name: {{ items.firstname }}</div>
            <div class="text-h5">Last Name: {{ items.lastname }}</div>
            <div class="text-h5">Contact Number: {{ items.contact_number }}</div>
                  <div class="text-h5">Email: {{ items.email }}</div> -->
            <!-- <v-row>
              <v-col cols="auto">
                <div>
                  Reservation Information:
                </div>
              </v-col>
              <v-col align="start">
                <div>
                  {{items.pool_type == 'undefined' ? '' : items.pool_type}}
                </div>
                <div>
                  {{items.package=='undefined' ? '' : items.package}}
                </div>
                <div>
                  {{items.date}}
                </div>
                <div class="text-h6">
                  {{items.total_price}}
                </div>
              </v-col>
            </v-row> -->
            <!-- <div align="center" class="pt-10">
              To Pay: {{items.to_pay}}
            </div>
            <div align="center" class="pt-10">
              Remaining Balance: {{items.price-items.to_pay}}
            </div> -->
            <!-- <div align="center" class="pt-10">
              Time Remaining: {{items.remaining}} Minutes
            </div> -->
            <!-- <div align="center" class="pt-10">
              Total Price: {{items.price}}
            </div> -->
            <div class="red--text"></div>
            <v-col cols="12" class="px-0" align="center">
              <!-- <div>Mode of Payment</div>
              <div>
                {{items.mode_of_payment}}
              </div>
                <div align="center" class="text-h5">
              CODE :  {{items.code}}
            </div>
            <div>
              PROOF OF PAYMENT
            </div> -->
            <!-- <div v-if="items.status=='Request For Cancellation'">
              Reason for Cancellation:
            </div>
            <div>
              {{items.cancellation_description}}
            </div> -->
            <v-btn color="transparent" @click="cancel">
              Go back
            </v-btn>
            </v-col>
          </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["isOpen", "items", "isAdd"],
  watch: {
    items() {
      //   this.announcement=this.items
    },
  },
  data() {
    return {
      room_list:['Standard','Deluxe','Suite'],
      events: [],
      buttonLoad: false,
      img_holder:'image_placeholder.png'
    };
  },
  methods: {
    async addEvents() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        form_data.append("package", this.events.package);
        form_data.append("price", this.events.price);
        form_data.append("descriptions", this.events.descriptions);
        if (this.isAdd) {
          const response = await this.$axios
            .post("/events/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.$refs.form.reset()
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$emit("refresh");
            });
        } else {
          const response = await this.$axios
            .patch(`/discussions/${this.discussions.id}/`, form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$emit("refresh");
            });
        }
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    onFileUpload(e) {
      this.image = e;
      e = e.target.files[0];
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
      this.image = e;
      if (e == null) {
      } else {
        this.url, (this.img_holder = URL.createObjectURL(e));
      }
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>