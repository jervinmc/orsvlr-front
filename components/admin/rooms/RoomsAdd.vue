<template>
<v-form ref="form">
  <v-dialog v-model="isOpen" width="1000" persistent>
    <v-card class="pa-10">
      <div align="center" class="text-h6">Add Room</div>
      <div class="text-h6">Rooms</div>
      <v-col cols="12" class="px-0">
        <div>Room Type</div>
        <div>
          <v-select
            :items="room_list"
            v-model="rooms.service_type"
            outlined
          ></v-select>
        </div>
      </v-col>
      <!-- <v-col cols="12" class="px-0">
        <div>Time Range</div>
        <div>
          <v-text-field outlined v-model="rooms.time_range"></v-text-field>
        </div>
      </v-col> -->
      <v-col cols="12" class="px-0">
        <div>Price</div>
        <div>
          <v-text-field outlined v-model="rooms.price"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Package</div>
        <div>
          <v-text-field outlined v-model="rooms.package"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>descriptions</div>
        <div>
          <v-textarea outlined v-model="rooms.descriptions"></v-textarea>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div>Room Features</div>
        <div>
          <v-textarea outlined v-model="rooms.features"></v-textarea>
        </div>
      </v-col>
       <v-col>
        <span class="pt-2 pr-10 pb-10"><b>Upload Image <v-icon @click="$refs.file.click()">mdi-plus</v-icon></b></span>

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
              @click="addRooms"
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
        this.rooms=this.items
        this.img_holder=this.items.image
    },
  },
  data() {
    return {
      room_list:['Standard','Deluxe','Suite'],
      rooms: [],
      buttonLoad: false,
      img_holder: "image_placeholder.png",
      image:''
    };
  },
  methods: {
        async addRooms() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        form_data.append("service_type", this.rooms.service_type);
        form_data.append("price", this.rooms.price);
        form_data.append("package", this.rooms.package);
        form_data.append("descriptions", this.rooms.descriptions);
        form_data.append("features", this.rooms.features);
        if (this.isAdd) {
          const response = await this.$axios
            .post("/rooms/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
           
                  this.$refs.form.reset()
             
            });
            this.buttonLoad = false;
             this.$emit("cancel");
              this.$emit("refresh");
            
        } else {
          const response = await this.$axios
            .patch(`/rooms/${this.rooms.id}/`, form_data, {
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
      this.$emit("cancel");
    },  
  },
};
</script>

<style>
</style>