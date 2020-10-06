<template>
  <v-container class="fill-height">
    <v-row>
      <v-col :cols="12" class="text-center">
        <v-icon size="96pt" color="secondary">mdi-window-restore</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn x-large color="primary" @click="alertModal" rounded block>
          <v-icon left>mdi-alert</v-icon>
          Alert
        </v-btn>
      </v-col>
      <v-col>
        <v-btn x-large color="primary" @click="confirmModal" rounded block>
          <v-icon left>mdi-checkbox-marked</v-icon>
          Confirm
        </v-btn>
      </v-col>
      <v-col>
        <v-btn x-large color="primary" @click="promptModal" rounded block>
          <v-icon left>mdi-comment-question</v-icon>
          Prompt
        </v-btn>
      </v-col>
      <v-col>
        <v-btn x-large color="primary" @click="showActionsModal" rounded block>
          <v-icon left>mdi-dock-bottom</v-icon>
          Actions
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Plugins } from '@capacitor/core'
const { Modals } = Plugins

export default {
  name: 'Modals',

  methods: {
    async alertModal() {
      await Modals.alert({
        title: 'Alert title',
        message: 'Alert message.',
        buttonTitle: 'Button text'
      })
    },
    async confirmModal() {
      await Modals.confirm({
        title: 'Confirm title',
        message: 'Confirm message?',
        cancelButtonTitle: 'Cancel text',
        okButtonTitle: 'OK text'
      })
    },
    async promptModal() {
      await Modals.prompt({
        title: 'Prompt title',
        message: 'Prompt message:',
        cancelButtonTitle: 'Cancel text',
        okButtonTitle: 'OK text',
        inputPlaceholder: 'Placeholder'
      })
    },
    async showActionsModal() {
      await Modals.showActions({
        title: 'Actions title',
        message: 'Actions message.',
        options: [
          { title: 'Option 1' },
          { title: 'Option 2' },
          { title: 'Option 3' }
        ]
      })
    }
  }
}
</script>

<style scoped></style>
