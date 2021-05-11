import { computed } from 'vue';
import { useToggle } from '@vueuse/core';
import { sidebarOpen } from './store';

export const isSidebarOpen = computed({
  get() {
    return sidebarOpen.value;
  },
  set(v: boolean) {
    sidebarOpen.value = v;
  },
});

export const toggleSidebar = useToggle(isSidebarOpen);
