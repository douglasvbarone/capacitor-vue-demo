<template>
  <v-container v-if="info">
    <v-row>
      <v-col v-for="(type, key) in info" :key="key">
        <v-list two-line>
          <v-subheader>
            {{ key }}
          </v-subheader>
          <v-list-item v-for="(item, key) in type" :key="key">
            <v-list-item-content>
              <v-list-item-title>{{
                item ? item : "Not applicable"
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ key }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

export default {
  name: "Device",
  data: () => ({
    info: null
  }),

  methods: {
    async getDeviceInfo() {
      this.info = {
        device: await Device.getInfo(),
        battery: await Device.getBatteryInfo(),
        langCode: await Device.getLanguageCode()
      };
    }
  },
  mounted() {
    this.getDeviceInfo();
  }
};
</script>

<style scoped></style>
