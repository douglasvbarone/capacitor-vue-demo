<template>
  <v-app id="demo">
    <v-navigation-drawer v-model="drawer" app>
      <v-img src="./assets/capacitor.png" class="ma-4" contain />
      <v-list dense rounded>
        <v-list-item
          color="primary"
          v-for="item in nav"
          :key="item.title"
          :to="item.to"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat dense color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer />
      <v-btn
        color="accent"
        icon
        href="https://github.com/douglasvbarone/capacitor-vue-demo"
        ><v-icon>mdi-git</v-icon></v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view @openDrawer="drawer = true" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    nav: [
      { title: "Home", icon: "mdi-view-dashboard", to: "/" },
      { title: "Camera", icon: "mdi-camera", to: "/camera" },
      { title: "Location", icon: "mdi-map-marker", to: "/location" },
      {
        title: "Local Notifications",
        icon: "mdi-bell",
        to: "/local-notifications"
      },
      { title: "Modals", icon: "mdi-window-restore", to: "/modals" },
      { title: "Device", icon: "mdi-developer-board", to: "/device" }
    ]
  })
};
</script>
