<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { isMobile } from '~/logic';
const routesForCreate = [
  'calendar',
  'brds',
  'contacts',
  'rfcs',
  'fqdn',
  'applications',
  'servers',
  'operatingSystems',
  'serverTypes',
  'serverLocations',
  'physicalServers',
  'contactGroups',
  'sslCertificates',
  'environments',
  'networks',
  'tickets',
  'zones',
];
const routesForSearch = [...routesForCreate];

const routesForEdit = [
  'calendar-item-view',
  'brd-view',
  'contact-view',
  'rfc-view',
  'fqdn-view',
  'application-view',
  'server-view',
  'operatingSystem-view',
  'serverType-view',
  'serverLocation-view',
  'physicalServer-view',
  'contactGroup-view',
  'sslCertificate-view',
  'environment-view',
  'network-view',
  'ticket-view',
  'zone-view',
];

const style = computed(() => {
  return isMobile.value
    ? {
        '--side-padding': '16px',
        'grid-template-columns': 'auto 1fr auto',
      }
    : {
        '--side-padding': '32px',
        'grid-template-columns': 'calc(272px - var(--side-padding)) 1fr auto',
      };
});
</script>

<template>
  <n-layout-header bordered class="nav" :style="style">
    <n-text tag="div" class="ui-logo" :depth="1" @click="$router.push({ name: 'home' })">
      <n-icon size="20" style="margin-left: 12px"><heroicons-solid-light-bulb /></n-icon>
      <span>DIODE</span>
    </n-text>
    <div style="display: flex; align-items: center">
      <SiteHeaderSearch
        v-if="$route.name != null && routesForSearch.includes($route.name.toString())"
        :key="$route.path"
        style="width: 216px; margin-left: 24px"
      />
    </div>
    <div class="nav-end">
      <router-link
        v-if="$route.name != null && routesForCreate.includes($route.name.toString())"
        v-slot="{ navigate }"
        :to="$route.path + '/create'"
        custom
      >
        <n-button @click="navigate"> Create </n-button>
      </router-link>
      <router-link
        v-if="$route.name != null && routesForEdit.includes($route.name.toString())"
        v-slot="{ navigate }"
        :to="$route.path.replace('/view', '/edit')"
        custom
      >
        <n-button @click="navigate"> Edit </n-button>
      </router-link>
    </div>
    <!--
    <div class="flex flex-1 px-4 justify-between">
      
      <div v-else class="flex flex-1"></div>

      <div class="flex ml-4 items-center lg:ml-6">
      </div>
    </div> -->
  </n-layout-header>
</template>

<style scoped>
.nav {
  display: grid;
  grid-template-rows: calc(var(--header-height) - 1px);
  align-items: center;
  padding: 0 var(--side-padding);
}
.ui-logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
}
.ui-logo > img {
  margin-right: 12px;
  height: 32px;
  width: 32px;
}
.nav-menu {
  padding-left: 36px;
}
.nav-picker {
  margin-right: 24px;
}
.nav-picker:last-child {
  margin-right: 0;
}
.nav-end {
  display: flex;
  align-items: center;
}
</style>

<style>
.nav-menu .n-menu-item {
  height: calc(var(--header-height) - 1px) !important;
}
</style>
