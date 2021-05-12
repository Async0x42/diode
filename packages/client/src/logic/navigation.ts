import { ArchiveIcon, ClockIcon, HomeIcon, UserCircleIcon as UserCircleIconOutline, ViewListIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';

export const navigation = ref([
  { name: 'All Issues', href: '#', icon: HomeIcon, current: true },
  { name: 'My Issues', href: '#', icon: ViewListIcon, current: false },
  { name: 'Assigned', href: '#', icon: UserCircleIconOutline, current: false },
  { name: 'Closed', href: '#', icon: ArchiveIcon, current: false },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]);
