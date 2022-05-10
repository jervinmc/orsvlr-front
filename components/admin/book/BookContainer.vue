<template>
  <v-card elevation="5" >
    <v-dialog v-model="isCompletion">
      <v-card  class="pa-5">
        <div align="center">
            Complete transaction for: (Reference Code): <span class="green--text">{{selectedItem.code}}</span>
        </div>
        <div>
            <v-row>
              <v-col>
                <v-card elevation="5" class="pa-5">
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Reference Code:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Customer Name:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Contact:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Email:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Remaining Balance:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Reservation Information
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Acommudation Type:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Package Type
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Date of schedule
                    </v-col>
                  </v-row>
              </v-card>
              </v-col>
              <v-col>
                <v-card elevation="5">
                  
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-row no-gutters>
                  <v-col cols="auto">

                  </v-col>
                </v-row>
                 <v-row no-gutters>
                  <v-col cols="auto">
                    Downpayment:
                  </v-col>
                </v-row>
                 <v-row no-gutters>
                  <v-col cols="auto">
                    Remaining Balance
                  </v-col>
                </v-row>
                 <v-row no-gutters>
                  <v-col cols="auto">
                    
                  </v-col>
                </v-row>
                 <v-row no-gutters>
                  <v-col cols="auto">
                    Discount
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="end">
                <v-btn color="white" @click="isCompletion=false">
              Cancel
            </v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" :loading="buttonLoad" @click="setComplete">
              Confirm
            </v-btn>
              </v-col>
            </v-row>
        </div>
      </v-card>
    </v-dialog>
     <v-dialog v-model="isCancellation">
      <v-card  class="pa-5">
        <div align="center">
            Complete transaction for: (Reference Code): <span class="green--text">{{selectedItem.code}}</span>
        </div>
        <div>
            <v-row>
              <v-col>
                <v-card elevation="5" class="pa-5">
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Reference Code:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Customer Name:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Contact:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Email:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Remaining Balance:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Reservation Information
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Acommudation Type:
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Package Type
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      Date of schedule
                    </v-col>
                  </v-row>
              </v-card>
              </v-col>
              <v-col>
                <v-card elevation="5">
                  
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-row no-gutters>
                  <v-col cols="auto">

                  </v-col>
                </v-row>
                 <v-row no-gutters>
                  <v-col cols="auto">
                    Downpayment:
                  </v-col>
                </v-row>
                 <v-row no-gutters>
                  <v-col cols="auto">
                    Remaining Balance
                  </v-col>
                </v-row>
                 <v-row no-gutters>
                  <v-col cols="auto">
                    
                  </v-col>
                </v-row>
                 <v-row no-gutters>
                  <v-col cols="auto">
                    Discount
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <div>
                Reminder:
                <div>
                  FOR CANCELLATION OF RESERVATION YOU NEED VALID REASON IN ORDER TO FULLY REFUND, HENCE THE MANAGEMENT WILL DEDUCT THE PAYOR PAYMENT OF 35%
                </div>
              </div>
              <div>
                Reason for cancellation
              </div>
              d
              <v-col align="end">
                <v-btn color="white" @click="isCompletion=false">
              Cancel
            </v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" :loading="buttonLoad" @click="setComplete">
              Confirm
            </v-btn>
              </v-col>
            </v-row>
        </div>
      </v-card>
    </v-dialog>
    <booking-add :isOpen="dialogAdd"
      @cancel="loadData"
      @refresh="loadData"
      :items="selectedItem" />
    <dialog-delete :isOpen="dialogReject"
      @cancel="dialogReject = false"
      @refresh="loadData"
      :items="selectedItem"/>
    <dialog-actions
      :isOpen="dialogConfirm"
      @cancel="dialogConfirm = false"
      @refresh="loadData"
      :items="selectedItem"
    />
    <view-customer-details
      :isOpen="dialogView"
      @cancel="dialogView = false"
      :items="selectedItem"
    />
    <event-add :isOpen="dialogEvent"
      @cancel="dialogEvent = false"
      :items="selectedItem" />
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Booking Management</b>
      </v-col>
      <v-spacer></v-spacer>
      <v-col align-self="center" align="end" class="">
        <v-btn
          class="rnd-btn"
          rounded
          large
          color="black"
          depressed
          dark
          width="170"
          @click="dialogAdd=true"
        >
          <span class="text-none">Add Booking</span>
        </v-btn>
      </v-col>
        <v-col align-self="center" cols="auto" align="end" class="pr-10">
        <v-btn
          class="rnd-btn"
          rounded
          large
          color="black"
          depressed
          dark
          width="170"
          @click="dialogEvent=true"
        >
          <span class="text-none">Add Event</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-container fluid>
          <v-row class="pl-3" align="start" elevation="10">
            <v-col
              :class="active_page == 0 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 0"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-cash</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >To Pay</b
                >
              </v-row>
            </v-col>
            <v-col
              :class="active_page == 1 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 1"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi -account-clock</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Pending</b
                >
              </v-row>
            </v-col>
            <v-col
              :class="active_page == 2 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 2"
            > 
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-marker-cancel</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Cancel Rqst</b
                >
              </v-row>
            </v-col>
            <v-col
              :class="active_page == 3 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 3"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-check-circle</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Confirmed</b
                >
              </v-row>
            </v-col>
             <v-col
              :class="active_page == 4 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 4"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-close-circle</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Rejected</b
                >
              </v-row>
            </v-col>
             <v-col
              :class="active_page == 5 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 5"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-account-cancel</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Cancelled</b
                >
              </v-row>
            </v-col>
             <v-col
              :class="active_page == 6 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 6"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-timer-sand-complete</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Completed</b
                >
              </v-row>
            </v-col>
             <v-col
              :class="active_page == 7 ? 'tab active pa-5' : 'tab pa-5'"
              align="center"
              @click="active_page = 7"
            >
              <v-row class="tab-contents justify-start ml-6">
                <v-icon class="mr-2 action-icons"
                  >mdi-timer-sand-complete</v-icon
                ><b
                  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  class="tab-name"
                  >Rescheduled</b
                >
              </v-row>
            </v-col>
          </v-row>
        </v-container>
    <div class="px-3 ">
      <v-card  class="card-settings pa-10 px-2" elevation="10" >
        <div align="end">
              <v-col align-self="center" align="end" cols="1">
              <JsonCSV
          class="btn btn-default"
          :data="active_page==0 ? bookToPay : active_page==1 ? bookPending : active_page==2 ? bookCancellation : active_page==3 ? bookConfirmed : active_page==4 ? bookRejected : active_page==5 ? bookCancelled : active_page==6 ? bookCompleted : bookReschedule "
          :name="new Date()"
        >
          <v-btn
            class="rnd-btn"
            rounded
            large
            color="black"
            depressed
            dark
            width="170"
          >
            <span class="text-none">Download CSV</span>
          </v-btn>
        </JsonCSV>
          </v-col>
        </div>
      <v-row>
      
          <v-spacer></v-spacer>
          
          <v-col cols="6" align-self="center" class="pt-10 pa-10">
        <div>
          <v-text-field
            outlined
            placeholder="Search"
            hide-details=""
            v-model="search"
          ></v-text-field>
        </div>
      </v-col>
        </v-row>
      <v-data-table
      class="pa-5"
      :search="search"
      :headers="headers"
      :items="active_page==0 ? bookToPay : active_page==1 ? bookPending : active_page==2 ? bookCancellation : active_page==3 ? bookConfirmed : active_page==4 ? bookRejected : active_page==5 ? bookCancelled : active_page==6 ? bookCompleted : bookReschedule "
      :loading="isLoading"
    >
      <template v-slot:[`item.status`]="{ item }">
        <div>
          <v-chip align="center" :style="getColorStatus(item.status)"
            ><span>{{ item.status }} </span></v-chip
          >
        </div>
      </template>
      <template v-slot:[`item.remaining`]="{ item }">
        <div>
          {{0>(60-timeRemaining(item.transaction_date,item)) ? 0 :(60-timeRemaining(item.transaction_date,item)) }} Minutes
        </div>
      </template>
       <template #[`item.price`]="{ item }">
          <div>
            {{formatPrice(item.price)}}
          </div>
      </template>
      <template #[`item.transaction_date`]="{ item }">
          <div>
            {{formatDate(item.transaction_date)}}
          </div>
      </template>

      <template v-slot:loading>
        <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
      </template>

      <template #[`item.opt`]="{ item }">
        <v-menu offset-y z-index="1">
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click.stop="viewItem(item,60-timeRemaining(item.transaction_date))">
              <v-list-item-content>
                <v-list-item-title>View</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="confirmItem(item)" v-if="item.status=='pending' || item.status=='reschedule'">
              <v-list-item-content>
                <v-list-item-title>Confirm</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="rejectItem(item,'Reject')" v-if="item.status=='pending' || item.status=='To Pay' ">
              <v-list-item-content>
                <v-list-item-title>Reject</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="completion(item)" v-if="item.status=='confirmed'">
              <v-list-item-content>
                <v-list-item-title>Check as Completed</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="rejectItem(item,'Cancel')" v-if="item.status=='Request For Cancellation' || item.status=='reschedule'">
              <v-list-item-content>
                <v-list-item-title>Cancel</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="rejectItem(item,'Pending')" v-if="item.status=='cancelled' || item.status=='rejected'">
              <v-list-item-content>
                <v-list-item-title>Undo</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="rejectItem(item,'Archive')" v-if="item.status=='cancelled' || item.status=='completed' || item.status=='confirmed'">
              <v-list-item-content>
                <v-list-item-title>Archive</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    </v-card>
    </div>
  </v-card>
