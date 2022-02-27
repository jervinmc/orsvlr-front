<template>
  <div class="pa-10">
    <div class="text-h5 pb-10">
      <v-row>
        <v-col cols="6">
          <b>Other Pools</b>
        </v-col>
      </v-row>
    </div>
      <div align="end">
        <v-row>
          <v-col>
            <v-icon color="black"  @click="previous"> mdi-arrow-left </v-icon>
          </v-col>
          <v-col cols="auto">
            <v-icon color="black" @click="next"> mdi-arrow-right </v-icon>
          </v-col>
        </v-row>
      </div>
    <div>
      <v-row v-if="rooms.length != 0">
        <v-col cols="6">
          <v-img :src="rooms[i].image" class="d-flex justify-center align-end" height="300">
              <v-row>
                  <v-col >
                     <div class="white--text">
                          {{rooms[i].pool_type}}
                     </div>
                  </v-col>
                  <v-col align="end">
                    <v-btn depressed color="#2E2E2E" dark @click="route(rooms[i].id)"> View Details</v-btn>
                  </v-col>
              </v-row>
          </v-img>
        </v-col>
        <v-col cols="6">
          <v-img :src="rooms[i + 1].image" height="300" class="d-flex justify-center align-end">
              <v-row>
                  <v-col class="white--text">
                      <div class="white--text">
                             {{rooms[i+1].pool_type}}
                      </div>
                  </v-col>
                  <v-col align="end">
                    <v-btn depressed color="#2E2E2E" dark @click="route(rooms[i+1].id)"> View Details</v-btn>
                  </v-col>
              </v-row>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
      rooms: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    route(id){
        window.location.href="/pools_details/"+id
    },
      previous(){
          if(this.i==0) return
          this.i--;
      },
      next(){
          if(this.rooms.length-1 == this.i) return
          this.i++;
      },
    loadData() {
      this.roomsGetall();
    },
    async roomsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/pools/`, {
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