<template>
  <div align="center">
      <v-row class="pa-10"> 
          <v-col cols="6">
              <v-img src="/front_contact_page1.png"></v-img>
          </v-col>
          <v-col align-self="center">
            <div class="text-h5 py-5">
                <b>HAVE A QUESTIONS?</b>
            </div>
            <div class="pb-5">
                <b>C O N T A C T U S</b>
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
      <div >
          Copy
<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30858.795515846905!2d121.04296842207233!3d14.805633561255009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3397af537408ea85%3A0x4674ed3c60a7f012!2sTokyo%20liquor%20house%2C%20Sarmiento%20Homes%2C%20San%20Jose%20del%20Monte%20City%2C%20Bulacan!3m2!1d14.804644699999999!2d121.0353284!4m5!1s0x3397a585b0b969d5%3A0x9ff8828ded0445a!2sR36P%2B5QW%20Villa%20Leonora%20Resort%20%26%20Event%20Venue%2C%20San%20Jose%20del%20Monte%20City%2C%20Bulacan!3m2!1d14.810488699999999!2d121.0869544!5e0!3m2!1sen!2sph!4v1645254863464!5m2!1sen!2sph" width="1250" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
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