<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { configModule } from '@/store/configModule';

@Component
export default class DefaultLayout extends Vue {
  configModule = configModule;
}
</script>

<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="configModule.isSidebarOpen = !configModule.isSidebarOpen"></v-app-bar-nav-icon>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="mr-2 shrink"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="mt-1 shrink hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>
