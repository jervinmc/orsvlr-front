<template>
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card  align="start" class="pa-16">
            <div class="text-h5">First Name: {{ items.firstname }}</div>
            <div class="text-h5">Last Name: {{ items.lastname }}</div>
            <div class="text-h5">Contact Number: {{ items.contact_number }}</div>
                  <div class="text-h5">Email: {{ items.email }}</div>
            <v-row>
              <v-col cols="auto">
                <div>
                  Reservation Information:
                </div>
              </v-col>
              <v-col align="start">
                <div>
                  {{items.pool_type}}
                </div>
                <div>
                  {{items.package}}
                </div>
                <div>
                  {{items.date}}
                </div>
                <div class="text-h6">
                  {{items.total_price}}
                </div>
              </v-col>
            </v-row>
            <div align="center" class="pt-10">
              To Pay: {{items.to_pay}}
            </div>
            <div align="center" class="pt-10">
              Remaining Balance: {{items.price-items.to_pay}}
            </div>
            <div align="center" class="pt-10">
              Time Remaining: {{items.remaining}} Minutes
            </div>
            <div align="center" class="pt-10">
              Total Price: {{items.price}}
            </div>
            <div class="red--text"></div>
            <v-col cols="12" class="px-0" align="center">
              <div>Mode of Payment</div>
              <div>
                {{items.mode_of_payment}}
              </div>
                <div align="center" class="text-h5">
              CODE :  {{items.code}}
            </div>
            <div>
              PROOF OF PAYMENT
            </div>
            <div>
              <v-img :src="items.proofOfPayment" height="300" width="300">

              </v-img>
            </div>
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