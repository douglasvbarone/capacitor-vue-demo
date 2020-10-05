<template>
  <v-container class="fill-height">
    <v-row v-if="!imageSrc" class="align-content-center">
      <v-col>
        <v-btn x-large @click="takePicture(true)" block rounded color="primary">
          <v-icon left>mdi-camera</v-icon>
          Take a pic
        </v-btn>
      </v-col>
      <v-col>
        <v-btn x-large @click="takePicture(false)" block outlined rounded>
          <v-icon left>mdi-image</v-icon>
          Select from gallery
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-img :src="imageSrc" width="100%" contain />
        <v-btn class="mt-4" @click="imageSrc = null" block color="primary" text>
          <v-icon>mdi-trash-can</v-icon>
          Delete
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Plugins, CameraResultType } from "@capacitor/core";

const { Camera } = Plugins;

export default {
  name: "Camera",
  data: () => ({
    imageSrc: null
  }),
  methods: {
    async takePicture(cam) {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Uri,
        source: cam ? "CAMERA" : "PHOTOS"
      });

      this.imageSrc = image.webPath;
    }
  }
};
</script>

<style scoped></style>
