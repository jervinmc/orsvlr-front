<template>
  <div>
    <div class="text-h4 mb-10">
      <b>Packages</b>
    </div>
    <!--eslint-disable -->
     <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
    <v-row v-for="i in events" :key="i">
      <v-col cols="6">
        <v-img :src="i.image" height="400"></v-img>
      </v-col>
      <v-col>
        <div class="text-h6">{{i.package}}</div>
     
        <div>
          {{i.descriptions}}
        </div>
        <div>{{formatPrice(i.price)}}/ per night</div>
        <!-- <div class="pt-5">
          <v-btn depressed color="#6609af" dark @click="route"> Book now ! </v-btn>
        </div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  
    data(){
        return{
            isLoading:false,
            events:[]
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
    route(){
        this.$router.push('/book')
    },
    loadData() {
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
  },
};
</script>

<style>
</style>