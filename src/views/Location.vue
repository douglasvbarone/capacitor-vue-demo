<template>
  <v-container class="fill-height pa-0" fluid>
    <v-row v-if="!position">
      <v-col :cols="12" class="text-center">
        <v-icon size="96pt" color="secondary">mdi-map-marker</v-icon>
      </v-col>
    </v-row>
    <v-row no-gutters v-if="!position">
      <v-col class="text-center fill-height">
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
      </v-col>
    </v-row>
    <div id="map" v-if="position" style="height: 100%; width: 100%">
      <LMap
        :center="position"
        :zoom="15"
        :style="{
          width: '100%',
          height: '100%',
          zIndex: 1,
          display: 'block'
        }"
      >
        <LTileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LMarker :latLng="position">
          <LPopup> You are here </LPopup>
        </LMarker>
      </LMap>
    </div>
  </v-container>
</template>

<script>
import { Plugins } from '@capacitor/core'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'

import 'leaflet/dist/leaflet.css'

import { Icon } from 'leaflet'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const { Geolocation, Modals } = Plugins

export default {
  name: 'Location',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data: () => ({
    position: null,
    loading: false
  }),
  methods: {
    async getCurrentPosition() {
      try {
        this.loading = true
        const position = await Geolocation.getCurrentPosition()
        this.position = [position.coords.latitude, position.coords.longitude]
      } catch (e) {
        await Modals.alert({
          title: 'Ops!',
          message: 'Location unavailable.',
          buttonTitle: 'OK'
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped></style>
