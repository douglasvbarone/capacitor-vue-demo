<template>
  <v-app id="demo">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense rounded>
        <v-list-item class="mb-4">
          <v-list-item-content>
            <v-list-item-title class="title">
              Capacitor & Vue
            </v-list-item-title>
            <v-list-item-subtitle>Demonstration</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

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
      <v-btn color="accent" icon href="https://github.com/douglasvbarone/"
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
    drawer: true,
    nav: [
      { title: "Home", icon: "mdi-view-dashboard", to: "/" },
      { title: "Camera", icon: "mdi-camera", to: "/camera" },
      { title: "Location", icon: "mdi-map-marker", to: "/location" },
      { title: "Home3", icon: "mdi-view-dashboard", to: "/home3" }
    ]
  })
};
</script>
