<template>
  <div>
    <div class="text-h5 red--text mb-6">
      <u> ROOMS</u>
    </div>
    <!--eslint-disable -->
     <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
    <v-row v-for="i in rooms" :key="i">
      <v-col cols="6">
        <v-img :src="i.image" height="400"></v-img>
      </v-col>
      <v-col>
        <div class="text-h6">{{i.package}}</div>
        <!-- <v-row>
          <v-col cols="auto">
            <v-icon> mdi-arrow-right </v-icon>
          </v-col>
          <v-col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-icon> mdi-arrow-right </v-icon>
          </v-col>
          <v-col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </v-col>
        </v-row>
        <v-row class="mb-10">
          <v-col cols="auto">
            <v-icon> mdi-arrow-right </v-icon>
          </v-col>
          <v-col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </v-col>
        </v-row> -->
        <div>
          {{i.descriptions}}
        </div>
        <div>Php {{i.price}}/ per night</div>
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
            rooms:[]
        }
    },
      created(){
          this.loadData()
      },
  methods: {
    route(){
        this.$router.push('/book')
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