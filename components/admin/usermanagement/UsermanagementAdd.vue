<template>
<v-form ref="form" submit.prevent="addMop">
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Add User</div>
      <div class="text-h6">User Management</div>
      <v-col cols="12" class="px-0">
        <div>First Name</div>
        <div>
          <v-text-field outlined v-model="mop.firstname"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Last Name</div>
        <div>
          <v-text-field outlined v-model="mop.lastname"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Email</div>
        <div>
          <v-text-field outlined v-model="mop.email"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Password</div>
        <div>
          <v-text-field type="password" outlined v-model="mop.password"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Account Type</div>
        <div>
          <v-select outlined :items="['Admin','Staff']" v-model="mop.account_type"></v-select>
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
        this.mop=this.items
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
        form_data.append("firstname", this.mop.firstname);
        form_data.append("lastname", this.mop.lastname);
        form_data.append("email", this.mop.email);
        form_data.append("account_type", this.mop.account_type);
        form_data.append("password", this.mop.password);
        if (this.isAdd) {
          const response = await this.$axios
            .post("/users/", form_data, {
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
            .patch(`/users/${this.mop.id}/`, form_data, {
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