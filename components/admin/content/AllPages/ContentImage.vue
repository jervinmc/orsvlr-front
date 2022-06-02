<template>
  <v-card elevation="5">
     <v-dialog v-model="deleteConfirmation" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Confirmation</div>
    <div align="center" class="pa-10">
        Are you sure you want to delete this item?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="deleteConfirmation=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" text :loading="buttonLoad" @click="deleteValue"> Confirm </v-btn>
            </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
   <v-dialog v-model="isEdit" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Edit Image</div>
    <div align="center" class="pa-10">
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
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="isEdit=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" text :loading="buttonLoad" @click="editValue"> Confirm </v-btn>
            </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
    <add-content :isOpen="dialogAdd" @cancel="dialogAdd=false" @refresh="loadData" :items="selectedItem" :isAdd="isAdd" />
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Content Management</b>
      </v-col>
      <v-spacer></v-spacer>
      <!-- <v-col align-self="center" align="end" class="pr-10" v-if="account_type!='Staff'">
        <v-btn
          class="rnd-btn"
          rounded
          large
          color="black"
          depressed
          dark
          width="170"
          @click="addItem"
        >
          <span class="text-none">Add Event</span>
        </v-btn>
      </v-col> -->
    </v-row>
    <v-data-table
      class="pa-5"
      :headers="headers"
      :items="events"
      :loading="isLoading"
    >
     <template #[`item.price`]="{ item }">
          <div>
            {{formatPrice(item.price)}}
          </div>
      </template>
      <template v-slot:loading>
        <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
      </template>

      <template #[`item.opt`]="{ item }">
        <v-menu offset-y z-index="1">
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click.stop="editItem(item)">
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template #[`item.image`]="{ item }">
          <v-img :src="item.image" height="100" width="100"></v-img>
      </template>
    </v-data-table>
    <div>
       <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Settings Management</b>
      </v-col>
    <div align="center">
        <div style="width:1200px" align="center">
       <v-card class="pa-10">
            <div align="center">
            <v-row>
            <v-col cols="612" class="px-0">
        <div align="start">Email</div>
        <div>
          <v-text-field outlined v-model="settings.email"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div align="start">Contacts</div>
        <div>
          <v-text-field outlined v-model="settings.contacts"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div align="start">Address</div>
        <div>
          <v-text-field outlined v-model="settings.address"></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" class="px-0">
        <div align="start">History</div>
        <div>
          <v-textarea outlined v-model="settings.history"></v-textarea>
        </div>
      </v-col>
      <v-row>
          <v-col cols="4">
              <div align="center" class="pa-10">
         <v-col>
        <span class="pt-2 pr-10 pb-10"><b>Carousel Page 1<v-icon @click="$refs.c1.click()">mdi-plus</v-icon></b></span>

        <div class="hover_pointer pt-10">
          <img
            @click="$refs.c1.click()"
            :src="carousel1_holder"
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
          ref="c1"
          accept="image/png, image/jpeg"
          @change="onFileUpload_c1"
        />
      </v-col>
    </div>
          </v-col>
          <v-col cols="4">
              <div align="center" class="pa-10">
         <v-col>
        <span class="pt-2 pr-10 pb-10"><b>Carousel Page 2<v-icon @click="$refs.c2.click()">mdi-plus</v-icon></b></span>

        <div class="hover_pointer pt-10">
          <img
            @click="$refs.c2.click()"
            :src="carousel2_holder"
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
          ref="c2"
          accept="image/png, image/jpeg"
          @change="onFileUpload_c2"
        />
      </v-col>
    </div>
          </v-col>
          <v-col cols="4">
              <div align="center" class="pa-10">
         <v-col>
        <span class="pt-2 pr-10 pb-10"><b>Carouse Page 3<v-icon @click="$refs.c3.click()">mdi-plus</v-icon></b></span>

        <div class="hover_pointer pt-10">
          <img
            @click="$refs.c3.click()"
            :src="carousel3_holder"
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
          ref="c3"
          accept="image/png, image/jpeg"
          @change="onFileUpload_c3"
        />
      </v-col>
    </div>
          </v-col>
      </v-row>
        </v-row>
        </div>
         <div align="center">
            <v-col>
                <v-btn color="success" text :loading="buttonLoad" @click="saveSettings"> Save </v-btn>
            </v-col>
       </div>
       </v-card>
      
    </div>
    </div>
    </div>
  </v-card>
</template>

<script>
import AddContent from './AddContent.vue';


export default {
  components: { AddContent },
  created() {
    this.loadData();
  },
  data() {
    return {
      buttonLoad:false,
      account_type:'',
      deleteConfirmation:false,
      selectedItem:[],
        events:[],
        settings:[],
      selectedItem:{},
      carousel1:'',
      carousel2:'',
      carousel3:'',
      carousel1_holder:'',
      carousel2_holder:'',
      carousel3_holder:'',

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
    async  saveSettings(){
          this.buttonLoad=true;
           let form_data = new FormData();
                if (this.carousel1 != null && this.carousel1 != "") {
                form_data.append("carousel1", this.carousel1);
                }
                if (this.carousel2 != null && this.carousel2 != "") {
                form_data.append("carousel2", this.carousel2);
                }
                if (this.carousel3 != null && this.carousel3 != "") {
                form_data.append("carousel3", this.carousel3);
                }
                form_data.append("address", this.settings.address);
                form_data.append("history", this.settings.history);
                form_data.append("email", this.settings.email);
                form_data.append("contacts", this.settings.contacts);
                form_data.append("history", this.settings.history);
           const response = await this.$axios
            .patch(`/settings/1/`, form_data, {
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
    onFileUpload_c1(e) {
      this.carousel1 = e;
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
      this.carousel1 = e;
      if (e == null) {
      } else {
        this.url, (this.carousel1_holder = URL.createObjectURL(e));
      }
    },
     onFileUpload_c2(e) {
      this.carousel2 = e;
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
      this.carousel2 = e;
      if (e == null) {
      } else {
        this.url, (this.carousel2_holder = URL.createObjectURL(e));
      }
    },
     onFileUpload_c3(e) {
      this.carousel3 = e;
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
      this.carousel3 = e;
      if (e == null) {
      } else {
        this.url, (this.carousel3_holder = URL.createObjectURL(e));
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
      this.settingsGetall();
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
          this.isLoading = false;
        });
    },
    async settingsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/settings/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {

          this.settings = res.data;
        //   alert(res.data[0]['contacts'])
          this.settings.history = res.data[0].history;
           this.settings.contacts = res.data[0].contacts;
            this.settings.address = res.data[0].address;
        this.settings.email = res.data[0].email;
        this.carousel1_holder = res.data[0].carousel1;
        this.carousel2_holder = res.data[0].carousel2;
        this.carousel3_holder= res.data[0].carousel3;
        //   for(let x in this)
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>

</style>