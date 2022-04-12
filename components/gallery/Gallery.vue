<template>
  <div>
    <v-overlay
            :absolute="true"
            :value="fullscreenImage"
          >  
              <v-img :src="selectedImage" height="800" width="800">
                  <div align="end" class="pa-10"> 
              <v-icon @click="fullscreenImage=false" color="red" size="40">
                mdi-close
              </v-icon>
            </div>
              </v-img>
       </v-overlay>
      <!-- eslint-disable -->
       <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          v-if="isLoading"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
      <v-row>
          <v-col class="pa-5" cols="4" v-for="i in gallery" :key="i">
              <v-img height="400" width="400" :src="i.image" @click="viewFull(i.image)">
              </v-img>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
    created(){
        this.loadData()
    },
    data(){
        return{
          selectedImage:'',
            gallery:[],
            fullscreenImage:false,
        }
    },
    methods:{
      viewFull(image){
        this.fullscreenImage=true
        this.selectedImage=image
      },
        loadData() {
      this.galleryGetall();
    },
    async galleryGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/gallery/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.gallery = res.data;
          this.isLoading = false;
        });
    },
    }
}
</script>

<style>

</style>