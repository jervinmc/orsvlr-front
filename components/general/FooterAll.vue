<template>
  <div class="black--text" style="width: 100%">
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
    <div align="center" class="pb-5 pt-5">
      <div class="text-h4 pb-5">
      <b>Villa Leonora</b>
    </div>
    <div>
     {{settings.address}}
    </div>
    <div class="pb-5">
     {{settings.contacts}} {{settings.email}}
    </div>
    <div>
      <v-row>
        <v-col style="cursor:pointer" cols="6" align="end" class="pa-0">
        <v-icon @click="routeto">
            mdi-facebook
        </v-icon>
        </v-col>
        <v-col style="cursor:pointer" @click="routeto" class="pa-0" cols="6" align-self="center" align="start">
          villaleonoraresort
        </v-col>
      </v-row>
    </div>
    </div>
    <v-card width="100vw" color="#003853" height="100" class="d-flex justify-center align-center">
        <v-row>
          <v-col class=" white--text" align-self="center" align="center" @click="route('contacts')">
            <b style="cursor:pointer ">CONTACTS</b>
          </v-col>
          <v-col class="white--text" align-self="center" align="center">
            <b @click="openTerms=true" style="cursor:pointer">TERMS AND CONDITIONS</b>
          </v-col>
          <v-col class="white--text" align-self="center" align="center">
            <b>PRIVACY</b>
          </v-col>
          <v-col class="white--text" align-self="center" align="center">
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
      buttonLoad:false,
      image:"",
      account_type:'',
      deleteConfirmation:false,
      selectedItem:[],
        events:[],
      selectedItem:{},
      isLoading: false,
      users: [],
      dialogAdd:false,
      isEdit:false,
      image:'',
      img_holder:'',
      openTerms:false,
      address:'',
      contacts:'',
      email:'',
      settings:[],
      isAdd:true,
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
    routeto(){
      window.location.href="https://facebook.com/villaleonoraresort"
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
        this.carousel3_holder= res.data[0].carousel3;
        this.history_images.push(this.carousel1_holder)
        this.history_images.push(this.carousel2_holder)
        this.history_images.push(this.carousel3_holder)
        //   for(let x in this)
          this.isLoading = false;
        });
    },
   async  editValue(){
          this.buttonLoad=true;
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
            this.isEdit=false
              this.loadData()
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
    async deleteValue(){
     this.buttonLoad=true
      this.$axios.delete(`/events/${this.selectedItem.id}/`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(()=>{
          this.deleteConfirmation=false
          this.buttonLoad=false
          alert('Successfully Deleted!')
          this.loadData()
      })
    },
     deleteItem(val){
      this.selectedItem = val
      this.deleteConfirmation=true
    },

     formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    editItem(val){
      this.selectedItem=val
    //   this.dialogAdd=true
      this.isEdit=true
    },
    addItem(){
      this.isAdd=true
      this.dialogAdd=true
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
      this.settingsGetall()
      this.account_type=localStorage.getItem('account_type')
      this.eventsGetall();
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
          for(let x in this.events){
  
            if(this.events[x].page=='pool'){
              this.image = this.events[x].image
         
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