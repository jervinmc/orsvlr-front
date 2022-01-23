<template>
  <div align="center">
    <dialog-greetings
      :isOpen="dialogGreetings"
      @cancel="dialogGreetings = false"
      :isAdd="isAdd"
    />
    <open-package
      :isOpen="dialogAdd"
      @cancel="dialogAdd = false"
      @refresh="loadData"
      :items="selectedItem"
      :isAdd="isAdd"
    />
    <v-stepper v-model="e1" width="700">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Contact Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Reservation Form
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Confirmation </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card width="900">
            <div class="pa-5" align="start">
              <v-row>
                <v-col cols="12">
                  <div>First Name <span class="red--text">*</span></div>
                  <div>
                    <v-text-field
                      outlined
                      :error-messages="
                        isErrorFirstName ? 'this field is required' : false
                      "
                      v-model="book.firstname"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>Middle Name</div>
                  <div>
                    <v-text-field
                      outlined
                      :error-messages="
                        isErrorCustomerName ? 'this field is required' : false
                      "
                      v-model="book.middle_name"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>Last Name<span class="red--text">*</span></div>
                  <div>
                    <v-text-field
                      outlined
                      :error-messages="
                        isErrorLastName ? 'this field is required' : false
                      "
                      v-model="book.lastname"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>Contact Number<span class="red--text">*</span></div>
                  <div>
                    <v-text-field
                      :counter="11"
                      outlined
                      @keypress="typeNumber"
                      v-model="book.contact_number"
                      :error-messages="
                        isExceedText
                          ? 'Must be 11 numbers'
                          : isErrorContactNumber
                          ? 'this field is required'
                          : false
                      "
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>Email<span class="red--text">*</span></div>
                  <div>
                    <v-text-field
                      outlined
                      :rules="emailRules"
                      v-model="book.email"
                      :error-messages="
                        isErrorEmail ? 'this field is required' : false
                      "
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card>
          <div class="pt-5">
            <v-btn text> Cancel </v-btn>
            <v-btn color="primary" @click="validatePage1"> Continue </v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card width="900">
            <div class="pa-5" align="start">
              <v-row>
                <v-col cols="12" class="px-0">
                  <div>Service Type</div>
                  <div>
                    <v-select
                      :items="service_list"
                      @change="packageMapper"
                      v-model="service_type"
                      :error-messages="isErrorServiceType ? 'This field is required.' :  false"
                      outlined
                    ></v-select>
                  </div>
                </v-col>
                <div v-if="service_type == 'Pool'" style="width: 100%">
                  <v-col cols="12" class="px-0">
                    <div>Pool Type</div>
                    <div>
                      <v-select
                     
                        :items="pool_list"
                        v-model="book.pool_type"
                        outlined
                        label="Standard"
                      ></v-select>
                    </div>
                  </v-col>
                  <div
                    v-if="
                      book.pool_type == 'Private Pool 1' ||
                      book.pool_type == 'Private Pool 2'
                    "
                  >
                    <v-col class="pa-0">
                      <div>Check in Date</div>
                      <div>
                        <v-menu
                          class="pa-0"
                          ref="eventDate"
                          v-model="eventDate"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="date"
                              outlined
                              label="Date"
                              persistent-hint
                              v-bind="attrs"
                              @blur="date = date"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            @change="changeDate"
                            v-model="date"
                            :min="min_date"
                            no-title
                          ></v-date-picker>
                        </v-menu>
                      </div>
                    </v-col>
                    <v-col cols="12" class="px-0">
                      <div>Package</div>
                      <div>
                        <v-select
                          @change="packageSetter"
                          :items="package_list"
                          v-model="book.package"
                          outlined
                          label="Standard"
                        ></v-select>
                      </div>
                      <!-- <div class="red--text">
                      {{ book.descriptions }}
                    </div> -->
                    </v-col>
                    <v-col align-self="center" align="center" class="pr-10">
                      <v-btn
                        class="rnd-btn"
                        rounded
                        large
                        color="black"
                        depressed
                        dark
                        width="170"
                        @click="editItem"
                      >
                        <span class="text-none">View</span>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" class="px-0">
                      <div>Price</div>
                      <div>
                        <v-text-field
                          outlined
                          v-model="book.price"
                          readonly
                        ></v-text-field>
                      </div>
                    </v-col>
                    <div>Promo Code</div>
                    <v-text-field outlined v-model="book.promo"></v-text-field>
                    <div class="red--text">Reminder</div>
                    <div>
                      To reserve the booking you need to pay 50%<br />
                      of the said total prices
                    </div>
                    <v-divider></v-divider>
                    <div class="text-h5">
                      To be paid : Php
                      {{
                        formatPrice(
                          priceToCompute * 0.5 == NaN ? 0 : priceToCompute * 0.5
                        )
                      }}
                    </div>
                  </div>
                  <!-- end of pool private-->
                  <div v-else-if="book.pool_type == 'Public Pool'">
                    <div align="center">Cottage</div>
                    <div>
                      <v-row
                        align="center"
                        v-for="(x, index) in amenities"
                        :key="x"
                      >
                        <v-col cols="auto">
                          <div>
                            {{ x.name }}
                          </div>
                        </v-col>
                        <v-col cols="auto">
                          <div>
                            <v-checkbox
                              v-model="selected_amenities[index]"
                            ></v-checkbox>
                          </div>
                        </v-col>
                        <v-col>
                          Php
                          {{ x.price }}
                        </v-col>
                      </v-row>
                    </div>
                    <v-radio-group v-model="book.dateoption">
                      <v-row>
                        <v-col>
                          <v-radio
                            label="Day-(Kids-50,Adults-100)"
                            value="day"
                          ></v-radio>
                        </v-col>
                        <v-col>
                          <v-radio
                            label="Night-(Kids-100,Adults-150)"
                            value="night"
                          ></v-radio>
                        </v-col>
                        <v-col>
                          <v-radio
                            label="Overnight-(Kids-150,Adults-200)"
                            value="overnight"
                          ></v-radio>
                        </v-col>
                      </v-row>
                    </v-radio-group>
                    <div>Adult</div>
                    <div>
                      <v-text-field
                        placeholder="11 - 59 years old"
                        outlined
                        v-model="book.adults"
                      ></v-text-field>
                    </div>
                    <div>Kids</div>
                    <div>
                      <v-text-field
                        outlined
                        v-model="book.kids"
                        placeholder="4 - 10 years old"
                      ></v-text-field>
                    </div>
                    <div align="center">
                      <v-date-picker
                        @change="changeDate"
                        v-model="date"
                        :min="min_date"
                        no-title
                      ></v-date-picker>
                    </div>
                    <v-col cols="12" class="px-0">
                      <div>Total Price</div>
                      <div>
                        <v-text-field
                          outlined
                          v-model="book.price"
                          readonly
                        ></v-text-field>
                      </div>
                    </v-col>

                    <div class="red--text">Reminder</div>
                    <div>
                      To reserve the booking you need to pay 50%<br />
                      of the said total prices
                    </div>
                    <v-divider></v-divider>
                    <div class="text-h5">
                      To be paid : Php
                      {{
                        formatPrice(
                          book.price * 0.5 == NaN ? 0 : book.price * 0.5
                        )
                      }}
                    </div>
                  </div>
                </div>
                <div v-if="service_type == 'Room'" style="width: 100%">
                  <v-col cols="12" class="px-0">
                    <div>Room Type</div>
                    <div>
                      <v-select
                        :items="room_list"
                        v-model="book.room_type"
                        outlined
                        @change="packageSetter"
                      ></v-select>
                    </div>
                  </v-col>
                  <div align="center">
                    <v-date-picker
                      @change="checkPackageRoom"
                      v-model="date_range"
                      :min="min_date"
                      :max="max_date"
                      range
                      no-title
                    ></v-date-picker>
                    <v-btn @click="resetDate">Reset Date</v-btn>
                  </div>
                   <v-col cols="12" class="px-0">
                      <div>Package</div>
                      <div>
                        <v-select
                          @change="packageSubtypeSetter"
                          :items="package_list"
                          v-model="book.package"
                          outlined
                          label="Standard"
                        ></v-select>
                      </div>
                      <!-- <div class="red--text">
                      {{ book.descriptions }}
                    </div> -->
                    </v-col>
                     <v-col align-self="center" align="center" class="pr-10">
                      <v-btn
                        class="rnd-btn"
                        rounded
                        large
                        color="black"
                        depressed
                        dark
                        width="170"
                        @click="editItem"
                      >
                        <span class="text-none">View</span>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" class="px-0">
                      <div>Total Price</div>
                      <div>
                        <v-text-field
                          outlined
                          v-model="book.price"
                          readonly
                        ></v-text-field>
                      </div>
                    </v-col>
                     <div class="red--text">Reminder</div>
                    <div>
                      To reserve the booking you need to pay 50%<br />
                      of the said total prices
                    </div>
                    <v-divider></v-divider>
                    <div class="text-h5">
                      To be paid : Php
                      {{
                        formatPrice(
                          priceToCompute * 0.5
                        )
                      }}
                      
                    </div>
                </div>
              </v-row>
            </div>
          </v-card>
          <v-btn text @click="e1 = 1"> Cancel </v-btn>
          <v-btn color="primary" @click="validatePage2"> Continue </v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card width="900" align="start">
            <div class="text-h5">First Name: {{ book.firstname }}</div>
            <div class="text-h5">Last Name: {{ book.lastname }}</div>
            <div class="text-h5">Contact Number: {{ book.contact_number }}</div>
            <div class="text-h5">Email: {{ book.email }}</div>
            <v-row>
              <v-col cols="auto">
                <div>Reservation Information:</div>
              </v-col>
              <v-col align="start">
                <div>
                  {{ book.pool_type }}
                </div>
                <div>
                  {{ book.package }}
                </div>
                <div>
                  {{ date }}
                </div>
                <div class="text-h6">
                  {{ book.total_price }}
                </div>
                 <div class="text-h6">
                 Promo Code : {{book.promo}} ({{ percentage }}%)
                </div>
              </v-col>
            </v-row>
            <div  class="pt-10" align="center">
              Total Price : {{formatPrice((((priceToCompute ))))}}
            </div>
            <div class="red--text" align="center" >
            Total Discount :  -  Php {{ formatPrice(((priceToCompute-((priceToCompute - (priceToCompute*parseInt(percentage)/100)))))) }}(Promo Code)
            </div>
            <!-- <div align="center">
              Total Amount of 50% Downpayment: Php {{ formatPrice((priceToCompute-(priceToCompute - (priceToCompute*parseInt(percentage)/100)*.50))) }}
            </div> -->
            <v-divider></v-divider>
             <div class="green--text text-h5" align="center" >
            <b> Downpayment required: Php {{formatPrice((priceToCompute * 0.5)-((priceToCompute * 0.5)*(parseInt(percentage)/100))) }}</b>
            </div>
            <div>
                <!-- Php {{ (formatPrice(priceToCompute * 0.5))*(parseInt(percentage)/100) }} -->
            </div>
            <v-divider></v-divider>
            <div class="red--text" align="center">Reminder</div>
            <div align="center" class="mb-5">
                To reserve the booking you need to pay the downpayment required.
            </div>
            <div align="center" class="text-h5">
              CODE : {{ this.book.code }}
            </div>
            <div class="red--text"></div>
            <v-col cols="12" class="px-0">
              <div>Mode of Payment</div>
              <div>
                <v-select
                  :error-messages="
                    isErrorMOP ? 'This field is required.' : false
                  "
                  @change="mopSetter"
                  :items="mopList"
                  v-model="book.mode_of_payment"
                  outlined
                  label="Standard"
                  hide-details=""
                ></v-select>
              </div>
            </v-col>
            <div class="text-h6" align="center">{{ mopAccountName }}</div>
            <div class="text-h6" align="center">{{ mopAccountNumber }}</div>
            <div class="text-h6 pt-5">
              downpayment should be settle within 1hr inorder to confirm the
              registrationof reservation will be deny<br />
              Terms & Condition
            </div>
          </v-card>
          <v-btn text @click="e1 = 2"> Cancel </v-btn>
          <v-btn color="primary" :loading="buttonLoad" @click="confirm">
            Confirm
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script >
import validations from "@/utils/validations";
import { numberOnly } from "~/utils/helpers";
import OpenPackage from "./OpenPackage.vue";
import DialogGreetings from "./DialogGreetings.vue";
import moment from "moment";
export default {
  components: { OpenPackage, DialogGreetings },
  created() {
    this.disableMinDate();
    this.timestamp();
    this.loadData();
  },
  data() {
    return {
      percentage:0,
      promo:[],
      ...validations,
      room_list: ["Standard", "Deluxe", "Suite"],
      selected_amenities: [],
      date_range:[],
      amenities: [],
      isErrorMOP: false,
      selectedItem: [],
      dialogAdd: false,
      isErrorLastName: false,
      isErrorFirstName: false,
      isExceedText: false,
      isErrorCustomerName: false,
      isErrorContactNumber: false,
      isErrorEmail: false,
      pool_type: "",
      eventDate: false,
      image: "",
      pool_list: ["Private Pool 1", "Private Pool 2", "Public Pool"],
      service_list: ["Pool", "Room"],
      book: [],
      img_holder: "image_placeholder.png",
      image: "",
      mopAccountName: "",
      mopAccountNumber: "",
      isErrorServiceType:false,
      url: "",
      eventDate: null,
      date: "",
      e1: 1,
      mop: [],
      service_type: "",
      users: [],
      e1: 1,
      isLoaded: false,
      time_range: "",
      dialogGreetings: false,
      mopList: [],
      packageLister: [],
      rooms: [],
      pools: [],
      package_list: [],
      events: [],
      buttonLoad: false,
      confirmedDates: [],
      items: [],
      time_range_list: [],
      mop: [],
      min_date: "",
      max_date: "",
      currentMinDate:''
    };
  },
  watch:{
    date_range(){
         if (this.service_type == "Room" ) {
        this.min_date = this.date_range[0]
        var currentDate = moment(this.min_date);
        var futureMonth = moment(currentDate).add(1, "M");
        var futureMonthEnd = moment(futureMonth).endOf("month");
        if (
          currentDate.date() != futureMonth.date() &&
          futureMonth.isSame(futureMonthEnd.format("YYYY-MM-DD"))
        ) {
          futureMonth = futureMonth.add(1, "d");
        }
        this.max_date = this.formatDateFuture(futureMonth);
       
        return;
      }
    }
  },

  methods: {
    async promoGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/promo/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.promo = res.data;
          this.isLoading = false;
        });
    },
    validatePage2(){
      this.promo.map(val=>{
        if(val.promoCode==this.book.promo){
          this.percentage = val.percentage
        }
      })
      if(this.service_type == '' || this.service_type == null || this.book.price == null) {

        return
      }
      this.e1 = 3
    },
     dateRangeOverlaps(a_start, a_end, b_start, b_end) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
    if (b_start <=  a_start && a_end   <=  b_end) return true; // a in b
    return false;
},
 multipleDateRangeOverlaps(timeEntries) {
    let i = 0, j = 0;
    let timeIntervals = timeEntries.filter(entry => entry.from != null && entry.to != null && entry.from.length === 8 && entry.to.length === 8);

    if (timeIntervals != null && timeIntervals.length > 1)
    for (i = 0; i < timeIntervals.length - 1; i += 1) {
        for (j = i + 1; j < timeIntervals.length; j += 1) {
                if (
                dateRangeOverlaps(
            timeIntervals[i].from.getTime(), timeIntervals[i].to.getTime(),
            timeIntervals[j].from.getTime(), timeIntervals[j].to.getTime()
                    )
                ) return true;
            }
        }
   return false;
},
    checkPackageRoom(){
      this.packageSetter()
      if(this.service_type=='Room'){
        var threshold_item = []
          var dates = this.items.map(item=>{
            if((item.subtype==this.book.room_type && item.status=='To Pay') || item.subtype==this.book.room_type && item.status=='confirmed'){
              
              if(this.dateRangeOverlaps(this.date_range[0],this.date_range[1],this.formatDateFuture(new Date(item.date_start)),this.formatDateFuture(new Date(item.date_end)))){
              
                 for (let x in this.package_list) {
                  if (item.package == this.package_list[x]) {
                    this.package_list.splice(x, 1);
                  }
          }
              }
              else{

              }
              
              
                //  return new Date(item.date_start);
            }
           
          })
          //  dates = threshold_item.map(item=>{
          //   if(item.subtype==this.book.room_type){
          //        if(this.date_range[0] > new Date(item.date_start) && this.date_range[1] < new Date(item.end)  )
          //        return new Date(item.date_start);
          //   }
           
          // })
          
      //     var latest = new Date(Math.max.apply(null,dates));   
      //     var earliest = new Date(Math.min.apply(null,dates));
      //     this.package_list=[]
      //     this.rooms.map((val) => {
      //       if(val.service_type==this.book.room_type)
      //       {
      //          this.package_list.push(val.package)
      //       }
           
      // });
      }
    },
    clickDate(){
        if (this.service_type == "Room" && this.date_range==[]) {
        this.min_date = this.date_range[0]
        var currentDate = moment(this.min_date);
        var futureMonth = moment(currentDate).add(1, "M");
        var futureMonthEnd = moment(futureMonth).endOf("month");
        if (
          currentDate.date() != futureMonth.date() &&
          futureMonth.isSame(futureMonthEnd.format("YYYY-MM-DD"))
        ) {
          futureMonth = futureMonth.add(1, "d");
        }
        this.max_date = this.formatDateFuture(futureMonth);
       
        return;
      }
    },
    resetDate(){   
      this.min_date=this.currentMinDate
      this.max_date=''
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
    disableMinDate() {
      var today = new Date();
      var day = today.getDate() + 1;
      var date =
        today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" + day;

      this.min_date = date;
      this.currentMinDate = date
    },
    formatDate(val) {
      return moment(String(val)).format("YYYY-MM-DD hh:mm");
    },
    formatDateFuture(val) {
      return moment(String(val)).format("YYYY-MM-DD");
    },
    formatDate1(date) {
      var [date, month, year] = date.toLocaleDateString().split("/");
      return `${year}-${month}-${date}`;
    },
    editItem() {
      this.dialogAdd = true;
    },
    validatePage1() {
      if (this.book.email == null) {
        this.isErrorEmail = true;
        return;
      } else {
        this.isErrorEmail = false;
      }
      if (this.book.contact_number == null) {
        this.isErrorContactNumber = true;
        return;
      } else if (this.book.contact_number.length != 11) {
        this.isExceedText = true;
        return;
      } else {
        this.isErrorContactNumber = false;
      }
      if (this.book.firstname == null) {
        this.isErrorFirstName = true;
        return;
      } else {
        this.isErrorFirstName = false;
      }
      if (this.book.lastname == null) {
        this.isErrorLastName = true;
        return;
      } else {
        this.isErrorLastName = false;
      }
      this.e1 = 2;
    },
    disablePastDates(val) {
      console.log(new Date().toISOString().substr(0, 10));
      return (
        val >= new Date().toISOString().substr(0, 10) &&
        !this.confirmedDates.some((item) => {
          return item == val;
        })
      );
    },

    async confirm() {
      if (
        this.book.mode_of_payment == "" ||
        this.book.mode_of_payment == null
      ) {
        this.isErrorMOP = true;
        return;
      }
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        form_data.append("package", this.book.package);
        form_data.append("price", this.priceToCompute);
        form_data.append("to_pay", this.priceToCompute * 0.5);
        form_data.append("date_start", this.service_type =='Room' ? this.date_range[0] : this.date);
        form_data.append("date_end", this.service_type =='Room' ? this.date_range[1] : this.date);
        form_data.append("email", this.book.email);
        form_data.append("firstname", this.book.firstname);
        form_data.append("lastname", this.book.lastname);
        form_data.append("middlename", this.book.middlename);
        form_data.append("mode_of_payment", this.book.mode_of_payment);
        form_data.append("code", this.book.code);
        form_data.append("status", "To Pay");
        form_data.append("service_type", this.service_type);
        form_data.append("subtype", this.service_type =='Room' ? this.book.room_type  : this.book.pool_type);
        form_data.append("transaction_date", this.timestamp());
        form_data.append("contact_number", this.book.contact_number);
        const response = await this.$axios
          .post("/book/", form_data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(() => {
            this.buttonLoad = false;
            this.dialogGreetings = true;
          });
      } catch (error) {
        this.buttonLoad = false;
      }
    },
    packageSubtypeSetter(){
       if(this.service_type=='Room'){
          // this.package_list=[]
          this.rooms.map((val) => {
            if(this.book.package == val.package)
            {
              this.selectedItem = val;
               this.book.price = val.price
               var start = moment(this.date_range[0]);
              var end = moment(this.date_range[1]);
              var vals = this.datediff(start, end);
              this.book.price = (val.price)*vals
               this.priceToCompute = (val.price)*vals
            }
      });
      return
      }
    },
    packageSetter() {
        if(this.service_type=='Room'){
          this.package_list=[]
          this.rooms.map((val) => {
            if(val.service_type==this.book.room_type)
            {
               this.package_list.push(val.package)
            }
           
      });
      return
      }
      this.pools.map((val) => {
        if (
          this.book.pool_type == val.pool_type &&
          this.book.package == val.package
        ) {
          this.book.price = this.formatPrice(val.price);
          this.priceToCompute = val.price;
          this.image = val.image;
          this.book.descriptions = val.descriptions;
          this.selectedItem = val;
        }
      });
    },
    packageMapper() {
      this.isErrorServiceType = false
      this.package_list = [];
      this.pools.map((val) => {
        if (this.book.pool_type == val.pool_type) {
          this.package_list.push(val.package);
          this.packageLister.push(val.package);
        }
      });
    },
    parseDate(str) {
      var mdy = str.split("/");
      return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    },

    datediff(first, second) {
      // Take the difference between the dates and divide by milliseconds per day.
      // Round to nearest whole number to deal with DST.
      return Math.round((second - first) / (1000 * 60 * 60 * 24));
    },
    changeDate() {
      if (this.book.pool_type == "Public Pool") {
        var total_amenities = 0;
        var rate = 0;
        var total_price_person = 0;
        var total = 0;
        for (let key in this.amenities) {
          if (this.selected_amenities[key]) {
            total_amenities =
              parseInt(total_amenities) + parseInt(this.amenities[key].price);
          }
        }
        if (this.book.dateoption == "day") rate = 50;
        else if (this.book.dateoption == "night") rate = 100;
        else if (this.book.dateoption == "overnight") rate = 150;
        total_price_person =
          this.book.adults * (50 + rate) + this.book.kids * (0 + rate);
          
        this.book.price = total_price_person + total_amenities;
        this.priceToCompute = this.book.price;
        // alert(this.book.price)
        return;
      }
      this.packageMapper();
      this.confirmedDates = [];
      console.warn(this.items);
      this.items.map((item) => {
        if (
          (this.date == item.date_start && item.status == "confirmed") ||
          (this.date == item.date_start && item.status == "To Pay") ||
          (this.date == item.date_start && item.status == "pending")
        ) {
          for (let x in this.package_list) {
            if (item.package == this.package_list[x]) {
              this.package_list.splice(x, 1);
            }
          }
        }
      });

      
      this.book.total_price = this.book.price;
    },
    loadData() {
      const string_length = 10;
      this.book.code = [...Array(string_length)]
        .map((i) => (~~(Math.random() * 36)).toString(36))
        .join("");
      this.poolsGetall();
      this.roomsGetall();
      this.amenitiesGetall();
      this.eventsGetall();
      this.promoGetall();
      this.bookGetall();
      this.mopGetall();
    },
    async amenitiesGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/amenities/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.amenities = res.data;
          this.isLoading = false;
        });
    },
    async bookGetall() {
      const res = await this.$axios
        .get(`/book/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.items = res.data;
          this.isLoading = false;
        });
    },
    mopSetter() {
      this.mop.map((item) => {
        if (item.modeOfPayment == this.book.mode_of_payment) {
          this.mopAccountNumber = item.accountNumber;
          this.mopAccountName = item.accountName;
        }
      });
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/events/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.events = res.data;
          this.isLoading = false;
        });
    },
    async mopGetall() {
      const res = await this.$axios
        .get(`/payment/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.mop = res.data;
          this.isLoading = false;
          this.mop.map((item) => {
            this.mopList.push(item.modeOfPayment);
          });
        });
    },
    async poolsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/pools/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.pools = res.data;
          this.isLoading = false;
        });
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/events/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.events = res.data;
          this.isLoading = false;
        });
    },
    async roomsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/rooms/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.rooms = res.data;
          // this.rooms.map(item=>{
          //   this.room_list.push(this.rooms)
          // })
          this.isLoading = false;
        });
    },

    timeRangeSetter() {
      if (this.pool_type == "Private Pool 1")
        this.time_range_list = [
          "Morning 8:00 AM to 4: PM",
          "6pm-6am(Over Night)",
        ];
      else if (this.pool_type == "Private Pool 2")
        this.time_range_list = ["DAYTOUR 8AM-4PM", "OVERNIGHT 6PM-6AM"];
    },
    async login() {
      this.isLoaded = true;
      var credentials = {
        email: this.users.email,
        password: this.users.password,
      };
      try {
        var response = await this.$axios
          .post("auth/login/", credentials)
          .then((response) => {
            localStorage.setItem("token", response.data.access);
            const users = this.$axios
              .get(`/users/details/`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((users) => {
                localStorage.setItem("id", users.data.id);
                localStorage.setItem("email", users.data.email);
                localStorage.setItem("name", users.data.name);
                localStorage.setItem("firstname", users.data.firstname);
                localStorage.setItem("lastname", users.data.lastname);
                localStorage.setItem("image", users.data.image);
                localStorage.setItem("account_type", users.data.account_type);
                // if(users.data.is_superuser) window.location.href = "/home";
                // else window.location.href = "/home";
              });
          });

        this.isLoaded = false;
      } catch (error) {
        this.snackbar = true;
        this.isLoaded = false;
      }
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
    typeNumber(e) {
      return numberOnly(e);
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style>
</style>