<template>
  <div>
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
    <v-row class="pa-10">
      <v-col cols="6">
        <div class="text-h6">More About Us</div>
        <div>
          The Villa Leonora Resorts is a family business. The resorst offers
          various of services. From public pools, venue renting, private pool
          and event packages. Frequestly Ask Questions.
        </div>
        <div class="text-h6 pt-5">History</div>
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
        <div class="text-h6 pt-5">OUR TERMS AND CONDITION</div>
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
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTerms: false,
    };
  },
};
</script>

<style>
</style>