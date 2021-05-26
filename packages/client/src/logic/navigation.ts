import { DocumentTextIcon, ClockIcon, HomeIcon, PhoneIcon, CalendarIcon, GlobeAltIcon, CodeIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';

export const navigation = ref([
  { name: 'Dashboard', to: { name: 'home' }, icon: HomeIcon },
  { name: 'Calendar', to: { name: 'calendar' }, icon: CalendarIcon },
  { name: 'Contacts', to: { name: 'contacts' }, icon: PhoneIcon },
  { name: 'BRDs', to: { name: 'brds' }, icon: DocumentTextIcon },
  { name: 'RFCs', to: { name: 'rfcs' }, icon: ClockIcon },
  { name: 'DNS', to: { name: 'dns' }, icon: GlobeAltIcon },
  { name: 'Applications', to: { name: 'applications' }, icon: CodeIcon },
]);
