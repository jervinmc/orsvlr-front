<template>
  <v-app dark>
    <v-dialog v-model="isOpenLogout" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Logout User</div>
    <div align="center" class="pa-10">
        Would you like to logout?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="cancel"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" text @click="logout"> Logout </v-btn>
            </v-col>
        </v-row>  
      </v-card-actions>
    </v-card>
  </v-dialog>
    <div v-if="$route.name=='admin'"></div>
    <v-app-bar dark color="#003853" :clipped-left="clipped" fixed app elevation="1" v-else-if="$route.name!='admin' && isAdmin!='admin-pools' && isAdmin!='admin-rooms' && isAdmin!='admin-gallery' && isAdmin!='admin-promo' && isAdmin!='admin-sales' && isAdmin!='admin-events' && isAdmin!='admin-amenities'  && isAdmin!='admin-book' && isAdmin!='admin-archived' && isAdmin!='admin-logs'  && isAdmin!='admin-settings' && isAdmin!='admin-usermanagement' && isAdmin!='admin-content' && isAdmin!='admin-ads'   " >
      <div class="text-h6">Villa Leonora Resort</div>
      <v-spacer></v-spacer>
      <v-toolbar-title
        
        class="px-4 white--text"
        style="cursor: pointer; font-size: 16px;"
        @click="route('index')"
        ><v-icon class="pb-1">mdi-home</v-icon>Home</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 white--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('rooms')"
        ><v-icon class="pb-1">mdi-store</v-icon> Rooms</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 white--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('pools')"
        ><v-icon class="pb-1">mdi-pool</v-icon> Pools</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 white--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('events')"
        ><v-icon class="pb-1">mdi-calendar-multiple</v-icon>Events</v-toolbar-title
      >
      <div></div>
      <v-toolbar-title
        class="px-4 white--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('gallery')"
      >
        <v-icon class="pb-1">mdi-image</v-icon>Gallery</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 white--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('contacts')"
        ><v-icon class="pb-1">mdi-phone</v-icon> Contact us</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 white--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('status')"
        ><v-icon class="pb-1">mdi-list-status</v-icon> Status</v-toolbar-title
      >
       <v-toolbar-title
        class="px-4 white--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('book')"
        ><v-icon class="pb-1">mdi-plus</v-icon> Book</v-toolbar-title
      >
    </v-app-bar>
    <v-app-bar color="white" :clipped-left="clipped" fixed app elevation="1" v-else >
    <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <div class="logout" align="center">
        <v-divider class="pb-2" />
        <div class="white--text" @click="isViewLogout = true">Logout</div>
      </div>
      <v-list nav dense>
        <!--eslint-disable-->
        <v-list-item-group active-class="primary" color="white">
          <v-list-item
            v-if="account_type!='Staff'"
            :to="items[index].to"
            v-for="(key, index) in items"
            :key="index"
          >
            <v-icon class="pr-2">{{ items[index].icon }}</v-icon>
            <v-list-item-title>{{ items[index].title }}</v-list-item-title>
          </v-list-item>
           <v-list-item
            v-if="(account_type=='Staff' && items[index].title=='Book') || (account_type=='Staff' && items[index].title=='Logout')"
            :to="items[index].to"
            v-for="(key, index) in items"
            :key="index"
          >
            <v-icon class="pr-2">{{ items[index].icon }}</v-icon>
            <v-list-item-title>{{ items[index].title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item
        @click="logout"
          >
            <v-icon class="pr-2"></v-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
// import LogoutDialog from '../components/custom/LogoutDialog.vue';
export default {
  components: {},
  created(){
    this.loadData();
  },
  name: "DefaultLayout",

  data() {
    return {
      isOpenLogout:false,
      profileImage: "",
      isOpenLogout: false,
      clipped: false,
      isAdmin:false,
      drawer: false,
      account_type: "",
      fixed: false,
      items: [
        {
          icon: "mdi-book",
          title: "Book",
          to: "/admin/book",
        },
        {
          icon: "mdi-book",
          title: "Sales",
          to: "/admin/sales",
        },
        {
          icon: "mdi-book",
          title: "Promo Code",
          to: "/admin/promo",
        },
        {
          icon: "mdi-pool",
          title: "Pools",
          to: "/admin/pools",
        },
        {
          icon: "mdi-application",
          title: "Amenities",
          to: "/admin/amenities",
        },
        {
          icon: "mdi-door",
          title: "Rooms",
          to: "/admin/rooms",
        },
        {
          icon: "mdi-balloon",
          title: "Events",
          to: "/admin/events",
        },
        {
          icon: "mdi-balloon",
          title: "Ad Ons",
          to: "/admin/ads",
        },
        {
          icon: "mdi-image",
          title: "Gallery",
          to: "/admin/gallery",
        },
        {
          icon: "mdi-image",
          title: "Archived",
          to: "/admin/archived",
        },
        {
          icon: "mdi-account-multiple",
          title: "Usermanagment",
          to: "/admin/usermanagement",
        },
        {
          icon: "mdi-account-multiple",
          title: "Content",
          to: "/admin/content",
        },
        {
          icon: "mdi-cog",
          title: "Mode of Payment",
          to: "/admin/settings",
        },
        {
          icon: "mdi-cog",
          title: "Logs",
          to: "/admin/logs",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      isOpenLogout:false,
      title: "Vuetify.js",
    };
  },
  methods: {
    logout(){
      localStorage.clear()
      window.location.href="/admin"
    },
    loadData(){
      this.account_type = localStorage.getItem('account_type')
      this.isAdmin=this.$route.name
    },
    route(name) {
      if (name == "index") {
        this.$router.push("/");
        return;
      }
      this.$router.push("/"+name);
    },
  },
};
</script>
