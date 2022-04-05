<template>
  <div>
    <div align="center" class="py-10">
      <div class="text-h4 pt-5" >
        <b>Villa Leonara</b>
      </div>
      <div style="color:#FF0909">
        Resort and Event Venue
      </div>
      <div style="font-size:30px">
        MODERN ROOMS & SUITES
      </div>
      <div>
        Explore our elegant guest rooms and suites below
      </div>
    </div>
    <!--eslint-disable -->
     <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
    <v-row v-for="i in rooms" :key="i" class="px-10">
      <v-col cols="6">
        <v-img :src="i.image" height="400"></v-img>
      </v-col>
      <v-col align-self="center">
        <v-card elevation="5" height="300" class="pa-5">
          <div class="text-h4 pb-5" align="center"><b>{{i.package}}</b></div>
        <v-divider class="pb-5"></v-divider>
        <div>
            {{i.descriptions}}
        </div>
     
          <div class="pt-16" align="end">
          <v-row>
            <v-col>
                   <div>
                    <div class="text-h6">Php {{formatPrice(i.price)}}/ per night</div>
                </div>
            </v-col>
            <v-col>
              <v-btn depressed color="#2E2E2E" dark @click="route(i.id)"> View Room</v-btn>
            </v-col>
          </v-row>
        </div>
        </v-card> 
     
      
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isLoading:false,
            rooms:[]
        }
    },
      created(){
          this.loadData()
      },
  methods: {
      formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    route(id){
        this.$router.push('/room_details/'+id)
    },
    loadData() {
      this.roomsGetall();
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
  },
};
</script>

<style>
</style>