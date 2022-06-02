<template>
  <div class="black--text" style="width: 100%">
    <v-dialog v-model="privacy" >
      <v-card class="pa-16">
        <p>Villa Leonora Resorts and Venue respects your interest in us. We understand and respect your privacy as part of our partnership. This Privacy Statement (&quot;Privacy Statement&quot;) is meant to explain: How Villa Leonora Resorts and Venue collects, uses, processes, secures, and stores information. What kind(s) of information we collect. How you can edit and delete certain information and change preferences. This Privacy Statement does not apply to the company's practices outside this website, does not own or control, or to people that Villa Leonora Resorts and Venue does not employ or manage. This Privacy Statement may be updated without prior notice to reflect changes in our information practices or relevant laws. When we make changes, we will post them here. If we make material changes to this Privacy Statement, we will place a notice on our website or send a message to the e-mail address you provided to us. You may revisit this section of our website from time to time since, by doing so, you agree to accept any changes to our Privacy Statement. This Privacy Statement only addresses the use and sharing of information we gather from you on our website unless otherwise stated.</p>

<p>How Do We Use the Information We Receive? Your information is the information that's required when you want to experience the special feature of the system, it is the information you choose to share. Villa Leonora Resorts and Venue uses the information we collect from you for the following purposes:</p>

<p>To provide advertisements to you about our products and services on this website. To provide services to you. To contact or notify you if necessary. To develop new services and products. To satisfy your need and promote healthy eating. To provide you a mock-up plan as a guide to you. To comply with our objectives, policies and procedures.</p>

<p>Data Integrity Villa Leonora Resorts and Venue uses personally identifiable information only for the purposes it was acquired and in line with the terms of this Privacy Statement. We periodically review our data collection, storage, and processing practices to ensure that we are only collecting, storing, and processing personally identifiable information necessary to provide or improve our website, services, and products, or as otherwise permitted by this Privacy Statement. Regardless of the preceding, we rely on you to keep your personally identifiable information up to date and correct it as needed.</p>

<p>We Protect Personal Information We believe we have adequate administrative, technical, and physical safeguards in place to protect the personal information you provide on this website from unintentional, unlawful, or unauthorized destruction, loss, alteration, access, disclosure, or use, as well as other forms of illegal processing. While we take steps to protect your information using the above and other security measures, please keep in mind that no administrative, technical, or physical safeguards can guarantee that the personal information you provide on this website or data transmitted over the Internet or any other public network is entirely secure. The personal information you provide to Villa Leonora Resorts and Venue will not be sold or rented to anyone else. Villa Leonora Resorts and Venue will not sell or rent the personal information you provide to us online to any third party.</p>

<p>Your Security Obligations It would help if you kept your password and computer safe from unauthorized access. When you've finished using a shared computer, please sign off. Do not include sensitive information in your emails because they are not guaranteed to be safe against interception. We don't ask for passwords in emails very often, and you should presume that it's a phishing attempt if you do. YOU MUST DO WHAT YOU CAN TO ENSURE THE SECURITY OF YOUR PERSONAL INFORMATION IN A REASONABLE MANNER.</p>

<p>Public Forums When you contribute to a public area or feature, such as a chat room, bulletin board, list serve , wall, blog, wiki or other open forum that we may make available on through our website or an authorized third-party website, the information that you submit may be made available to the general public. We do not restrict the distribution of personal information that you voluntarily disclose in these public forums, and so that information can be collected and used by others. For this reason, we recommend that you do not submit any sensitive information, including your full name, home address, phone number, other information that would enable other users to locate you, or financial information on these areas. We cannot prevent such information from being used in a manner that may violate this Privacy Statement or applicable law.</p>

<p>What Kind(s) of Information We Collect? TThe information that you provided us is voluntarily disclose when you choose to book for the site.</p>

<p>Booking information When you sign up for Villa Leonora Resorts and Venue you are required to provide information such as your name, address, contact information, email address.</p>

