<template>
<v-form ref="form">
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Add Event</div>
      <div class="text-h6">Event</div>
      <v-col cols="12" class="px-0">
        <div>Firstname</div>
        <div>
          <v-text-field outlined v-model="book.firstname"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Lastname</div>
        <div>
          <v-text-field outlined v-model="book.lastname"></v-text-field>
        </div>
      </v-col>
      
      <v-col cols="12" class="px-0">
        <div>Contact Number</div>
        <div>
          <v-text-field outlined v-model="book.contact_number"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Email Address</div>
        <div>
          <v-text-field outlined v-model="book.email"></v-text-field>
        </div>
      </v-col>
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
        <div>Event Package Type</div>
        <div>
          <v-select outlined @change="changePackage" :items="event_list" v-model="book.package_type"></v-select>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Total Price</div>
        <div>
          <v-text-field outlined readonly v-model="book.price"></v-text-field>
        </div>
      </v-col>
       <v-col cols="12" class="px-0">
        <div>Descriptions</div>
        <div>
          <v-textarea outlined readonly v-model="book.descriptions"></v-textarea>
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
      <v-card-actions>
        <v-row align="center">
          <v-col align="end">
            <v-btn color="red" text @click="cancel"> Cancel </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="success"
              text
              @click="confirm"
              :loading="buttonLoad"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
      <div>
        Generated Code:
      </div>
      <div align="center" class="text-h5">
        <b>{{book.code}}</b>
      </div>
    </v-card>
  </v-dialog>
  </v-form>
</template>

<script>
export default {
  props: ["isOpen", "items", "isAdd"],
  watch: {
    items() {
        this.events=this.items
        this.img_holder=this.items.image
    },
  },
  data() {
    return {
      room_list:['Standard','Deluxe','Suite'],
      events: [],
      book:[],
      buttonLoad: false,
      eventDate:false,
      min_date:'',
      date:'',
      img_holder:'image_placeholder.png',
      event_list:[],
    };
  },
    created(){
          this.loadData()
          this.disableMinDate()
      },
  methods: {
    // async confirm(val) {
    //   this.buttonLoad = true;
    //   const res = await this.$axios
    //     .post(
    //       `/confirmed/status/`,
    //       {
    //         status: "confirmed",
    //         email: this.book.email,
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //       }
    //     )
    //     .then((res) => {
    //     this.buttonLoad=false
    //     this.$emit('refresh')
    //     });
    // },
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
      changePackage(){
          this.events.map(item=>{
              if(item.package==this.book.package_type){
                  this.book.price=item.price
              }
          })
      },
    loadData(){
      const string_length = 10;
      this.book.code = [...Array(string_length)]
      .map((i) => (~~(Math.random() * 36)).toString(36))
        .join("");

        this.eventsGetall()
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
          this.events = res.data;
          this.events.map(item=>{
        
              this.event_list.push(item.package)
          })
          this.isLoading = false;
        });
    },
  async confirm() {
      this.buttonLoad=true
      try {
        let form_data = new FormData();
        form_data.append("package", this.book.package);
     form_data.append("price",this.book.price);
        form_data.append("to_pay", (this.book.price)/2);
        form_data.append("email", this.book.email);
        form_data.append("firstname", this.book.firstname);
        form_data.append("lastname", this.book.lastname);
        form_data.append("code", this.book.code);
        form_data.append("status", "confirmed");
        form_data.append("service_type", 'Event');
        form_data.append("date_start", this.date);
        form_data.append("subtype", this.package_type);
        form_data.append("descriptions", this.descriptions);
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
            this.cancel()
          });
      } catch (error) {
          alert(error)
        this.buttonLoad = false;
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
    cancel() {
      this.$refs.form.reset()
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>