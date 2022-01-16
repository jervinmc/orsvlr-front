<template>
<v-form ref="form" submit.prevent="addMop">
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Add Mode of Payment</div>
      <div class="text-h6">Rooms</div>
      <v-col cols="12" class="px-0">
        <div>Mode of Payment</div>
        <div>
          <v-text-field outlined v-model="mop.payment"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Name</div>
        <div>
          <v-text-field outlined v-model="mop.name"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Account Number</div>
        <div>
          <v-text-field outlined v-model="mop.accountNumber"></v-text-field>
        </div>
      </v-col>
      <v-card-actions>
        <v-row align="center">
          <v-col align="end">
            <v-btn color="red" text @click="cancel"> Cancel </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="success"
              text
              @click="addMop"
              :loading="buttonLoad"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </v-form>
</template>

<script>
export default {
  props: ["isOpen", "items", "isAdd"],
  watch: {
    items() {
        // // this.mop=this.items
        // alert(this.items.modeOfPayment)
        this.mop.accountNumber=this.items.accountNumber
        this.mop.payment=this.items.modeOfPayment
        this.mop.name=this.items.accountName
        this.mop.id=this.items.id
    },
  },
  data() {
    return {
      room_list:['Standard','Deluxe','Suite'],
      mop: [],
      buttonLoad: false,
      img_holder: "image_placeholder.png",
      image:''
    };
  },
  methods: {
        async addMop() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        form_data.append("modeOfPayment", this.mop.payment);
        form_data.append("accountName", this.mop.name);
        form_data.append("accountNumber", this.mop.accountNumber);
        if (this.isAdd) {
          const response = await this.$axios
            .post("/payment/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
          
            });
            this.buttonLoad = false;
            this.$refs.form.reset()
             this.$emit("cancel");
              this.$emit("refresh");
            
        } else {
          const response = await this.$axios
            .patch(`/payment/${this.mop.id}/`, form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$refs.form.reset()
              this.$emit("refresh");
            });
        }
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
      }
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
      this.$refs.form.reset()
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>