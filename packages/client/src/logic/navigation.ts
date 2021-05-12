import { DocumentTextIcon, ClockIcon, HomeIcon, PhoneIcon, CalendarIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';

export const navigation = ref([
  { name: 'Dashboard', to: { name: 'dashboard' }, icon: HomeIcon },
  { name: 'Calendar', to: { name: 'calendar' }, icon: CalendarIcon },
  { name: 'Contacts', to: { name: 'contacts' }, icon: PhoneIcon },
  { name: 'BRDs', to: { name: 'brds' }, icon: DocumentTextIcon },
  { name: 'RFCs', to: { name: 'rfcs' }, icon: ClockIcon },
]);