<p>Other information we receive about you We receive data when you reach us to our contact number or email us when you inquire, suggest, complain or other concern reaching us.</p>

<p>Access and Correction We provide you with access to personal information we have retained about you and the ability to review, correct and update the information where it is inaccurate.</p>

<p> Your Choices We offer you certain choices about how we communicate with you and what information. You may withdraw any consent you previously provided to us. You can choose not to receive marketing communications from us by clicking on the unsubscribe link in our marketing emails or contacting us as specified in the &quot;How to Contact Us&quot; section below. Please include your name, contact number and email address if you send us your request by email.</p>

<p>How to Contact US If you have any questions or comments about this Privacy Statement please email us at villaleonora00@gmail.com, call us at 09171921876.</p>
         <v-col align="end">
              <v-btn color="grey" text @click="privacy = false">Back </v-btn>
            </v-col>
      </v-card>
      
    </v-dialog>
    <v-dialog v-model="faq">
      <v-card>
        <div align="center" class="text-h5 pt-5">
         <b> FAQs </b>
        </div>
        <div class="pa-16">
          <div>
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(item,i) in faqItems"
                :key="i"
              >
                <v-expansion-panel-header>
                  {{item.question}}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{item.answer}}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
         <v-col align="end">
              <v-btn color="grey" text @click="faq = false">Back </v-btn>
            </v-col>
      </v-card>
    </v-dialog>
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
         <div align="start" class="px-10 pt-10">
          <b> 4. ADDITIONAL TERMS</b>
        </div>
        <div  class="pl-16 pt-5">
      <br>
              I. If a property of the resort is missing or damaged the customer will have to pay.<br>
              II. If a customer exceeds the number of people in their package or pax the customer will pay the additional head. (the price Depends on the package)<br>
              III. If there are 12 years old children in a group. There must be a guardian for the child at all times.<br>
              IV. Running beside of the pools are strictly prohibited and it might cause an accident.<br>
              V. If there are missing items of a customer the staff of the resort are not to blame.<br>
              a. The reservation for service is 50% deposit and the other 50% are needed to be pay on the day of the reservation.<br>
              VI. Customers have to pay their remaining balance of their reservation upon check-in. <br>
              VII. Add-ons and other payment are paid upon check-out<br>
          
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
    <div align="center" class="pb-5 pt-5">
      <div class="text-h4 pb-5">
        <b>Villa Leonora</b>
      </div>
      <div>
        {{ settings.address }}
      </div>
      <div class="pb-5">{{ settings.contacts }}</div>
      <div class="pb-5">
        {{ settings.email }}
      </div>
      <div>
        <div align="center">
          <v-icon @click="routeto"> mdi-facebook </v-icon>
          <span>villaleonoraresort</span>
        </div>
      </div>
    </div>
    <v-card
      width="100vw"
      color="#003853"
      height="100"
      class="d-flex justify-center align-center"
    >
      <v-row>
        <v-col
          class="white--text"
          align-self="center"
          align="center"
          @click="route('contacts')"
        >
          <b style="cursor: pointer">CONTACTS</b>
        </v-col>
        <v-col class="white--text" align-self="center" align="center">
          <b @click="openTerms = true" style="cursor: pointer"
            >TERMS AND CONDITIONS</b
          >
        </v-col>
        <v-col @click="privacy=true" style="cursor:pointer" class="white--text" align-self="center" align="center">
          <b>PRIVACY</b>
        </v-col>
        <v-col @click="faq=true" style="cursor:pointer" class="white--text" align-self="center" align="center">
          <b>FAQS</b>
        </v-col>
      </v-row>
    </v-card>
    <!-- <v-row class="mt-16">
      <v-col align="start" cols="6" class="mr-16">
        <v-row>
          <v-col cols="3">
            <v-img src="./logo.png" height="100" width="100"></v-img>
          </v-col>
          <v-col>
            <div style="color: #6609af"><b>About the Resort</b></div>
            <div>
              The Villa Leonora Resorts is a family business. The resorts offers
              various of services. From public pools, venue renting, private
              pool and event packages.
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col align="start" class="pl-16">
        <div style="color: #6609af"><b>Main Menu</b></div>
        <div class="py-2" style="cursor: pointer" @click="route('/')">Home</div>
        <div class="py-2" style="cursor: pointer" @click="route('/rooms')">
          Rooms
        </div>
        <div class="py-2" style="cursor: pointer" @click="route('/pools')">
          Pools
        </div>
        <div class="py-2" style="cursor: pointer" @click="route('/contacts')">
          Contact us
        </div>
      </v-col>
      <v-col align="start">
        <div style="color: #6609af"><b>Collections</b></div>
        <div class="py-2">
       Lot 5, Igay Road, Sto.
          Cristo 3023 San Jose Del Monte Bulacan, Philippines
        </div>
        <div class="py-2">
          villaleonoraresort@gmail.com<br />
          +639350885817 
        </div>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
