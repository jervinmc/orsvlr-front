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
      <gallery-add :isOpen="dialogAdd" @cancel="dialogAdd=false" @refresh="loadData" :items="selectedItem" :isAdd="isAdd"/>
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Gallery Management</b>
      </v-col>
      <v-spacer></v-spacer>
      <v-col align-self="center" align="end" class="pr-10">
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
          <span class="text-none">Add Image</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      class="pa-5"
      :headers="headers"
      :items="gallery"
      :loading="isLoading"
    >
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
            <!-- <v-list-item @click.stop="status(item, 'Activate')">
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
            <v-list-item @click.stop="deleteItem(item)">
              <v-list-item-content>
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template #[`item.image`]="{ item }">
          <v-img :src="item.image" height="100" width="100"></v-img>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import GalleryAdd from './GalleryAdd.vue';


export default {
  components: { GalleryAdd },


  created() {
    this.loadData();
  },
  data() {
    return {
      buttonLoad:false,
      deleteConfirmation:false,
      selectedItem:{},
      isLoading: false,
      pools: [],
      dialogAdd:false,
      isAdd:true,
      gallery:[],
      headers: [
        { text: "ID", value: "id" },
        { text: "Image", value: "image" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
     async deleteValue(){
     this.buttonLoad=true
      this.$axios.delete(`/gallery/${this.selectedItem.id}/`,{
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
    editItem(val){
      this.selectedItem=val
      this.dialogAdd=true
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
      this.galleryGetall();
    },
    async galleryGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/gallery/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.gallery = res.data;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>