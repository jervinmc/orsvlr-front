<template>
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Sign up</div>
      <div class="text-h6">Email</div>
      <div>
        <v-text-field outlined v-model="users.email"></v-text-field>
      </div>
      <div class="text-h6">Firstname</div>
      <div>
        <v-text-field outlined v-model="users.firstname"></v-text-field>
      </div>
      <div class="text-h6">Lastname</div>
      <div>
        <v-text-field outlined v-model="users.lastname"></v-text-field>
      </div>
      <div class="text-h6">Password</div>
      <div>
        <v-text-field outlined v-model="users.password" type="password"></v-text-field>
      </div>
      <div class="text-h6">User Type</div>
      <div>
        <v-select
          outlined
          v-model="users.account_type"
          :items="['Admin', 'Staff']"
        ></v-select>
      </div>
      <v-card-actions>
        <v-row align="center">
          <v-col align="end">
            <v-btn color="red" text @click="cancel"> Cancel </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="success"
              text
              @click="addMarketplace"
              :loading="buttonLoad"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["isOpen"],
  watch: {
    items() {
      this.marketplace = this.items;
      this.img_holder = this.items.image;
    },
  },
  data() {
    return {
      img_holder: "image_placeholder.png",
      marketplace: [],
      image: "",
      url: "",
      users: [],
      buttonLoad: false,
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
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
    async addMarketplace() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        form_data.append("email", this.users.email);
        form_data.append("account_type", this.users.account_type);
        form_data.append("firstname", this.users.firstname);
        form_data.append("lastname", this.users.lastname);
        form_data.append("password", this.users.password);
        const response = await this.$axios
          .post("/users/", form_data)
          .then(() => {
            this.buttonLoad = false;
            this.$emit("cancel");
            this.$emit("refresh");
          });
      } catch (error) {
        alert(error);
        this.buttonLoad = false;
      }
    },
  },
};
</script>

<style>
</style>