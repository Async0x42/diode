import { ref } from 'vue';
import { useToggle } from '@vueuse/core';

export const isSidebarOpen = ref(false);
export const toggleSidebar = useToggle(isSidebarOpen);
