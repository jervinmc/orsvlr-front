<template>
  <div align="center">
      <div class="text-h4">
          Status
      </div>
      <div class="pa-16">
           <v-text-field outlined v-model="code" @keyup.enter="searchCode"></v-text-field>
      </div>
      <div class="text-h6">
          Terms and conditions
      </div>
      <v-row>
          <v-col>
              <div>
                  Client Name : {{name}}
              </div>
          </v-col>
          <v-col>
              To pay: {{total_price}}
          </v-col>
          <v-col>
              Reference Code: {{code}}
          </v-col>
          <v-col>
              Status : {{status}}
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            code:'',
            name:'',    
            total_price:'',
            status:'',
            

        }
    },
    methods:{
        async searchCode(){
          this.buttonLoad = true;
      try {
    
          const response = await this.$axios
            .post("/code/code/", {
            "code":this.code
        }, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
                console.log(res)
                this.name=res.data[0].customer_name
                this.total_price = res.data[0].price
                this.status = res.data[0].status
            });
         
        
      } catch (error) {
          alert(error)
        // alert(error);
        this.buttonLoad = false;
      }
      },
    },
    
}
</script>

<style>

</style>