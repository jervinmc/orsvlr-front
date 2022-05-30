<template>
<v-form ref="form">
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Add Promo</div>
      <v-col cols="12" class="px-0">
        <div>Label</div>
        <div>
          <v-text-field outlined v-model="promo.label"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Price</div>
        <div>
          <v-text-field outlined v-model="promo.price" type="number"></v-text-field>
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
              @click="addPromo"
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
        this.promo=this.items
        // this.img_holder=this.items.image
    },
  },
  data() {
    return {
      promo: [],
      
      buttonLoad: false,
      img_holder:'main_image.jpeg'
    };
  },
  methods: {
    async addPromo() {
      if(this.promo.label==null || this.promo.price==null ||  this.promo.label=='' || this.promo.price==''){
        alert("Plese fill up all field.")
        return
      }
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
        }
        form_data.append("label", this.promo.label);
        form_data.append("price", this.promo.price);
        if (this.isAdd) {
          const response = await this.$axios
            .post("/ads/", form_data, {
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
        } else {
          const response = await this.$axios
            .patch(`/ads/${this.promo.id}/`, form_data, {
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
          alert(error)
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
      this.$emit("cancel");

    },
  },
};
</script>

<style>
</style>