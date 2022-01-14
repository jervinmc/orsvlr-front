<template>
  <v-card elevation="5">
    <pools-add :isOpen="dialogAdd" @cancel="dialogAdd=false" @refresh="loadData" :items="selectedItem" :isAdd="isAdd" />
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Pools Management</b>
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
          <span class="text-none">Add Pool</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      class="pa-5"
      :headers="headers"
      :items="pools"
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
            <v-list-item @click.stop="status(item, 'Activate')">
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="status(item, 'Deactivate')">
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
import PoolsAdd from './PoolsAdd.vue';


export default {
  components: { PoolsAdd },


  created() {
    this.loadData();
  },
  data() {
    return {
      selectedItem:{},
      isLoading: false,
      pools: [],
      dialogAdd:false,
      isAdd:true,
      headers: [
        { text: "ID", value: "id" },
        { text: "Pool Type", value: "pool_type" },
        { text: "Price", value: "price" },
        { text: "Package", value: "package" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
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
      this.poolsGetall();
    },
    async poolsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/pools/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.pools = res.data;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>