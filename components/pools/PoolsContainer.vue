<template>
  <div>
    <div class="text-h5 red--text mb-6">
      <u> Pools</u>
    </div>
    <!--eslint-disable -->
     <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
    <v-row v-for="i in pools" :key="i">
      <v-col cols="6">
        <v-img :src="i.image" height="400"></v-img>
      </v-col>
      <v-col>
        <div class="text-h6">{{i.package}}</div>
        <div>
        {{i.descriptions}}
        </div>
        <div class="text-h6"><b>Php {{formatPrice(i.price)}}</b></div>
        <div class="pt-5">
          <v-btn depressed color="#6609af" dark @click="route"> Book now ! </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isLoading:false,
            pools:[]
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
      this.poolsGetall();
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
  },
};
</script>

<style>
</style>