export default {
  created() {
    this.loadData();
  },
  data() {
    return {
      faqItems:[],
      privacy:false,
      faq:false,
      buttonLoad: false,
      image: "",
      account_type: "",
      deleteConfirmation: false,
      selectedItem: [],
      events: [],
      selectedItem: {},
      isLoading: false,
      users: [],
      dialogAdd: false,
      isEdit: false,
      image: "",
      img_holder: "",
      openTerms: false,
      address: "",
      contacts: "",
      email: "",
      settings: [],
      isAdd: true,
      headers: [
        { text: "ID", value: "id" },
        { text: "Page", value: "page" },
        { text: "Image", value: "image" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
    routeto() {
      window.location.href = "https://facebook.com/villaleonoraresort";
    },
    async settingsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/settings/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.settings = res.data;
          //   alert(res.data[0]['contacts'])
          this.settings.history = res.data[0].history;
          this.settings.contacts = res.data[0].contacts;
          this.settings.address = res.data[0].address;
          this.settings.email = res.data[0].email;
          this.carousel1_holder = res.data[0].carousel1;
          this.carousel2_holder = res.data[0].carousel2;
          this.carousel3_holder = res.data[0].carousel3;
          this.history_images.push(this.carousel1_holder);
          this.history_images.push(this.carousel2_holder);
          this.history_images.push(this.carousel3_holder);
          //   for(let x in this)
          this.isLoading = false;
        });
    },
    async faqGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/faq/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.faqItems = res.data
          this.isLoading = false;
        });
    },
    async editValue() {
      this.buttonLoad = true;
      let form_data = new FormData();
      if (this.image != null && this.image != "") {
        form_data.append("image", this.image);
      }
      const response = await this.$axios
        .patch(`/content/${this.selectedItem.id}/`, form_data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          this.buttonLoad = false;
          this.isEdit = false;
          this.loadData();
        });
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
    route(url) {
      this.$router.push(`/${url}`);
    },
    async deleteValue() {
      this.buttonLoad = true;
      this.$axios
        .delete(`/events/${this.selectedItem.id}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          this.deleteConfirmation = false;
          this.buttonLoad = false;
          alert("Successfully Deleted!");
          this.loadData();
        });
    },
    deleteItem(val) {
      this.selectedItem = val;
      this.deleteConfirmation = true;
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    editItem(val) {
      this.selectedItem = val;
      //   this.dialogAdd=true
      this.isEdit = true;
    },
    addItem() {
      this.isAdd = true;
      this.dialogAdd = true;
    },
    async status(data, status) {
      this.isLoading = true;
      const res = await this.$axios
        .patch(
          `/announcement/${data.id}/`,
          {
            is_active: status == "Deactivate" ? false : true,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          this.loadData();
        });
    },
    loadData() {
      this.settingsGetall();
      this.account_type = localStorage.getItem("account_type");
      this.eventsGetall();
      this.faqGetall();
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/content/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.events = res.data;
          for (let x in this.events) {
            if (this.events[x].page == "pool") {
              this.image = this.events[x].image;
            }
          }
          // image
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>