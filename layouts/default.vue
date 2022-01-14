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
    <v-app-bar color="white" :clipped-left="clipped" fixed app elevation="1" v-if="$route.name!='admin' && isAdmin!='admin-pools' && isAdmin!='admin-rooms' && isAdmin!='admin-gallery' && isAdmin!='admin-events'  && isAdmin!='admin-book'   " >
      <div class="text-h6">Villa Leonora Resort</div>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('index')"
        ><v-icon class="pb-1">mdi-home</v-icon>Home</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('rooms')"
        ><v-icon class="pb-1">mdi-store</v-icon> Rooms</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('pools')"
        ><v-icon class="pb-1">mdi-information</v-icon> Pools</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('events')"
        ><v-icon class="pb-1">mdi-account</v-icon>Events</v-toolbar-title
      >
      <div></div>
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('gallery')"
      >
        <v-icon class="pb-1">mdi-login</v-icon>Gallery</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('contacts')"
        ><v-icon class="pb-1">mdi-phone</v-icon> Contact us</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('book')"
        ><v-icon class="pb-1">mdi-plus</v-icon> Book</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('reference_code')"
        ><v-icon class="pb-1">mdi-plus</v-icon> Status</v-toolbar-title
      >
    </v-app-bar>
    <v-app-bar color="white" :clipped-left="clipped" fixed app elevation="1" v-else >
    <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pt-5">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <div class="logout" align="center">
        <v-divider class="pb-2" />
        <div class="white--text" @click="isViewLogout = true">Logout</div>
      </div>
      <v-list nav dense>
        <v-list-item-group active-class="primary" color="white">
          <v-list-item
            :to="items[index].to"
            v-for="(key, index) in items"
            :key="index"
          >
            <v-icon class="pr-2">{{ items[index].icon }}</v-icon>
            <v-list-item-title>{{ items[index].title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
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
          icon: "mdi-apps",
          title: "Book",
          to: "/admin/book",
        },
        {
          icon: "mdi-calendar-multiple",
          title: "Pools",
          to: "/admin/pools",
        },
        {
          icon: "mdi-bullhorn",
          title: "Rooms",
          to: "/admin/rooms",
        },
        {
          icon: "mdi-bullhorn",
          title: "Events",
          to: "/admin/events",
        },
        {
          icon: "mdi-account-group",
          title: "Gallery",
          to: "/admin/gallery",
        },
        {
          icon: "mdi-logout",
          title: "Logout",
          to: "/admin/gallery",
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
    loadData(){
    
      this.isAdmin=this.$route.name
    },
    route(name) {
      if (name == "index") {
        this.$router.push("/");
        return;
      }
      window.location.href = name;
    },
  },
};
</script>
