<template>
  <v-dialog v-model="isOpen" width="1000" persistent>
   
    <check-in
      :isOpen="dialogCheckin"
      @cancel="dialogCheckin = false"
      @save="save"
      @refresh="loadData"
      :items="events"
    />
    <v-overlay :absolute="true" :value="fullscreenImage">
      <v-img :src="items.proofOfPayment" height="800" width="800">
        <div align="end" class="pa-10">
          <v-icon @click="fullscreenImage = false" color="red" size="40">
            mdi-close
          </v-icon>
        </div>
      </v-img>
    </v-overlay>
    <v-card align="start" class="pa-16">
      <div>
        <div align="center" class="text-h5 pb-10">
          <b>RESERVATION DETAILS</b>
        </div>
        <div>
          <v-row>
            <v-col>
              <v-card class="pa-5 mb-10" elevation="5">
                <div>Reference Code : {{ items.code }}</div>
                <div>
                  Customer Name : {{ items.firstname }} {{ items.firstname }}
                </div>
                <div>Contact : {{ items.contact_number }}</div>
                <div>Email : {{ items.email }}</div>
                <div>Total Price : {{ items.price }}</div>
                <div>
                  <!-- {{items}} -->
                  Remaining Balance :
                  {{ items.status == "To Pay" || items.status == "pending" ? items.price : items.to_pay }}
                </div>
                <div>
                  <v-row>
                    <v-col cols="auto">
                      <div>Reservation Information:</div>
                    </v-col>
                    <v-col align="start">
                      <div>
                        {{
                          items.pool_type == "undefined" ? "" : items.pool_type
                        }}
                      </div>
                      <div>
                        {{ items.package == "undefined" ? "" : items.package }}
                      </div>
                      <div>
                        {{ items.date_start }}
                      </div>
                      <div v-if="items.service_type =='Room'">
                        {{ items.date_end }}
                      <div>
                          ({{datediff(items.date_start,items.date_end)}} Days)
                      </div>
                      </div>
                      <div class="text-h6">
                        {{ items.total_price }}
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
                <v-img
                  :src="items.proofOfPayment"
                  height="300"
                  width="300"
                  @click="fullscreenImage = true"
                >
                </v-img>
              </v-card>
              <v-btn @click="checkin" v-if="items.status == 'Checked In'"
                >Ad ons</v-btn
              >
              <div v-if="items.status == 'Checked In'">
                Checked In : {{ items.checkin_time }}
              </div>
              <div v-if="items.status == 'Checked Out'">
                Checked Out : {{ items.checkout_time }}
              </div>
            </v-col>
          </v-row>
        </div>
        <div>
          <div>Ad Ons : {{ items.ad_ons }}</div>
          <div>Others : {{ items.ad_other }}</div>
          <div>Discount : {{ items.ad_discount }}</div>
          <div>Total Paid : {{ items.total_paid }}</div>
          <v-divider></v-divider>
        </div>
        <!-- <div v-if="items.status!='Request For Cancellation' && items.status!='reschedule' && items.status!='confirmed' && items.status!='completed' ">
            Remarks:
          </div>
          <div v-if="items.status!='Request For Cancellation' && items.status!='reschedule' && items.status!='confirmed' && items.status!='completed'">
            <v-textarea outlined readonly></v-textarea>
          </div> -->
        <div v-if="items.status == 'Request For Cancellation'">
          Reason For Cancellation:
        </div>
        <div
          v-if="
            items.status == 'Request For Cancellation' ||
            items.status == 'Cancelled'
          "
        >
          <v-textarea
            outlined
            readonly
            v-model="items.cancellation_description"
          ></v-textarea>
        </div>
        <div v-if="items.status == 'reschedule'">Reason For Reschedule:</div>
        <div v-if="items.status == 'reschedule' || items.status == 'Cancelled'">
          <v-textarea
            outlined
            readonly
            v-model="items.reason_reschedule"
          ></v-textarea>
        </div>
        <div v-if="items.status == 'reschedule'">
          Preferred Schedule: {{ items.date_reschedule }}
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
        <div v-if="items.status == 'Checked In'">
          <v-row>
            <v-col align="start">
              <div>
                <div v-for="x in ads" :key="x">
                  {{ x }}
                </div>
                <div>total ad ons : {{ ad_total }}</div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="start">
              <div>
                <div v-for="x in others" :key="x">
                  {{ x }}
                </div>
                <div>total other payment : {{ total_others }}</div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="start">
              <div>
                <div v-for="x in discount" :key="x">
                  {{ x }}
                </div>
                <div>total discount : {{ discount_total }}</div>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-divider></v-divider>
        <div align="start" v-if="items.status == 'Checked In'">
          Other Payment {{ ad_total + total_others - discount_total }}

          <div>Remaining Balance : {{ items.to_pay }}</div>
          <div>
            To be paid:
            {{
              parseInt(items.to_pay) +
              (ad_total + total_others - discount_total)
            }}
          </div>
        </div>
        <v-row
          v-if="items.status == 'confirmed' || items.status == 'Checked In'"
        >
          <v-col>
            <div v-if="items.status == 'confirmed'">
              To Pay : {{ items.to_pay }}
            </div>
            <div>
              Amount Received:
              <v-text-field outlined v-model="amountReceived" hide-details=""></v-text-field>
              <div>
                Amount Received accepts string as an input
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="transparent" @click="cancel"> Go back </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="transparent"
              @click="checkedIn"
              :loading="buttonLoad"
              v-if="items.status == 'confirmed'"
            >
              Check In
            </v-btn>
            <v-btn
              color="transparent"
              @click="checkedOut"
              :loading="buttonLoad"
              v-if="items.status == 'Checked In'"
            >
              Check Out
            </v-btn>
          </v-col>
          <v-col v-if="items.status=='completed'">
             <v-btn
              color="success"
              text
              @click="downloadPdf"
              :loading="buttonLoad"
            >
              Print
            </v-btn>
             <div ref="content"  class="d-none">
        <div align="start" style="font-size:5px;text-align:start;padding-bottom:20px">
          <div style="padding:10px;width:100px;font-size:10px">
               <b> Receipt Form</b>
        </div>
         <div style="padding-left:20px">
           <div  style="padding:0px;width:100px;font-size:5px">Contact : {{items.contact_number}} </div>
          <div style="padding:0px;width:100px;font-size:5px">Email : {{items.email}} </div>
         <div style="padding:0px;width:100px;font-size:5px">Accommodation Type : {{items.service_type}} </div>
          <div style="padding:0px;width:100px;font-size:5px">Package Type : {{items.package}} </div>
           <div style="padding:0px;width:100px;font-size:5px">Date of Schedule : {{items.date_start}} </div>
           <div style="padding-top:10px">
             
           </div>
           <div style="padding:0px;width:100px;font-size:5px">Discount : {{items.ad_discount}} </div>
           <div style="padding:0px;width:100px;font-size:5px">Other : {{items.ad_other}} </div>
           <div style="padding:0px;width:100px;font-size:5px">Add Ons : {{items.ad_ons}} </div>
            <div style="padding:0px;width:100px;font-size:5px">Total Paid : {{items.total_paid}} </div>
         </div>
          </div>
         </div>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
