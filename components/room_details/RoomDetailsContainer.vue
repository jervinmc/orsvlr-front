<template>
  <div style="heigth:500px;backgroud-color:#003853">
    <v-img align="start">
      <v-row no-gutters>
        <v-col cols="12" align="center">
            <v-img :src="details.image" height="450" >
            <!-- <v-col cols="6" class="pa-16 white--text" >
              <div class=" text-h3" style="color:#08FFA6">
                <b>Chill Out</b>
              </div>
              <div class="my-10">
                Experience the never ending paradise at Villa Leonora Resort & Events Venues. We will provide a high class experience for you guests to make your visit unforgetable and memorable.
              </div>
            </v-col> -->
          </v-img>
        </v-col>
      </v-row>
    </v-img>
    <div class="pt-16 px-10" style="background-color:#003853">
      <v-row>
        <v-col class="px-10">
          <div class="white--text text-h4">
              <b>{{details.service_type}} Room</b>
          </div>
          <div class="text-h6 white--text">
              {{details.package}} | Php {{formatPrice(details.price)}}
          </div>
           <div class="text-h6 white--text pt-5">
              {{details.descriptions}}
          </div>
          <div class="pt-5" align="start">
          <v-btn depressed color="#2E2E2E" dark :to="`/book?service_type=Room&type=${type=details.service_type}`"> Book Now</v-btn>
        </div>
        </v-col>
        <v-col class="pa-0" align="center">
          <div style="height:300px;background-color:white">
            <div class="text-h4">
              <b>Room Features</b>
            </div>
            <div class="pt-5">
              {{details.features}}
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      details:{}
    }
  },
   created(){
     console.log(this.$route.params.index)
    this.loadData()
   },
   methods:{
     previous(){
          if(this.i==0) return
          this.i--;
      },
      next(){
          if(this.rooms.length-1 == this.i) return
          this.i++;
      },
     formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
     loadData(){
       this.getDetails()
     },
     getDetails(){
       this.$axios.get(`/rooms/${this.$route.params.index}/`,{headers:{

       }})
       .then((res)=>{
         console.log(res.data)
        this.details = res.data
       })
     }

   }
};
</script>

<style>
</style>