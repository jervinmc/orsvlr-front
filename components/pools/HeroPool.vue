<template>
  <div >
    <v-img align="start">
      <v-row no-gutters>
        <v-col cols="12" align="center">
            <v-img :src="image" v-if="events.length!=0" height="450" >
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
  </div>
</template>

<script>
export default {
   created() {
    this.loadData();
  },
  data() {
    return {
      buttonLoad:false,
      image:"",
      account_type:'',
      deleteConfirmation:false,
      selectedItem:[],
        events:[],
      selectedItem:{},
      isLoading: false,
      users: [],
      dialogAdd:false,
      isEdit:false,
      image:'',
      img_holder:'',
      isAdd:true,
      headers: [
        { text: "ID", value: "id" },
        { text: "Page", value: "page" },
        { text: "Image", value: "image" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
   async  editValue(){
          this.buttonLoad=true;
           let form_data = new FormData();
                if (this.image != null && this.image != "") {
                form_data.append("image", this.image);
                }
           const response = await this.$axios
            .patch(`/content/${this.selectedItem.id}/`, form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.buttonLoad = false;
            this.isEdit=false
              this.loadData()
            });
      },
      onFileUpload(e) {
      this.image = e;
      e = e.target.files[0];
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
      this.image = e;
      if (e == null) {
      } else {
        this.url, (this.img_holder = URL.createObjectURL(e));
      }
    },
    async deleteValue(){
     this.buttonLoad=true
      this.$axios.delete(`/events/${this.selectedItem.id}/`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(()=>{
          this.deleteConfirmation=false
          this.buttonLoad=false
          alert('Successfully Deleted!')
          this.loadData()
      })
    },
     deleteItem(val){
      this.selectedItem = val
      this.deleteConfirmation=true
    },

     formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    editItem(val){
      this.selectedItem=val
    //   this.dialogAdd=true
      this.isEdit=true
    },
    addItem(){
      this.isAdd=true
      this.dialogAdd=true
    },
    async status(data, status) {
      this.isLoading = true;
      const res = await this.$axios
        .patch(
          `/announcement/${data.id}/`,
          {
            is_active: status == "Deactivate" ? false : true,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          this.loadData();
        });
    },
    loadData() {
      this.account_type=localStorage.getItem('account_type')
      this.eventsGetall();
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/content/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.events = res.data;
          for(let x in this.events){
  
            if(this.events[x].page=='pool'){
              this.image = this.events[x].image
         
            }
          }
          // image
          this.isLoading = false;
        });
    },
  },

};
</script>

<style>
</style>