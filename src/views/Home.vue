<template>
  <v-container class="fill-height">
    <v-card class="home ma-1 " flat>
      <div class="my-5 text-center display-1">
        Capacitor & Vue
      </div>

      <v-img src="../assets/logo.png" :height="150" contain />

      <v-card-text class="text-center">
        This is a simple demonstration of
        <v-btn
          style="text-transform: none"
          href="https://capacitorjs.com/"
          target="_blank"
          link
          rounded
          :elevation="0"
          color="primary"
          text
        >
          Capacitor JS
          <v-icon right>mdi-open-in-new</v-icon>
        </v-btn>
        using Vue.
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary my-5 pa-6" x-large :elevation="0" @click="show">
          Show-me
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  methods: {
    show() {
      this.$emit("openDrawer");
    }
  }
};
</script>
