<template>
  <v-card elevation="5">
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Revenue Management</b>
      </v-col>
      <v-col align-self="center">
        <v-text-field
          hide-details=""
          placeholder="Search"
          outlined
          v-model="search"
        ></v-text-field>
      </v-col>
      <v-col align-self="center">
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
            hide-details=""
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
            no-title
            range
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-spacer></v-spacer>
      <v-col align-self="center">
        <v-btn @click="loadData">
          Reset
        </v-btn>
      </v-col>
      <v-col align-self="center" align="end" class="pr-12">
        <JsonCSV
          class="btn btn-default"
          :data="bookCompleted"
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
    </v-row>
    <v-data-table
      class="pa-5"
      :search="search"
      :headers="headers"
      :items="bookCompleted"
      :loading="isLoading"
    >
      <template v-slot:loading>
        <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
      </template>
    </v-data-table>
    <div align="end" class="pa-5">
      Total of transaction: {{bookCompleted.length}}
    </div>
  <div align="end" class="pa-5">
    Total Price : Php {{formatPrice(totalPriceTransaction)}}
  </div>
  </v-card>
</template>

<script>
import JsonCSV from "vue-json-csv";
import moment from 'moment';
export default {
  components: {
    JsonCSV,
  },
  created() {
    this.loadData();
  },
  data() {
    return {
      eventDate:false,
      search: "",
      date: [],
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
        { text: "Trasanction Date", value: "transaction_date" },
      ],
      events: [],
      selectedItem: {},
      isLoading: false,
      users: [],
      dialogAdd: false,
      isAdd: true,
      book: [],
      items_all:[]
    };
  },
  computed: {
    totalPriceTransaction() {
      var completed = this.items_all.filter((item) => {
        return item.status == "completed"
      });
      var total = 0 
      completed.map(data=>{
        total = total + parseInt(data.price)
      })
      return total
    },
    bookCompleted() {
      return this.items_all.filter((item) => {
        return item.status == "completed"
      });
    },
  },

  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
      changeDate(){
          this.items_all = []
           for(let key in this.book){
          if(new Date(this.date[0])<=new Date(this.book[key].transaction_date) && new Date(this.date[1])>=new Date(this.book[key].transaction_date)){
             this.items_all.push(this.book[key])
          }
        }
        //   this.book = this.bookCompleted.filter(item=>{
    
        //      return new Date(moment(String(item.transaction_date)).format('YYYY/MM/DD HH:mm')) >  new Date(moment(String(this.date[1])).format('YYYY/MM/DD HH:mm'))
        //   })
            
      },
    loadData() {
      this.date=[]
      this.eventsGetall();
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
          this.items_all = res.data
          this.book = res.data;
          this.isLoading = false;
        });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    editItem(val) {
      this.selectedItem = val;
      this.dialogAdd = true;
      this.isAdd = false;
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
  },
};
</script>

<style>
</style>