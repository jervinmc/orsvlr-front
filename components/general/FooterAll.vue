<template>
  <div class="black--text" style="width: 100%">
    <div align="center" class="pb-5 pt-5">
      <div class="text-h4 pb-5">
      <b>Villa Leonora</b>
    </div>
    <div>
      Lot 5, Igay Road, Sto. Cristo 3023 San Jose Del Monte Bulacan, Philippines
    </div>
    <div class="pb-5">
      +639350885817 villaleonoraresort@gmail.com
    </div>
    </div>
    <v-card width="100vw" color="#003853" height="100" class="d-flex justify-center align-center">
        <v-row>
          <v-col class=" white--text" align-self="center" align="center">
            <b>CONTACTS</b>
          </v-col>
          <v-col class="white--text" align-self="center" align="center">
            <b>TERMS AND CONDITIONS</b>
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
  methods: {
    route(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style>
</style>