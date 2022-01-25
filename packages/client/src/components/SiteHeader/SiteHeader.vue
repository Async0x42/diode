<script setup lang="ts">
import { navigation } from '~/composables';

const route = useRoute();
const router = useRouter();
const activeRouteNameOrPath = computed(() => (route.name?.valueOf() as string) || route.path);

const handleMenuUpdateValue = (key: any) => router.push({ name: key });
import { isMobile } from '~/composables';
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
  'workOrders',
  'zones',
  'tickets',
  'dependencies',
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
  'workOrder-view',
  'zone-view',
  'ticket-view',
  'dependency-view',
];

const style = computed(() => {
  return isMobile.value
    ? {
        '--side-padding': '4px',
        'grid-template-columns': 'auto 1fr auto',
      }
    : {
        '--side-padding': '8px',
        'grid-template-columns': 'calc(272px - var(--side-padding)) 1fr auto',
      };
});
</script>

<template>
  <n-layout-header bordered class="nav" :style="style">
    <div class="cursor-pointer grid grid-cols-4 group" @click="$router.push({ name: 'home' })">
      <div class="flex flex-wrap row-span-2 content-center">
        <n-icon class="mx-auto group-hover:text-yellow-300" size="35"><heroicons-solid-light-bulb /></n-icon>
      </div>
      <div class="col-span-3">
        <div>
          <n-text tag="div" class="font-bold group-hover:text-teal-300" :depth="1">DIODE</n-text>
          <n-text tag="div" class="text-sm group-hover:text-teal-500" :depth="3">keeping the lights on</n-text>
        </div>
      </div>
    </div>
    <div>
      <n-menu :value="activeRouteNameOrPath" mode="horizontal" :options="navigation" @update:value="handleMenuUpdateValue" />
    </div>
    <div style="display: flex; align-items: center">
      <SiteHeaderSearch v-if="$route.name != null && routesForSearch.includes($route.name.toString())" :key="$route.path" class="mx-6 w-full" />
    
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
  </n-layout-header>
</template>

<style scoped>
.nav {
  display: grid;
  grid-template-rows: calc(var(--header-height) - 1px);
  align-items: center;
  padding: 0 var(--side-padding);
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

.n-menu.n-menu--horizontal .n-menu-item-content {
  padding: 0 10px;
}
</style>
