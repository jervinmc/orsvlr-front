<template>
   <v-dialog v-model="isOpen" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Confirmation</div>
    <div align="center" class="pa-10">
      Are you sure you want to CONFIRM this reservation?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="cancel"> Back </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" :loading="buttonLoad" text @click="confirm"> Confirm </v-btn>
            </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["isOpen", "items", "isAdd"],
  watch: {
    items() {
        this.book=this.items
    },
  },
  data() {
    return {
      account_type:'',
      room_list:['Standard','Deluxe','Suite'],
      book: [],
      name:'',
      buttonLoad: false,
    };
  },
  created(){
    this.name = localStorage.getItem('name')
    this.account_type = localStorage.getItem('account_type')
  },
  methods: {
         async confirm() {
           
          if(this.book.price-this.book.to_pay==0){
              const res = await this.$axios
        .patch(
          `/book/${this.book.id}/`,
          {
            to_pay: 0,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
          }
      this.buttonLoad = true;
      const res = await this.$axios
        .post(
          `/confirmed/status/`,
          {
            status: "confirmed",
            email: this.book.email,
            id: this.book.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          this.$axios.post('/logs/',{name:this.name,action:`confirmed the reservation. ID : ${this.book.id}`})
        this.buttonLoad=false
        this.$emit('refresh')
        });
    },
    async addEvents() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        form_data.append("package", this.events.package);
        form_data.append("price", this.events.price);
        form_data.append("descriptions", this.events.descriptions);
        if (this.isAdd) {
          const response = await this.$axios
            .post("/events/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.$refs.form.reset()
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$emit("refresh");
            });
        } else {
          const response = await this.$axios
            .patch(`/discussions/${this.discussions.id}/`, form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$emit("refresh");
            });
        }
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>