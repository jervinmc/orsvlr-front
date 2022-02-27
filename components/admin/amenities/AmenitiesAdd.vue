<template>
<v-form ref="form">
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Add Amenities</div>
      <div class="text-h6">Event</div>
      <v-col cols="12" class="px-0">
        <div>Name</div>
        <div>
          <v-text-field outlined v-model="amenities.name"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Descriptions</div>
        <div>
          <v-textarea outlined v-model="amenities.descriptions"></v-textarea>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Price</div>
        <div>
          <v-text-field outlined v-model="amenities.price"></v-text-field>
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
              @click="addEvents"
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
        this.amenities=this.items
    },
  },
  data() {
    return {
      room_list:['Standard','Deluxe','Suite'],
      amenities: [],
      buttonLoad: false,
      img_holder:'image_placeholder.png'
    };
  },
  methods: {
    async addEvents() {
      if(this.amenities.name=='' || this.amenities.name==null || this.amenities.descriptions=='' || this.amenities.descriptions==null || this.amenities.price=='' || this.amenities.price==null){
        alert("Please fill up all fields.")
        return
      }
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        form_data.append("name", this.amenities.name);
        form_data.append("price", this.amenities.price);
        form_data.append("descriptions", this.amenities.descriptions);
        if (this.isAdd) {
          const response = await this.$axios
            .post("/amenities/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.$refs.form.reset()
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$refs.form.reset()
              this.$emit("refresh");
            });
        } else {
          const response = await this.$axios
            .patch(`/amenities/${this.amenities.id}/`, form_data, {
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
        alert(error)
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
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>