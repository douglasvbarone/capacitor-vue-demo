<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="text-center">
        <v-icon left size="96pt" color="secondary">mdi-bell</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card max-width="480px" class="mx-auto">
          <v-card-title>
            <v-text-field label="Title" v-model="title" autofocus clearable />
          </v-card-title>
          <v-card-text>
            <v-text-field label="Body" v-model="body" clearable />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn x-large color="primary" @click="notify">
              <v-icon left>mdi-bell</v-icon>
              Send notification
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Plugins } from "@capacitor/core";
const { LocalNotifications } = Plugins;

export default {
  name: "LocalNotifications",
  data: () => ({
    title: "",
    body: "",
  }),
  mounted() {
    LocalNotifications.requestPermission();
  },
  methods: {
    async notify() {
      await LocalNotifications.schedule({
        notifications: [
          {
            title: this.title || "Hey!",
            body: this.body || "This is a notification",
            id: 1,
            //schedule: { at: new Date(Date.now() + 1000) },
            sound: null,
            attachments: null,
            actionTypeId: "",
            extra: null,
          },
        ],
      });
      this.title = this.body = "";
    },
  },
};
</script>

<style scoped></style>
