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
      <v-scroll-x-transition mode="out-in">
        <router-view @open-drawer="drawer = true" />
      </v-scroll-x-transition>
    </v-main>
  </v-app>
</template>

<script>
import { defineCustomElements } from '@ionic/pwa-elements/loader'

export default {
  name: 'App',
  mounted() {
    this.drawer = this.$vuetify.breakpoint.lgAndUp
    defineCustomElements(window)
  },
  data: () => ({
    drawer: false,
    nav: [
      { title: 'Home', icon: 'mdi-view-dashboard-outline', to: '/' },
      { title: 'Camera', icon: 'mdi-camera-outline', to: '/camera' },
      { title: 'Location', icon: 'mdi-map-marker-outline', to: '/location' },
      {
        title: 'Local Notifications',
        icon: 'mdi-bell-outline',
        to: '/local-notifications'
      },
      { title: 'Modals', icon: 'mdi-window-restore', to: '/modals' },
      { title: 'Browser', icon: 'mdi-google-chrome', to: '/browser' },
      { title: 'Clipboard', icon: 'mdi-clipboard-outline', to: '/clipboard' },
      { title: 'Device', icon: 'mdi-developer-board', to: '/device' }
    ]
  })
}
</script>
