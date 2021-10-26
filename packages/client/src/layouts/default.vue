<script setup lang="ts">
import { format } from 'date-fns/esm';
import { PrimeIcons } from 'primevue/api';
import { useCurrentDateTime, isTerminalOpen } from '~/logic';

const menubarItems = ref([
  {
    label: 'DIODE',
    class: 'menubar-root',
  },
  {
    label: 'File',
    items: [
      {
        label: 'New',
        icon: PrimeIcons.PLUS,
        items: [
          {
            label: 'Bookmark',
            icon: PrimeIcons.BOOKMARK,
          },
          {
            label: 'Video',
            icon: PrimeIcons.VIDEO,
          },
        ],
      },
      {
        label: 'Delete',
        icon: PrimeIcons.TRASH,
      },
      {
        separator: true,
      },
      {
        label: 'Export',
        icon: PrimeIcons.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: 'Edit',
    items: [
      {
        label: 'Left',
        icon: PrimeIcons.ALIGN_LEFT,
      },
      {
        label: 'Right',
        icon: PrimeIcons.ALIGN_RIGHT,
      },
      {
        label: 'Center',
        icon: PrimeIcons.ALIGN_CENTER,
      },
      {
        label: 'Justify',
        icon: PrimeIcons.ALIGN_JUSTIFY,
      },
    ],
  },
  {
    label: 'Users',
    items: [
      {
        label: 'New',
        icon: PrimeIcons.USER_PLUS,
      },
      {
        label: 'Delete',
        icon: PrimeIcons.USER_MINUS,
      },
      {
        label: 'Search',
        icon: PrimeIcons.USERS,
        items: [
          {
            label: 'Filter',
            icon: PrimeIcons.FILTER,
            items: [
              {
                label: 'Print',
                icon: PrimeIcons.PRINT,
              },
            ],
          },
          {
            icon: PrimeIcons.BARS,
            label: 'List',
          },
        ],
      },
    ],
  },
  {
    label: 'Events',
    items: [
      {
        label: 'Edit',
        icon: PrimeIcons.PENCIL,
        items: [
          {
            label: 'Save',
            icon: PrimeIcons.CALENDAR_PLUS,
          },
          {
            label: 'Delete',
            icon: PrimeIcons.CALENDAR_MINUS,
          },
        ],
      },
      {
        label: 'Archive',
        icon: PrimeIcons.CALENDAR_TIMES,
        items: [
          {
            label: 'Remove',
            icon: PrimeIcons.CALENDAR_MINUS,
          },
        ],
      },
    ],
  },
  {
    label: 'Quit',
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
        <a v-ptooltip.bottom="'Terminal'" href="#" @click="isTerminalOpen = true">
          <i class="pi pi-desktop" />
        </a>
        <a v-ptooltip.bottom="'Google Meet'" href="#" @click="openUrl('https://meet.google.com/')">
          <i class="pi pi-video" />
        </a>
        <i class="pi pi-volume-up" />
        <span>{{ currentClock }}</span>
        <i class="pi pi-search" />
        <i class="pi pi-bars" />
      </template>
    </Menubar>
    <div class="dock-window">
      <router-view />
      <TerminalDialog />
    </div>
  </div>
</template>

<style lang="scss">
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
