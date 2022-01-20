<script setup lang="ts">
import { format } from 'date-fns/esm';
import { PrimeIcons } from 'primevue/api';
import { useCurrentDateTime, isTerminalOpen } from '~/composables';

const menubarItems = ref([
  {
    label: 'DIODE',
    class: 'menubar-root',
    to: '/'
  },
  {
    label: 'Work',
    items: [
      {
        label: 'Browse',
        icon: PrimeIcons.BOOK,
        to: '/workOrders',
      },
      {
        label: 'New',
        icon: PrimeIcons.PLUS,
        to: '/workOrders/create'
      },
      {
        separator: true,
      },
      {
        label: 'Tickets',
        icon: PrimeIcons.TRASH,
        items: [
          {
            label: 'New',
            icon: PrimeIcons.PLUS,
            to: '/tickets/create'
          },
        ],
      },
    ],
  },
  {
    label: 'Applications',
    items: [
      {
        label: 'Browse',
        icon: PrimeIcons.BOOK,
        to: '/applications',
      },
      {
        label: 'Environments',
        icon: PrimeIcons.CALENDAR_TIMES,
        to: '/environments'
      },
    ],
  },
  {
    label: 'VM Servers',
    items: [
      {
        label: 'Browse',
        icon: PrimeIcons.BOOK,
        to: '/servers',
      },
      {
        label: 'Physical Servers',
        icon: PrimeIcons.PENCIL,
        to: '/physicalServers'
      },
      {
        label: 'Locations',
        icon: PrimeIcons.CALENDAR_TIMES,
        to: '/serverLocations'
      },
      {
        label: 'Types',
        icon: PrimeIcons.CALENDAR_TIMES,
        to: '/serverTypes'
      },
      {
        label: 'Dependencies',
        icon: PrimeIcons.PENCIL,
        to: '/dependencies'
      },
      {
        label: 'Zones',
        icon: PrimeIcons.CALENDAR_TIMES,
        to: '/zones'
      },
      {
        label: 'Operating Systems',
        icon: PrimeIcons.CALENDAR_TIMES,
        to: '/operatingSystems'
      },
    ],
  },
  {
    label: 'Contacts',
    items: [
      {
        label: 'Browse',
        icon: PrimeIcons.BOOK,
        to: '/contacts',
      },
      {
        label: 'Contact Groups',
        to: '/contactGroups'
      },
    ],
  },
  {
    label: 'BRDs',
    to: '/brds'
  },
  {
    label: 'RFCs',
    to: '/rfcs'
  },
  {
    label: 'FQDN',
    to: '/fqdn'
  },
  {
    label: 'SSL',
    to: '/sslcertificates'
  },
]);

const openUrl = (url: string) => {
  window.open(url, '_blank');
};

const { currentDateTime } = useCurrentDateTime();
const currentClock = computed(() => {
  return format(currentDateTime.value, 'ccc h:mm:ss aa');
});
</script>

<template>
  <div class="default-layout">
    <Menubar :model="menubarItems">
      <template #start>
        <i class="pi pi-sun"></i>
      </template>
      <template #end>
        <InputText
          class="rounded-lg p-1"
          placeholder="Search"
          type="text"
          style="font-weight: normal; transition: none 0s ease 0s; background-position: 0% center"
        />
        <a v-tooltip.bottom="'Terminal'" href="#" @click="isTerminalOpen = true">
          <i class="pi pi-desktop" />
        </a>
        <a v-tooltip.bottom="'Google Meet'" href="#" @click="openUrl('https://meet.google.com/')">
          <i class="pi pi-video" />
        </a>
        <span>{{ currentClock }}</span>
      </template>
    </Menubar>
    <div class="dock-window">
      <router-view />
      <TerminalDialog />
    </div>
  </div>
</template>

<style lang="scss">
// TODO: this needs to be scoped and use v deep like in the example, but it's not working
.default-layout .dock-window {
  width: 100%;
  top: 42px;
  height: calc(100vh - 42px);
  position: relative;
  // background-image: url('https://primefaces.org/primevue/showcase/img/window.6b46439b.jpg');
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  z-index: 1;
}

.default-layout .p-menubar {
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 0;
  border-width: 0 0 1px 0;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.default-layout .p-menubar .menubar-root {
  font-weight: bold;
  padding: 0 1rem;
}

.default-layout .p-menubar .p-menuitem-link {
  padding: 0.5rem 0.75rem;
}

.default-layout .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
  padding: 0.5rem 0.75rem;
}

.default-layout .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
  display: none;
}

.default-layout .p-menubar .p-menubar-end span,
.default-layout .p-menubar .p-menubar-end i {
  padding: 0 0.75rem;
}

.default-layout .p-menubar .p-submenu-list {
  z-index: 2;
}
</style>