import jsPDF from 'jspdf'
import moment from "moment";
import CheckIn from "./CheckIn.vue";
export default {
  components: { CheckIn },
  props: ["isOpen", "items", "isAdd"],
  watch: {
    items() {
      //   this.announcement=this.items
    },
  },
  created() {},
  data() {
    return {
      amountReceived: 0,
      dialogCheckin: false,
      room_list: ["Standard", "Deluxe", "Suite"],
      events: [],
      fullscreenImage: false,
      buttonLoad: false,
      ads: [],
      ad_total: 0,
      img_holder: "image_placeholder.png",
      discount: [],
      discount_total: 0,
      others: [],
      total_others: 0,
    };
  },
  methods: {
       datediff(first, second) {
      return Math.round((moment(second) - moment(first)) / (1000 * 60 * 60 * 24));
    },
    downloadPdf(){
      let pdfName = 'test'; 
    var doc = new jsPDF();
     doc.text(`Receipt Form`, 70, 10);
    doc.text(`Contact Number : ${this.items.contact_number}`, 10, 20);
    doc.text(`Accommodation Type : ${this.items.service_type}`, 10, 25);
    doc.text(`Email : ${this.items.email}`, 10, 30);
    doc.text(`Accommodation Type : ${this.items.service_type}`, 10, 35);
    doc.text(`Package Type : ${this.items.package}`, 10, 40);
    doc.text(`Date of Schedule : ${this.items.date_start}`, 10, 45);
    doc.text(`Discount : ${this.items.ad_discount}`, 10, 55);
    doc.text(`Other : ${this.items.ad_other}`, 10, 60);
    doc.text(`Add Ons : ${this.items.ad_ons}`, 10, 65);
    doc.text(`Total Paid : ${this.items.total_paid}`, 10, 70);
        //  <div style="padding-left:20px">
        //    <div  style="padding:0px;width:100px;font-size:5px">Contact : {{items.contact_number}} </div>
        //   <div style="padding:0px;width:100px;font-size:5px">Email : {{items.email}} </div>
        //  <div style="padding:0px;width:100px;font-size:5px">Accommodation Type : {{items.service_type}} </div>
        //   <div style="padding:0px;width:100px;font-size:5px">Package Type : {{items.package}} </div>
        //    <div style="padding:0px;width:100px;font-size:5px">Date of Schedule : {{items.date_start}} </div>
        //    <div style="padding-top:10px">
             
        //    </div>
        //    <div style="padding:0px;width:100px;font-size:5px">Discount : {{items.ad_discount}} </div>
        //    <div style="padding:0px;width:100px;font-size:5px">Other : {{items.ad_other}} </div>
        //    <div style="padding:0px;width:100px;font-size:5px">Add Ons : {{items.ad_ons}} </div>
        //     <div style="padding:0px;width:100px;font-size:5px">Total Paid : {{items.total_paid}} </div>
        //  </div>
    doc.save(pdfName + '.pdf');
  //      const doc = new jspdf()
  //     const html = this.$refs.content.innerHTML
  //    doc.html(html, {
  //  callback: function (doc) {
    
  //    doc.save("out.pdf");
  //       }
  //     });
 
    
    },
    async checkedOut() {
      if (
        parseInt(this.items.to_pay) +
          (this.ad_total + this.total_others - this.discount_total) >
        parseInt(this.amountReceived)
      ) {
        alert("Not enough money");
        return;
      }
      this.buttonLoad = true;
      let form_data = new FormData();
      if (this.image != null && this.image != "") {
        form_data.append("image", this.image);
      }
      form_data.append("ad_discount", this.discount);
      form_data.append("ad_ons", this.ads);
      form_data.append("others", this.others);
      form_data.append("status", "Checked Out");
      form_data.append("ad_ons_total", this.ad_total);
      form_data.append("ad_discount_total", this.discount_total);
      form_data.append("ad_other", this.others);
      form_data.append("to_pay", 0);
      form_data.append("total_paid",parseInt(this.items.price) +
         parseInt(this.ad_total + this.total_others - this.discount_total));
      form_data.append("ad_other_total", this.total_others);
      form_data.append("checkout_time", this.timestamp());
      const response = await this.$axios
        .patch(`/book/${this.items.id}/`, form_data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          this.buttonLoad = false;
          // this.$emit("cancel");
          this.$emit("refresh");
          this.$emit("cancel");
        });
    },
    timestamp() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date + " " + time;

      return dateTime;
    },
    save(val) {
      this.ads = val.ads;
      this.ad_total = val.total;
      this.discount = val.discount;
      this.discount_total = val.total_discount;
      this.others = val.other;
      this.total_others = val.total_other;
      this.dialogCheckin = false;
      console.log(val);
    },
    checkin() {
      this.dialogCheckin = true;
    },
    async checkedIn() {
      if (parseInt(this.items.to_pay) > parseInt(this.amountReceived)) {
        alert("Not enough money");
        return;
      }
      this.buttonLoad = true;
      let form_data = new FormData();
      if (this.image != null && this.image != "") {
        form_data.append("image", this.image);
      }
      form_data.append("status", "Checked In");
      form_data.append("to_pay", 0);
      form_data.append("checkin_time", this.timestamp());
      const response = await this.$axios
        .patch(`/book/${this.items.id}/`, form_data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          this.buttonLoad = false;
          this.$emit("cancel");
          this.$emit("refresh");
        });
    },
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
              this.$refs.form.reset();
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