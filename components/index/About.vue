<template>
  <div class="px-10">
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
    <v-row class="pa-5">
      <v-col col="6" align="center">
        <v-img src="/history_image.png" height="300" width="600" contain>
        </v-img>
      </v-col>
      <v-col align-self="center" align="center">
        <div class="text-h3 py-5"><b>History</b></div>
        <div>
          The business owner's first idea was turn to their land to an apartment
          for the abs-cbn workers in the area. But then decided to transition to
          resorts instead and because of that the first couple of rooms are
          studio-type rooms. During the Pandemic the resorts are closed due to
          the rise of Covid19 outbreak and this time of need the resorts are
          allowed to invite frontliners in the resort especially those
          frontliners that are in need of a place to stay. On the new normal the
          resorts move on and continues it's services for the mass.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <div class="text-h5">
          <b> EXCLUSIVE OFFERS</b>
        </div>
      </v-col>
      <v-col align-self="end"> VIEW ALL </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-img width="445" height="263" src="/front_event1.png"></v-img>
        <div align="center">Wedding and Debut Packages</div>
      </v-col>
      <v-col cols="4">
        <v-img width="445" height="263" src="/front_event2.png"></v-img>
        <div align="center">Simple Debut</div>
      </v-col>
      <v-col cols="4">
        <v-img width="445" height="263" src="/front_event3.png"></v-img>
        <div align="center">Simple Wedding</div>
      </v-col>
    </v-row>
    <div class="text-h5 py-10" align="center">
      <b> MODERN ROOMS & SUITES</b>
    </div>
    <v-row v-if="rooms.length != 0">
      <v-col cols="5">
        <v-img :src="rooms[0].image" width="580" height="329"> </v-img>
      </v-col>
      <v-col align="center">
        <v-card
          height="329"
          width="740"
          color="#003853"
          class="d-flex justify-center align-center"
        >
          <div>
            <v-col align-self="center">
              <div class="white--text text-h4">
                <b>THE ART OF BEING WELL</b>
              </div>
              <div class="white--text">
                Life is full of UP and DOWN moments and we need a break
                sometimes
              </div>
              <div class="pt-10">
                <v-btn depressed color="white"> View All Rooms </v-btn>
              </div>
            </v-col>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-h5 py-10" align="center">
      <b>VILLA LEONORA POOLS</b>
    </div>
    <v-row v-if="pools.length != 0">
      <v-col align="center">
        <v-card
          height="329"
          width="740"
          color="#003853"
          class="d-flex justify-center align-center"
        >
          <div>
            <v-col align-self="center">
              <div class="white--text text-h4">
                <b>YOU ARE SKY EVERYTHING ELSE IS JUST WEATHER</b>
              </div>
              <div class="white--text">
                Water is the driving force of all nature
              </div>
              <div class="pt-10">
                <v-btn depressed color="white"> View All Pools </v-btn>
              </div>
            </v-col>
          </div>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-img :src="pools[0].image" width="580" height="329"> </v-img>
      </v-col>
    </v-row>
    <div class="white--text py-10" >
      <v-card width="100vw" color="#003853" class="px-10 py-10">
        <v-row>
          <v-col>
            <div class="white--text text-h4">
          <b>Booking Guide:</b>
        </div>
        <div class="text-h6 pt-5" style="color:#09FFA6"><b>Step 1:</b></div>
        <div class="white--text">
          MAKE A RESERVATION AT THE BOOK SECTION!
        </div>
        <div class="white--text">
         GET YOUR REFERENCE CODE TO CHECK YOUR STATUS IN STATUS SECTION
        </div>
        <div class="white--text">
          YOU CAN ALSO CHECK YOUR EMAIL FOR THE REFERENCE CODE
        </div>
        <div class="text-h6 pt-5" style="color:#09FFA6"><b>Step 2:</b></div>
        <div class="white--text">
          MAKE A RESERVATION AT THE BOOK SECTION!
        </div>
        <div class="white--text">
         GET YOUR REFERENCE CODE TO CHECK YOUR STATUS IN STATUS SECTION
        </div>
        <div class="white--text">
          YOU CAN ALSO CHECK YOUR EMAIL FOR THE REFERENCE CODE
        </div>
        <div class="text-h6 pt-5" style="color:#09FFA6"><b>Step 3:</b></div>
        <div class="white--text">
          MAKE A RESERVATION AT THE BOOK SECTION!
        </div>
        <div class="white--text">
         GET YOUR REFERENCE CODE TO CHECK YOUR STATUS IN STATUS SECTION
        </div>
        <div class="white--text">
          YOU CAN ALSO CHECK YOUR EMAIL FOR THE REFERENCE CODE
        </div>
          </v-col>
          <v-col cols="5" >
            <v-img src="/front_flow.png" height="482" width="511"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>
    
    <!-- <v-row class="pa-10">
      <v-col cols="6">
        <div class="text-h6">More About Us</div>
        <div>
          The Villa Leonora Resorts is a family business. The resorst offers
          various of services. From public pools, venue renting, private pool
          and event packages. Frequestly Ask Questions.
        </div> -->
        <!-- <div class="text-h6 pt-5">History</div>
        <div>
          The business owner's first idea was turn to their land to an apartment
          for the abs-cbn workers in the area. But then decided to transition to
          resorts instead and because of that the first couple of rooms are
          studio-type rooms. During the Pandemic the resorts are closed due to
          the rise of Covid19 outbreak and this time of need the resorts are
          allowed to invite frontliners in the resort especially those
          frontliners that are in need of a place to stay. On the new normal the
          resorts move on and continues it's services for the mass.
        </div> -->
        <!-- <div class="text-h6 pt-5">OUR TERMS AND CONDITION</div>
        <div class="pt-5">
          <b>EAST STEP FOR RESERVATION</b>
        </div>
        <div>
          <br />
          <b>Step 1 </b> MAKE A RESERVATION AT THE BOOK SECTION!<br />
          Get your Reference Code to check your status in STATUS SECTION You can
          also check your EMAIL for the Reference Code
          <br /><b>Step 2</b>
          Type your Reference Code into Search box and click SEARCH BUTTON
          Status of reservation will show to your monitor and all about your
          reservation information
          <br /><b>Step 3</b>
          Upload your Proof of payment into the upload button in STATUS SECTION
          And wait for the confirmation of your reservation.
        </div>
        <div>
          Click the link for Terms and Condition
          <div
            class="red--text"
            style="cursor: pointer"
            @click="openTerms = true"
          >
            Terms and Conditions
          </div>
        </div>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <div>50% DOWN PAYMENT</div>
          </v-col>
          <v-col>
            <div>RESPECT</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>NO REFUND WITHIN A DAY</div>
          </v-col>
          <v-col>
            <div>COURTESY</div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-img src="./main_image1.jpeg"> </v-img>
        <div align="center" class="text-h6 pa-2">
          Find us on Twitter & Instagram
        </div>
        <div align="center">Twitter : @VleonoraR</div>
        <div align="center">instagram: @VleonoraRV</div>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
export default {
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.roomsGetall();
      this.poolsGetall();
    },
    async poolsGetall() {
      // this.isLoading = true;
      const res = await this.$axios
        .get(`/pools/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.pools = res.data;
          // this.isLoading = false;
        });
    },
    async roomsGetall() {
      // this.isLoading = true;
      const res = await this.$axios
        .get(`/rooms/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.rooms = res.data;
        });
    },
  },
  data() {
    return {
      rooms: [],
      pools: [],
      openTerms: false,
    };
  },
};
</script>

<style>
</style>