<template>
  <div align="center">
  
     <v-dialog v-model="openTerms" width="900" persistent>
      <v-card class="pa-10">
        <div align="center" class="text-h6">
          <b>VILLA LEONORA TERMS AND CONDITIONS</b>
        </div>
        <div align="start" class="px-10 pt-10">
          <b> 1. PAYMENT TERMS</b>
        </div>
        <div class="pa-10">
          <div>
            Provisional bookings must be confirmed with 50% of the total Fee due
            as your booking deposit made payable to the Business. We reserve the
            right to keep this deposit if you cancel. If we are able to re-let
            the Venue for the same values we will refund this deposit or part of
            it at our discretion, but may keep a sum to cover administration
            time.
          </div>
          <div class="pt-10">
            b. One month before the event, the following is due:
          </div>
          <div class="pl-16 pt-5">i. The balance of the Fee;</div>
          <div class="pl-16 pt-5">
            ii. Damages deposit depending on the damage.We will return your
            deposit within 3 Working Days after the event, subject to any
            deductions we may require for Damage out of this sum. We will charge
            the Client for any additional Damage caused by Guests and others
            attending the Event. Note, this is only in the case of Student
            Events.
          </div>
          <div class="pl-16 pt-5">
            iii. Any additional costs(including without limitation, additional
            heating days, wedding planner services).
          </div>
          <div class="pt-5">
            c. A Statutory Right to Interest (SRI) will be chargeable at seven
            per cent (7%) over the payment mode base rate on all sums unpaid on
            the due date of payment.
          </div>
          <div class="pt-5">
            d. The Client shall not be entitled to any reduction in the cost if
            the number of Guests attending the event is less than originally
            booked.
          </div>
          <div class="pt-5">
            e. At the time of booking, the Client shall provide details of the
            estimated number of Guests attending the event.
          </div>
          <div class="pt-5">f. All payments are in pounds sterling.</div>
          <div class="pt-5">
            <b>2. CANCELLATION BY CLIENT</b>
          </div>
          <div class="pt-5">
            a. A confirmed booking shall only be deemed to be cancelled when the
            Business receives written notification of the cancellation from the
            Client.
          </div>
          <div class="pt-5">
            b. The period of notice cancellation fee will be:
          </div>
          <div class="pl-16 pt-5">
            i. 90 days or more –deposit only (subject to paragraph 1(a) above);
          </div>
          <div class="pl-16 pt-5">
            ii. Between 30 and 90 days– 75% of pre-booked total Fee; and
          </div>
          <div class="pl-16 pt-5">
            iii. Less than 30 days –100% of pre-booked total Fee.
          </div>
          <div class="pt-5">
            <b>3. CANCELLATION BY THE BUSINESS</b>
          </div>
          <div class="pt-5">
            a. The business reserves the right to cancel the event if:
          </div>
          <div class="pl-16 pt-5">
            i. the Venue has to be closed due to Force Majeure;
          </div>
          <div class="pl-16 pt-5">
            ii. the Client is in arrears with any payment due to the Business;
          </div>
          <div class="pl-16 pt-5">
            iii. the Business has reasonable grounds to believe that the Client
            may not pay the Business the balance of the Fee by the due date and
            the Business has requested the Client to explain the position and
            the Client has not done so satisfactorily;
          </div>
          <div class="pl-16 pt-5">
            iv. the Business discovers, before the Client has paid the balance
            of the Fee, that the Client has deliberately concealed information,
            or deliberately given the Business incorrect information, about the
            Event in circumstances where (if the Client had not done so) it
            would have been reasonably foreseeable that the Business would not
            have accepted the booking
          </div>
        </div>
        <v-card-actions>
          <v-row align="center">
            <v-col align="end">
              <v-btn color="grey" text @click="openTerms = false">Back </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
              Reservation Form
  
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
                  Contact Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Confirmation </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="2">
          <v-card width="900">
            <div class="pa-5" align="start">
              <v-row>
                <v-col cols="12">
                  <div>First Name <span class="red--text" style="font-size:12px">*</span></div>
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
                  <div>Last Name<span class="red--text" style="font-size:12px">*</span></div>
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
                  <div>Contact Number<span class="red--text" style="font-size:12px">*</span></div>
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
                  <div>Email<span class="red--text" style="font-size:12px">*</span></div>
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
                  <div>
                    <v-text-field
                      outlined
                      placeholder="Enter Code"
                      v-model="book.code_verification"
                      hide-details=""
                    ></v-text-field>
                    <div class="pb-5">
                      To verify your email address, please enter the code that is sent to your email.
                    </div>
                  </div>
                </v-col>
              </v-row>
               <v-btn color="black" dark @click="otp" :loading="codeLoad">Send Code </v-btn>
            </div>
          </v-card>
          <div class="pt-5">
            <v-btn text @click="e1=1"> Cancel </v-btn>
            <v-btn color="primary" @click="validatePage1"> Continue </v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="1">
          <v-card width="900">
            <div class="pa-5" align="start">
              <v-row>
                <v-col cols="12" class="px-0">
                  <div>Service Type<span class="red--text" style="font-size:12px">*</span></div>
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
                    <div>Pool Type<span class="red--text" style="font-size:12px">*</span></div>
                    <div>
                      <v-select
                      @change="resetPool"
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
                      <div>Check in Date<span class="red--text" style="font-size:12px">*</span></div>
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
                      <div>Package<span class="red--text" style="font-size:12px">*</span></div>
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
                      <div>Price<span class="red--text" style="font-size:12px">*</span></div>
                      <div>
                        <v-text-field
                          outlined
                          v-model="book.price"
                          readonly
                        ></v-text-field>
                      </div>
                    </v-col>
                    <div>Promo Code<span class="grey--text" style="font-size:12px">(Optional)</span></div>
                    <v-text-field outlined v-model="book.promo"></v-text-field>
                    <div>Down Terms<span class="red--text" style="font-size:12px">*</span></div>
                    <v-select outlined :items="['100%','50%']" v-model="book.down"></v-select>
                    <v-divider></v-divider>
                    <div class="text-h5">
                      To be paid : Php
                      {{
                        formatPrice(
                          priceToCompute * 0.5 == NaN ? 0 :   priceToCompute * (book.down=='50%'? 0.5 : 1)
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
                    <div>Promo Code <span class="grey--text" style="font-size:12px">(Optional)</span></div>
                    <v-text-field outlined v-model="book.promo"></v-text-field>
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

                  <div>Down Terms<span class="red--text" style="font-size:12px">*</span></div>
                    <v-select outlined :items="['100%','50%']" v-model="book.down"></v-select>
                    <div>
                    To be paid : Php
                      {{
                        formatPrice(
                          priceToCompute * 0.5 == NaN ? 0 :   priceToCompute * (book.down=='50%'? 0.5 : 1)
                        )
                      }}
                    </div> 
                    <v-divider></v-divider>
                  </div>
                </div>
                <div v-if="service_type == 'Room'" style="width: 100%">
                  <v-col cols="12" class="px-0">
                    <div>Room Type<span class="red--text" style="font-size:12px">*</span></div>
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
                      <div>Package<span class="red--text" style="font-size:12px">*</span></div>
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
                    <div>Promo Code<span class="grey--text" style="font-size:12px">(Optional)</span></div>
                    <v-text-field outlined v-model="book.promo"></v-text-field>
                    <v-col cols="12" class="px-0">
                      <div>Total Price<span class="red--text" style="font-size:12px">*</span></div>
                      <div>
                        <v-text-field
                          outlined
                          v-model="book.price"
                          readonly
                        ></v-text-field>
                      </div>
                    </v-col>
                   <div>Down Terms<span class="red--text" style="font-size:12px">*</span></div>
                    <v-select outlined :items="['100%','50%']" v-model="book.down"></v-select>
                    <div>
                    To be paid : Php
                      {{
                        formatPrice(
                          priceToCompute * 0.5 == NaN ? 0 :   priceToCompute * (book.down=='50%'? 0.5 : 1)
                        )
                      }}
                    </div> 
                    <v-divider></v-divider>
                    <!-- <div class="text-h5">
                      To be paid : Php
                      {{
                        formatPrice(
                          priceToCompute * 0.5
                        )
                      }}
                      
                    </div> -->
                </div>
              </v-row>
            </div>
          </v-card>
          <v-btn text @click="route"> Cancel </v-btn>
          <v-btn color="primary" @click="validatePage2"> Continue </v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card width="900" align="start">
            <div class="text-h6">First Name: {{ book.firstname }}</div>
            <div class="text-h6">Last Name: {{ book.lastname }}</div>
            <div class="text-h6">Contact Number: {{ book.contact_number }}</div>
            <div class="text-h6">Email: {{ book.email }}</div>
            <v-row class="pt-10">
              <v-col cols="auto">
                <div>Reservation Information:</div>
              </v-col>
              <v-col align="start">
                <div v-if="book.pool_type=='Public Pool'">
                  Amenities:
                  <div v-for="(x,index) in detailAmenities" :key="index">
                     {{
                       
                       x['name']}} - {{formatPrice(x['price'])
                       
                       }}
                  </div>
                  Total Amenities: Php {{formatPrice(total_amenities_price)}}
                </div>
                <div>
                  {{ book.pool_type }}
                </div>
                <div>
                  {{ book.package }}
                </div>
                <div>
                  {{service_type=='Room' ? `${date_range}` : date }}
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
              Total Price : {{formatPrice((((priceToCompute ))))}} (- Php {{ formatPrice(((priceToCompute-((priceToCompute - (priceToCompute*parseInt(percentage)/100)))))) }}(Promo Code))
            </div>
            <div class="green--text" align="center" v-if="this.book.pool_type=='Public Pool'">
            Final Price :   Php {{ formatPrice((((priceToCompute )))-((this.total_price_person-((this.total_price_person - (this.total_price_person*parseInt(percentage)/100)))))) }}(Promo Code)
            </div>
            <div class="green--text" align="center" v-else>
            Final Price :   Php {{ formatPrice(priceToCompute-((priceToCompute-((priceToCompute - (priceToCompute*parseInt(percentage)/100)))))) }}(Promo Code)
            </div>
            <!-- <div align="center">
              Total Amount of 50% Downpayment: Php {{ formatPrice((priceToCompute-(priceToCompute - (priceToCompute*parseInt(percentage)/100)*.50))) }}
            </div> -->
            <v-divider></v-divider>
            {{book.down}}
             <div class="green--text text-h5" align="center" v-if="this.book.pool_type=='Public Pool'">
            <b> Downpayment required: Php {{formatPrice((this.priceToCompute - (this.total_price_person * (this.percentage/100)))/ (this.book.down=='50%' ? 2 : 1)) }}</b>
            </div>
            <div class="green--text text-h5" align="center" v-else>
            <b> Downpayment required: Php {{formatPrice((this.priceToCompute - (this.priceToCompute * (this.percentage/100)))/(this.book.down=='50%' ? 2 : 1)) }}</b>
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
              <!-- CODE : {{ this.book.code }} -->
            </div>
            <div class="red--text"></div>
            <v-col cols="12" class="px-0"> 
              <div>Payment Option<span class="red--text" style="font-size:12px">*</span></div>
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
              <v-snackbar
      top
      absolute
      bottom
      color="error"
      outlined
      centered
      v-model="acceptTerms"
    >
      Please accept the terms and conditions.
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="acceptTerms = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
            <div class="text-h6" align="center">{{ mopAccountName }}</div>
            <div class="text-h6" align="center">{{ mopAccountNumber }}</div>
            <div class=" pt-5" align="center" style="font-size:15px">
              Downpayment should be settle within 1hr to confirm the registration<br /><br/>
              <div class="center">
                <span class="red--text" style="font-size:12px">(You must accept the terms and conditions.)</span>
                <v-checkbox v-model="isCheckLabel" label="I have read the terms and conditions."></v-checkbox>
              </div>
             <div style="cursor:pointer" @click="openTerms=true">
                Terms & Condition
             </div>
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
    this.generateCode()
  },
  data() {
    return {
      numberOfDays:0,
      otpVal:'',
      codeLoad:false,
      total_amenities_price:0,
      detailAmenities:[],
      acceptTerms:false,
      isCheckLabel:false,
      openTerms:false,
      total_price_person:0,
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
    async otp(){
      this.codeLoad=true
       const res = this.$axios.post(`/otp/`,{ code: this.otpVal, email: this.book.email },
                {
                  headers: {
                    // Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              )
              .then((res) => {
                alert('Successfully sent')
                this.codeLoad=false
                this.buttonLoad = false
              })
    },
    generateCode(){
       this.otpVal = Math.random().toString(36).slice(2)
    },
    resetPool(){
      this.book.date=null
      this.date=null
      this.book.package=null
      this.book.price=null
      this.book.promo=null
      this.book.terms=null
      this.selectedItem={}
    },
    route(){
      window.location.href="book"
    },
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
      // if(this.service_type=='Room' || this.service_type=='Public Pool'){
      //   this.book.down = "50%"
      // }
       if (this.book.price == null) {
        this.isErrorEmail = true;
        return;
      } 
      if(this.service_type!='Room'){
        if(this.book.pool_type=='Public Pool'){
  
        }
      else{
          if(this.book.down=='' || this.book.down==null ){
            alert("Please fill up the form completely")
            return
      }
      else{

      }
      }
        
       
      }
      else{
          if(this.book.room_type==null){
        
            return
          }
        }
      this.promo.map(val=>{
        if(val.promoCode==this.book.promo){
          this.percentage = val.percentage
        }
      })
      if(this.service_type == '' || this.service_type == null || this.book.price == null) {
         alert("Please fill up the form completely")
        return
      }
      this.e1 = 2
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
            if((item.subtype==this.book.room_type && item.status!='cancelled')){
          
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
      if(day.toString().length==1){
        day = 0+day.toString()
      }
      var date =
        today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" +day;
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
      if(this.otpVal!=this.book.code_verification){
        alert("Verification Doesn't")
        return
      }
      if (this.book.email == null || this.book.email == '') {
        this.isErrorEmail = true;
        return;
      } else {
        this.isErrorEmail = false;
      }
      if (this.book.contact_number == null || this.book.contact_number == '') {
        this.isErrorContactNumber = true;
        return;
      } else if (this.book.contact_number.length != 11) {
        this.isExceedText = true;
        return;
      } else {
        this.isErrorContactNumber = false;
      }
      if (this.book.firstname == null || this.book.firstname == '') {
        this.isErrorFirstName = true;
        return;
      } else {
        this.isErrorFirstName = false;
      }
      if (this.book.lastname == null || this.book.lastname == '') {
        this.isErrorLastName = true;
        return;
      } else {
        this.isErrorLastName = false;
      }
      this.e1 = 3;
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
      if(!this.isCheckLabel){
        this.acceptTerms=true
        return
      }
    
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
        form_data.append("price", this.book.pool_type=='Public Pool' ? (this.priceToCompute - (this.total_price_person * (this.percentage/100))) : (this.priceToCompute - (this.priceToCompute * (this.percentage/100))));
        form_data.append("to_pay", this.book.pool_type=='Public Pool' ? this.priceToCompute /(this.book.down=='50%' ? 2 : 1)  : (this.priceToCompute - (this.priceToCompute * (this.percentage/100)))/(this.book.down=='50%' ? 2 : 1));
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
              this.numberOfDays = vals
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
      this.priceToCompute = 0
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
         this.total_price_person = 0;
        var total = 0;
        for (let key in this.amenities) {
          if (this.selected_amenities[key]) {
            total_amenities =
              parseInt(total_amenities) + parseInt(this.amenities[key].price);
              this.detailAmenities.push(this.amenities[key])
            this.total_amenities_price = total_amenities
         
          }
        }
        var packageAmenities = []
           for(let key in this.detailAmenities){
            
                packageAmenities.push(`${this.detailAmenities[key].name} - ${this.detailAmenities[key].price}`)
            }
           packageAmenities.push(`Adults - ${this.book.adults} Kids - ${this.book.kids}` )
            this.book.package = packageAmenities
        if (this.book.dateoption == "day") rate = 50;
        else if (this.book.dateoption == "night") rate = 100;
        else if (this.book.dateoption == "overnight") rate = 150;
        this.total_price_person =
          this.book.adults * (50 + rate) + this.book.kids * (0 + rate);
          
        this.book.price = this.total_price_person + total_amenities;
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
      if(this.$route.query.service_type!=undefined){
            if(this.$route.query.service_type=='Room'){
              this.service_type = this.$route.query.service_type
              this.book.room_type = this.$route.query.type
            }
            else{
              this.service_type = this.$route.query.service_type
              this.book.pool_type = this.$route.query.type
            }
            
          }
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