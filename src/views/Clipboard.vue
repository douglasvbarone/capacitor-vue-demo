<template>
  <v-container>
    <v-row>
      <v-col v-if="clipboard && clipboard.type.includes('image')">
        <v-img :src="clipboard.value" height="200" contain />
        Type: {{ clipboard.type }}
      </v-col>
      <v-col v-else-if="clipboard" class="text-center">
        Value: {{ clipboard.value }} <br />
        Type: {{ clipboard.type }}
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn @click="readClipboard" rounded color="success" x-large
          ><v-icon left>mdi-eye</v-icon>Read</v-btn
        >
        <span class="mx-2" />
        <v-btn @click="writeClipboard" rounded color="error" x-large
          ><v-icon left>mdi-pen</v-icon>Write</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Plugins } from '@capacitor/core'
const { Clipboard } = Plugins
export default {
  name: 'Clipboard',
  data: () => ({
    clipboard: ''
  }),
  methods: {
    async readClipboard() {
      this.clipboard = await Clipboard.read()
    },
    async writeClipboard() {
      await Clipboard.write({
        string: 'Test!'
      })
      await this.readClipboard()
    }
  }
}
</script>

<style scoped></style>
