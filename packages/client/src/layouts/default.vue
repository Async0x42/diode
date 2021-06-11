<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { configModule } from '@/store/configModule';

@Component
export default class DefaultLayout extends Vue {
  configModule = configModule;
}
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="configModule.isSidebarOpen" app>
      <!--  -->
    </v-navigation-drawer>

    <Header />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
