<template>
<v-form ref="form">
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Add Pool</div>
      <div class="text-h6">Pools</div>
      <v-col cols="12" class="px-0">
        <div>Pool Type</div>
        <div>
          <v-select
            :items="pool_type_list"
            v-model="pools.pool_type"
            outlined
          ></v-select>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Price</div>
        <div>
          <v-text-field outlined v-model="pools.price"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Package</div>
        <div>
          <v-text-field outlined v-model="pools.package"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Descriptions</div>
        <div>
          <v-textarea outlined v-model="pools.descriptions"></v-textarea>
        </div>
      </v-col>
      <v-col>
        <span class="pt-2 pr-10 pb-10"><b>Upload Image<v-icon @click="$refs.file.click()">mdi-plus</v-icon></b></span>

        <div class="hover_pointer pt-10">
          <img
            @click="$refs.file.click()"
            :src="img_holder"
            alt="item_.js"
            height="150"
            width="150"
            class="mb-0"
          />
        </div>
      </v-col>
      <v-col class="d-none">
        <input
          style="display: none"
          type="file"
          id="fileInput"
          ref="file"
          accept="image/png, image/jpeg"
          @change="onFileUpload"
        />
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
              @click="addPools"
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
        this.pools=this.items
        this.img_holder=this.items.image
    },
  },
  data() {
    return {
      pool_type_list:['Private Pool 1','Private Pool 2','Public Pool'],
      pools: [],
      buttonLoad: false,
      img_holder:'main_image.jpeg'
    };
  },
  methods: {
    async addPools() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        form_data.append("pool_type", this.pools.pool_type);
        form_data.append("price", this.pools.price);
        form_data.append("package", this.pools.package);
        form_data.append("descriptions", this.pools.descriptions);
        if (this.isAdd) {
          const response = await this.$axios
            .post("/pools/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
            //   this.$refs.form.reset()
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$refs.form.reset()
              this.$emit("refresh");
            });
            // this.buttonLoad = false;
            //   this.$emit("cancel");
            //   this.$emit("refresh");
        } else {
          const response = await this.$axios
            .patch(`/pools/${this.pools.id}/`, form_data, {
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