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
        PRIVATE & PUBLIC POOL
      </div>
      <div>
        Explore our amazing pools below

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
    <v-row v-for="i in pools" :key="i">
      <v-col cols="6">
        <v-img :src="i.image" height="400"></v-img>
      </v-col>
      <v-col align-self="center">
       <v-card elevation="5" height="300" class="pa-5">
            <div class="text-h4 pb-5" align="center"><b>{{i.package}}</b></div>
        <v-divider></v-divider>
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
              <v-btn depressed color="#2E2E2E" dark @click="route(i.id)"> View Pool</v-btn>
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
            pools:[]
        }
    },
      created(){
          this.loadData()
      },
  methods: {
    cancel(){},
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    route(id){
        this.$router.push('/pools_details/'+id)
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