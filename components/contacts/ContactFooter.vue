<template>
  <div align="center">
      <v-row class="pa-10"> 
          <v-col cols="6">
              <v-img src="/front_contact_page1.png"></v-img>
          </v-col>
          <v-col align-self="center">
            <div class="text-h5 py-5">
                <b>HAVE SOME QUESTIONS?</b>
            </div>
            <div class="pb-5">
                <b>CONTACT US</b>
            </div>
            <v-row>
                <v-col cols="auto" >
                    <v-icon>mdi-phone</v-icon>
                </v-col>
                <v-col align="start">
                   {{settings.contacts}}
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="auto">
                    <v-icon>mdi-map-marker</v-icon>
                </v-col>
                <v-col align="start">
                    {{settings.address}}
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="auto">
                    <v-icon>mdi-email</v-icon>
                </v-col>
                <v-col align="start">
              {{settings.email}}
                </v-col>
            </v-row>
             <!-- <v-row>
                <v-col cols="auto">
                    <v-icon>mdi-email</v-icon>
                </v-col>
                <v-col align="start">
                    Please Inquire: 
                    Ronoldof2022@gmail.com
                </v-col>
            </v-row> -->
          </v-col>
      </v-row>
    <div class="mapouter" ><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=bulacan,%20villa%20leonora%20resort&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org">pirate bay</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google maps widget html</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>
      <v-row align="center" class="pa-10">
          <v-col align-self="start">
              <v-icon size="50" color="#6609af">
                  mdi-phone
              </v-icon>
              <div class="text-h6 mb-2">
                  Phone No.
              </div>
              <div>
                  {{settings.contacts}}
              </div>
          </v-col>
          <v-col align-self="start">
              <v-icon size="50" color="#6609af">
                  mdi-email
              </v-icon>
              <div class="text-h6 mb-2">
                  Email
              </div>
              <div>
                  {{settings.email}}
              </div>
          </v-col>
          <v-col align-self="start">
              <v-icon size="50" color="#6609af">
                  mdi-map-marker
              </v-icon>
              <div class="text-h6 mb-2">
                  Address
              </div>
              <div>
                 {{settings.address}}
              </div>
          </v-col>
          <!-- <v-col align-self="start">
              <v-icon size="50" color="#6609af">
                  mdi-clock
              </v-icon>
              <div class="text-h6 mb-2">
                  Only  Closed On
              </div>
              <div>
                  Saturday(6:00 AM to 5:00 PM)
              </div>
          </v-col> -->
      </v-row>
  </div>
</template>

<script>
export default {
  created() {
    this.loadData();
    this.settingsGetall()
  },
  methods: {
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
    route(link){
      window.location.href=`/${link}`
    },
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
      carousel1_holder:'',
      carousel2_holder:'',
      carousel3_holder:'',
      counter:0,
      history_images:[],
      rooms: [],
      pools: [],
      settings:[],
      openTerms: false,
    };
  },
};
</script>

<style>

</style>