<template>
  <div align="center">
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
                  <div>Name</div>
                  <div>
                    <v-text-field
                      outlined
                      v-model="book.customer_name"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>Contact Number</div>
                  <div>
                    <v-text-field
                      outlined
                      v-model="book.contact_number"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>Email</div>
                  <div>
                    <v-text-field outlined v-model="book.email"></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card>
          <div class="pt-5">
            <v-btn text> Cancel </v-btn>
            <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
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
                      v-model="service_type"
                      outlined
                    ></v-select>
                  </div>
                </v-col>
                <div v-if="service_type == 'Pool'" style="width: 100%">
                  <v-col cols="12" class="px-0">
                    <div>Pool Type</div>
                    <div>
                      <v-select
                        @change="packageMapper"
                        :items="pool_list"
                        v-model="book.pool_type"
                        outlined
                        label="Standard"
                      ></v-select>
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
                    <div class="red--text">
                          {{book.descriptions}}
                    </div>
                  </v-col>
                  <v-col class="pa-0">
                    <div>Check in Date From & To</div>
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
                          no-title
                          range
                        ></v-date-picker>
                      </v-menu>
                    </div>
                  </v-col>
                  <!-- <v-col cols="12" v-if="pool_type=='Private Pool 1' || pool_type=='Private Pool 2'" class="px-0">
                  <div>Time Range</div>
                  <div>
                    <v-select :items="time_range_list" v-model="time_range" outlined label="Standard"></v-select>
                  </div>
                </v-col> -->
                 <v-col
                    cols="12"
                    class="px-0"
                  >
                    <div>Price</div>
                    <div>
                      <v-text-field
                        outlined
                        v-model="book.price"
                        readonly
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    class="px-0"
                  >
                    <div>Total Price</div>
                    <div>
                      <v-text-field
                        outlined
                        v-model="book.total_price"
                        readonly
                      ></v-text-field>
                    </div>
                    <div class="red--text">
                          To pay : {{this.book.total_price*0.5}}
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    class="px-0"
                  >
                    <div>Image</div>
                    <div>
                        <v-img height="150" width="150" :src="image">

                        </v-img>
                    </div>
                  </v-col>
                   <v-col cols="12" class="px-0">
                    <div>Mode of Payment</div>
                    <div>
                      <v-select
                        @change="packageSetter"
                        :items="['Gcash','BDO']"
                        v-model="book.mode_of_payment"
                        outlined
                        label="Standard"
                      ></v-select>
                    </div>
                  </v-col>
                  <div v-if="book.mode_of_payment=='Gcash'" align="center">
                     <div class="text-h6">
                          Gcash Name : Joana S.
                     </div>
                     <div class="text-h6">
                         No. 0961253232355
                     </div>
                     <div class="text-h6">
                         downpayment should be settle within 5hrs inorder to confirm the registrationof reservation will be deny<br/>
                         Terms & Condition
                     </div>
                  </div>
                  <div v-else-if="book.mode_of_payment=='BDO'" align="center">
                        <div class="text-h6">
                          BDO Name : Joana Sales
                     </div>
                     <div class="text-h6">
                         No. 205 5445 5456 548
                     </div>
                     <div class="text-h6">
                         downpayment should be settle within 5hrs inorder to confirm the registrationof reservation will be deny<br/>
                         Terms & Condition
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
                      ></v-select>
                    </div>
                  </v-col>
                </div>
              </v-row>
            </div>
          </v-card>
          <v-btn text @click="e1 = 1"> Cancel </v-btn>
          <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
        <v-card width="900" height="300" align="start">
            <div class="text-h5">
                Name: {{book.customer_name}}
            </div>
            <div class="text-h5">
                Email: {{book.email}}
            </div>
            <div align="center" class="text-h5">
                CODE : {{this.book.code}}
            </div>
            <div class="red--text">
              
            </div>
        </v-card>
          <v-btn text @click="e1 = 2"> Cancel </v-btn>
          <v-btn color="primary" @click="confirm"> Confirm </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <!-- <v-card width="900">
      <div
        style="background-color: #6609af; color: white"
        align="start"
        class="pa-5"
      >
        Booking Form
      </div>
      <div class="pa-5" align="start">
        <v-row>
          <v-col>
            <div>Check in Date From & To</div>
            <div>
              <v-menu
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
                <v-date-picker v-model="date" no-title range></v-date-picker>
              </v-menu>
            </div>
          </v-col>
          <v-col cols="12">
            <div>Adults</div>
            <div>
              <v-text-field outlined v-model="book.adults"></v-text-field>
            </div>
          </v-col>
          <v-col cols="12">
            <div>Children</div>
            <div>
              <v-text-field outlined v-model="book.children"></v-text-field>
            </div>
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12">
            <div>Rooms</div>
            <div>
              <v-text-field outlined v-model="book.rooms"></v-text-field>
            </div>
          </v-col>
        </v-row>
        <div align="center">
          <v-btn
            depressed
            color="#6609af"
            dark
            @click="login"
            :loading="isLoaded"
          >
            Book
          </v-btn>
        </div>
      </div>
    </v-card> -->
  </div>
</template>

<script>
import moment from "moment";
export default {
  created() {
    this.loadData();
  },
  data() {
    return {
      pool_type: "",
      eventDate:false,
      image:'',
      pool_list: ["Private Pool 1", "Private Pool 2", "Public Pool"],
      service_list: ["Pool", "Room", "Events"],
      book: [],
      img_holder: "image_placeholder.png",
      image: "",
      url: "",
      eventDate: null,
      date: "",
      service_type: "",
      users: [],
      e1: 1,
      isLoaded: false,
      time_range: "",
      rooms: [],
      pools: [],
      package_list:[],
      events: [],
      time_range_list: [],
    };
  },

  methods: {
     async confirm(){
          this.buttonLoad = true;
      try {
        let form_data = new FormData();
        form_data.append("package", this.book.package);
        form_data.append("price", this.book.total_price);
        form_data.append("date_start", this.date[0]);
        form_data.append("date_end", this.date[1]);
        form_data.append("email", this.book.email);
        form_data.append("customer_name", this.book.customer_name);
        form_data.append("mode_of_payment", this.book.mode_of_payment);
        form_data.append("code", this.book.code);
        form_data.append("status", 'pending');
        form_data.append("contact_number", this.book.contact_number);
          const response = await this.$axios
            .post("/book/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
        
            });
        
      } catch (error) {
          alert(error)
        // alert(error);
        this.buttonLoad = false;
      }
      },
      packageSetter(){
          this.pools.map((val)=>{   
            if(this.book.pool_type==val.pool_type && this.book.package==val.package){
                this.book.price=val.price
                this.image = val.image
                this.book.descriptions = val.descriptions
            }
        })
      },
    packageMapper(){
        this.package_list=[]
        this.pools.map((val)=>{   
            if(this.book.pool_type==val.pool_type){
                this.package_list.push(val.package)
            }
        })
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
      var start = moment(this.date[0]);
      var end = moment(this.date[1]);
      var val = end.diff(start, "days");
     this.book.total_price = val*this.book.price
    
    },
    loadData() {
     const string_length = 10
      this.book.code =  [...Array(string_length)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
      this.poolsGetall();
      this.roomsGetall();
      this.eventsGetall();
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
  },
};
</script>

<style>
</style>