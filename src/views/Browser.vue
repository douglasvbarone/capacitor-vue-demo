<template>
  <v-container class="fill-height">
    <v-row>
      <v-col :cols="12" class="text-center">
        <v-icon size="96pt" color="secondary">mdi-google-chrome</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn @click="openBrowser" rounded color="primary" x-large
          >Open Browser</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Plugins } from '@capacitor/core'
const { Browser } = Plugins
export default {
  name: 'Browser',
  methods: {
    async openBrowser() {
      await Browser.open({
        url: 'https://github.com/douglasvbarone/capacitor-vue-demo'
      })
    }
  }
}
</script>

<style scoped></style>
