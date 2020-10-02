<template>
  <v-container class="fill-height">
    <v-btn @click="getCurrentPosition">Get position</v-btn>
    gps: {{ position }}
  </v-container>
</template>

<script>
import { Plugins } from "@capacitor/core";

const { Geolocation, Modals } = Plugins;

export default {
  name: "Location",
  data: () => ({
    position: null
  }),
  methods: {
    async getCurrentPosition() {
      try {
        const position = await Geolocation.getCurrentPosition();
        this.position = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        console.dir(position);
      } catch (e) {
        Modals.alert({
          title: "Ops!",
          message: "Location unavailable.",
          buttonTitle: ":'("
        });
      }
    }
    // watchPosition() {
    //   const wait = Geolocation.watchPosition({}, (position, err) => {
    //   })
    // }
  }
};
</script>

<style scoped></style>
