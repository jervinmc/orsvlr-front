<template>
  <div align="center">
    <confirmation
      :isOpen="dialogConfirm"
      @cancel="dialogConfirm = false"
      :items="{ status: status, id: id, email: email }"
    />
    <div class="text-h4">Status</div>
    <div class="pa-16">
      <v-text-field
        outlined
        v-model="code"
        @keyup.enter="searchCode"
      ></v-text-field>
    </div>
    <v-row class="pa-5" v-if="status != ''">
      <v-col align="start">
        <div>Client Name : {{ name }}</div>

        <div>Contact Number: {{ contact_number }}</div>
        <div>Email: {{ email }}</div>
        <div>Reservation Type : {{ reservation_type }}</div>
        <div>Reference Code : {{ code }}</div>
        <div>Remaining Balance : {{ total_price }}</div>
        <v-row>
          <v-col cols="auto">
            <div>Reservation Information :</div>
          </v-col>
          <v-col>
            <div>
              {{ pool_type }}
            </div>
            <div>
              {{ reservation_package }}
            </div>
            <div>
              {{ date_start }}
            </div>
          </v-col>
        </v-row>
        <div v-if="status == 'To Pay'">
          Upload Proof of Payment Here :
          <v-icon @click="$refs.file.click()">mdi-plus</v-icon>
          <div class="hover_pointer pt-10">
            <img
              v-if="status == 'To Pay'"
              @click="$refs.file.click()"
              :src="img_holder"
              height="150"
              width="150"
              class="mb-0"
            />
            <v-btn @click="submit" :loading="buttonLoad">Submit</v-btn>
          </div>
        </div>

        <div v-if="status != 'cancelled'">
          Cancel Unpaid Reservation :
          <v-icon @click="cancel">mdi-close-circle</v-icon>
        </div>
      </v-col>
      <v-col>
        <div>
          Customer Status :
          <span :style="getColorStatus(status)"> {{ status }}</span>
        </div>
      </v-col>
      <v-col class="d-none">
        <input
          style="display: none"
          type="file"
          id="fileInput"
          ref="file"
          accept="image/png, image/jpeg"
          @change="onFileUpload"
        />
      </v-col>

      <v-col>
        <div>TIME REMAINING</div>
        <div>{{remaining}} Minutes</div>
        <div class="red--text">Reminder</div>
        <div>
          If Duration of time count to 00:00 <br />
          the reservation would auto reject
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment';
import Confirmation from "./Confirmation.vue";
export default {
  components: { Confirmation },
  data() {
    return {
      code: "",
      name: "",
      to_pay: "",
      total_price: "",
      status: "",
      reservation_package: "",
      reservation_type: "",
      email: "",
      dialogConfirm: false,
      pool_type: "",
      date_start: "",
      contact_number: "",
      img_holder: "",
      remaining:'',
      image: "",
      id: "",
      buttonLoad: false,
    };
  },
  created(){
    //   this.getMinutes()
  },
  methods: {
           formatDate(val){
      return moment(String(val)).format('YYYY-MM-DD HH:mm')
    },
    timeRemaining(val){
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes()
      var dateTime = date+' '+time;
     var  diff= Math.abs(new Date(moment(String(val)).format('YYYY/MM/DD HH:mm')) - new Date(moment(String(dateTime)).format('YYYY/MM/DD HH:mm')));
      return Math.floor((diff/1000)/60)
    },
    getMinutes(time) {
      var today = new Date();
      alert(today)
    //   var Christmas = new Date(today.getFullYear() + "-12-25");
      var diffMs = Date('2022-01-16') - today; // milliseconds between now & Christmas
      var diffDays = Math.floor(diffMs / 86400000); // days
      var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
      alert(
        diffDays +
          " days, " +
          diffHrs +
          " hours, " +
          diffMins +
          " minutes until Christmas =)"
      );
    },
    async submit() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("proofOfPayment", this.image);
          form_data.append("status", "pending");
        }
        const response = await this.$axios
          .patch(`/book/${this.id}/`, form_data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(() => {
            this.buttonLoad = false;
          });
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
      }
    },
    cancel() {
      this.dialogConfirm = true;
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
    async searchCode() {
      try {
        const response = await this.$axios
          .post(
            "/code/code/",
            {
              code: this.code,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            this.name = res.data[0].firstname + " " + res.data[0].lastname;
            this.total_price = res.data[0].price;
            this.status = res.data[0].status;
            this.reservation_package = res.data[0].package;
            this.email = res.data[0].email;
            this.pool_type = res.data[0].subtype;
            this.reservation_type = res.data[0].service_type;
            this.contact_number = res.data[0].contact_number;
            this.to_pay = res.data[0].to_pay;
            this.date_start = res.data[0].date_start;
            this.id = res.data[0].id;
            this.remaining =  60-this.timeRemaining(this.formatDate(res.data[0].transaction_date))
          });
      } catch (error) {
        alert(error);
        // alert(error);
      }
    },
    getColorStatus(item) {
      if (item == "Rejected") {
        return "background-color:#FFCCCC;border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "confirmed") {
        return "background-color:#CCFFCE;border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "Request for Cancellation") {
        return "background-color:#CCEBFF;border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "pending") {
        return "background-color:#FFF5CC;border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "Cancelled") {
        return "border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "To Pay") {
        return "border-radius:15px;padding:7px; width:150px; color: green;";
      }
    },
  },
};
</script>

<style>
</style>