</template>

<script>
import JsonCSV from "vue-json-csv";
import DialogActions from "./DialogActions.vue";
import DialogDelete from './DialogDelete.vue';
import ViewCustomerDetails from "./ViewCustomerDetails.vue";
import moment from 'moment';
import BookingAdd from './BookingAdd.vue';
import EventAdd from './EventAdd.vue';
export default {
  components: {
    ViewCustomerDetails,
    DialogActions,
    DialogDelete,
    BookingAdd,
    EventAdd,
    JsonCSV,

  },
  computed:{
    
    bookReschedule(){
      return this.book.filter(item=>{
        return item.status=='reschedule'
      });
    },
    bookToPay(){
      return this.book.filter(item=>{
        return item.status=='To Pay'
      });
    },
    bookCompleted(){
      return this.book.filter(item=>{
        return item.status=='completed'
      });
    },
    bookConfirmed(){
      return this.book.filter(item=>{
        return item.status=='confirmed'
      });
    },
    bookPending(){
      return this.book.filter(item=>{
        return item.status=='pending'
      });
    },
    bookCancellation(){
      return this.book.filter(item=>{
        return item.status=='Request For Cancellation'
      });
    },
    bookRejected(){
      return this.book.filter(item=>{
        return item.status=='rejected'
      });
    },
    bookCancelled(){
      return this.book.filter(item=>{
        return item.status=='cancelled'
      });
    } 
  },
  created() {
    this.name = localStorage.getItem('name')
  this.account_type = localStorage.getItem('account_type')
  this.loadData();
  },
  data() {
    return {
      isCancellation:false,
      isCompletion:false,
      dialogEvent:false,
      active_page:0,
      dialogConfirm: false,
      dialogView: false,
      book: [],
      selectedItem: {},
      isLoading: false,
      users: [],
      buttonLoad:false,
      dialogAdd: false,
      isAdd: true,
      search:'',
      dialogReject:false,
      headers: [
        { text: "ID", value: "id" },
        { text: "First Name", value: "firstname" },
        { text: "Last Name", value: "lastname" },
        { text: "Email", value: "email" },
        { text: "Date Start", value: "date_start" },
        { text: "Date End", value: "date_end" },
        { text: "Code", value: "code" },
        { text: "Price", value: "price" },
        { text: "Service Type", value: "service_type" },
        { text: "Status", value: "status" },
        { text: "Time Remaining", value: "remaining" },
        { text: "Trasanction Date", value: "transaction_date" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
   async setComplete(){
        this.buttonLoad = true;
      const res = await this.$axios
        .post(
          `/confirmed/status/`,
          {
            status: "completed",
            email: this.selectedItem.email,
            id: this.selectedItem.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          this.$axios.post('/logs/',{name:this.name,action:`complete the reservation. ID : ${this.book.id}`})
        this.buttonLoad=false
        this.isCompletion=false
        });
    },
    completion(val){
      this.selectedItem = val
    
      this.isCompletion=true
    },
      async confirm(val) {
      this.buttonLoad = true;
      const res = await this.$axios
        .post(
          `/confirmed/status/`,
          {
            status: "cancelled",
            email: val.email,
            id: val.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
        this.buttonLoad=false
        this.$emit('refresh')
        });
    },
    formatDate(val){
      return moment(String(val)).format('YYYY-MM-DD HH:mm')
    },
    timeRemaining(val,status){
      if(status==undefined){
        return
      }
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes()
      
      var dateTime = date+' '+time;
     var  diff= Math.abs(new Date(moment(String(val)).format('YYYY/MM/DD HH:mm')) - new Date(moment(String(dateTime)).format('YYYY/MM/DD HH:mm')));
      if(60-(Math.floor((diff/1000)/60))<0){
        if(status.status=='To Pay'){
          this.confirm(status)
        }
      }
      return Math.floor((diff/1000)/60)
    },
        formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getColorStatus(item) {
      if (item == "rejected") {
        return "background-color:#FFCCCC;border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "confirmed") { 
        return "background-color:#CCFFCE;border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "Request For Cancellation") {
        return "background-color:#CCEBFF;border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "pending") {
        return "background-color:#FFF5CC;border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "Cancelled") {
        return "border-radius:15px;padding:7px; width:150px; color: #344557;";
      }
      else if (item == "To Pay") {
        return "border-radius:15px;padding:7px; width:150px; color: green;";
      }
       else if (item == "completed") {
        return "border-radius:15px;padding:7px; width:150px; color: black; background-color:yellow;";
      }
    },
    confirmItem(val) {
      this.selectedItem = val;
      this.dialogConfirm = true;
    },
    rejectItem(val,status_action) {
      this.selectedItem = val;
      this.selectedItem.status_action = status_action
      this.dialogReject = true;
    },
    editItem(val) {
      this.selectedItem = val;
      this.dialogAdd = true;
    },
    addItem() {
      this.isAdd = true;
      this.dialogAdd = true;
    },
    viewItem(val,remaining) {
      this.dialogView = true;
      this.selectedItem = val;
      this.selectedItem.remaining = remaining
    },
    async status(data, status) {
      this.isLoading = true;
      const res = await this.$axios
        .post(
          `/confirmed/status/`,
          {
            status: "confirmed",
            email: data.email,
            id: data.id,
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
      this.dialogAdd=false
      this.eventsGetall();
      this.dialogReject=false
      this.dialogConfirm=false
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/book/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.book = res.data;
          this.isLoading = false;
        });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss">
.tab {
  margin-right: -5px;
  background: #ececec;
  border-radius: 20px 60px 0px 0px;
  cursor: pointer;
  box-shadow: 0px 0px 2px #888888;
  &:hover {
    background: #fff;
  }
  &.active {
    background: #fff;
    // font-weight: bold;
    color: primary;
    // font-size: 20px;
    font-family: avenir-black;
    z-index: 1;
    box-shadow: 0px 0px 0px;
  }
}
</style>