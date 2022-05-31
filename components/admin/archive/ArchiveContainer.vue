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
    <v-dialog v-model="deleteConfirmationBulk" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Confirmation</div>
    <div align="center" class="pa-10">
        Are you sure you want to delete these selected items?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="deleteConfirmationBulk=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" text :loading="buttonLoad" @click="bulkDelete"> Confirm </v-btn>
            </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
    <v-dialog v-model="undoConfirmation" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Confirmation</div>
    <div align="center" class="pa-10">
        Are you sure you want to UNDO this item.
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="undoConfirmation=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" text :loading="buttonLoad" @click="undoValue"> Confirm </v-btn>
            </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
      <gallery-add :isOpen="dialogAdd" @cancel="dialogAdd=false" @refresh="loadData" :items="selectedItem" :isAdd="isAdd"/>
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Archive Management</b>
      </v-col>
      <v-spacer></v-spacer>
      <v-col align-self="center">
        <v-btn @click="deleteConfirmationBulk=true">Delete</v-btn>
      </v-col>
    </v-row>
    <v-data-table
    show-select
    v-model="itemSelected"
      class="pa-5"
      :headers="headers"
      :items="bookArchive"
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
            <v-list-item @click.stop="undoItem(item)">
              <v-list-item-content>
                <v-list-item-title>Undo</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="deleteItem(item)">
              <v-list-item-content>
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {

  created() {
    this.loadData();
  },
  data() {
    return {
      deleteConfirmationBulk:false,
      itemSelected:[],
      selectedItem:{},
      isLoading: false,
      pools: [],
      dialogAdd:false,
      isAdd:true,
      gallery:[],
      deleteConfirmation:false,
      buttonLoad:false,
      headers: [
        { text: "ID", value: "id" },
        { text: "First Name", value: "firstname" },
        { text: "Last Name", value: "lastname" },
        { text: "Email", value: "email" },
        { text: "Date Start", value: "date_start" },
        { text: "Date End", value: "date_end" },
        { text: "Code", value: "code" },
        { text: "Price", value: "price" },
        { text: "Service Type", value: "service_type" },
        { text: "Status", value: "status" },
        { text: "Time Remaining", value: "remaining" },
        { text: "Trasanction Date", value: "transaction_date" },
        { text: "Actions", value: "opt" },
        ,
      ],
      undoConfirmation:false,
    };
  },
  computed:{
    bookArchive(){
      return this.gallery.filter(item=>{
        return item.status=='archive'
      });
    },
  },
  methods: {
     undoItem(val){
      this.selectedItem = val
      this.undoConfirmation = true
    },  
     async undoValue(){
     this.buttonLoad=true
      this.$axios.patch(`/book/${this.selectedItem.id}/`,{status:"completed"},{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(()=>{
          this.undoConfirmation=false
          this.buttonLoad=false
          alert('This item sent to booking management')
          this.loadData()
      })
    },
     async bulkDelete(){
     this.buttonLoad=true
      this.$axios.post(`/bulk-delete-book/`,{items:this.itemSelected},{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(()=>{
          this.deleteConfirmation=false
          this.buttonLoad=false
          this.loadData()
      })
    },
       deleteItem(val){
      this.selectedItem = val
      this.deleteConfirmation = true
    },  
     async deleteValue(){
     this.buttonLoad=true
      this.$axios.delete(`/book/${this.selectedItem.id}/`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(()=>{
          this.deleteConfirmationBulk=false
          this.buttonLoad=false
          alert('Successfully Deleted!')
          this.loadData()
      })
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
        .get(`/book/`, {
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