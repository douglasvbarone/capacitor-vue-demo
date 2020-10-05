<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="text-center">
        <v-btn
          v-if="!position"
          @click="getCurrentPosition"
          color="primary"
          x-large
          rounded
        >
          <v-icon left>mdi-map-marker</v-icon>
          Get position
        </v-btn>
        <div v-if="position">
          Latitude: {{ position.latitude }} Longitude: {{ position.longitude }}
        </div>
      </v-col>
    </v-row>
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
          buttonTitle: "OK"
        });
      }
    }
  }
};
</script>

<style scoped></style>
