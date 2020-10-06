<template>
  <v-container class="fill-height">
    <v-row>
      <v-col :cols="12" class="text-center">
        <v-icon size="96pt" color="secondary">mdi-map-marker</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn
          v-if="!position"
          :loading="loading"
          @click="getCurrentPosition"
          color="primary"
          x-large
          rounded
        >
          <v-icon left>mdi-map-marker</v-icon>
          Get position
        </v-btn>
        <div v-if="position">
          Latitude: {{ position.latitude }} <br />
          Longitude: {{ position.longitude }}
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
    position: null,
    loading: false,
  }),
  methods: {
    async getCurrentPosition() {
      try {
        this.loading = true;
        const position = await Geolocation.getCurrentPosition();
        this.position = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        console.dir(position);
      } catch (e) {
        await Modals.alert({
          title: "Ops!",
          message: "Location unavailable.",
          buttonTitle: "OK",
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
