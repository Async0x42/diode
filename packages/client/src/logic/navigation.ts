import { DocumentTextIcon, ClockIcon, HomeIcon, PhoneIcon, CalendarIcon, GlobeAltIcon, ChipIcon, CogIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';

export const navigation = ref([
  { name: 'Dashboard', to: { name: 'home' }, icon: HomeIcon },
  { name: 'Calendar', to: { name: 'calendar' }, icon: CalendarIcon },
  { name: 'Contacts', to: { name: 'contacts' }, icon: PhoneIcon },
  { name: 'BRDs', to: { name: 'brds' }, icon: DocumentTextIcon },
  { name: 'RFCs', to: { name: 'rfcs' }, icon: ClockIcon },
  { name: 'Applications', to: { name: 'applications' }, icon: GlobeAltIcon },
  { name: 'Servers', to: { name: 'servers' }, icon: ChipIcon },
  { name: 'FQDN', to: { name: 'fqdn' }, icon: CogIcon },
  { name: 'Operating Systems', to: { name: 'operatingSystems' }, icon: CogIcon },
  { name: 'Server Types', to: { name: 'serverTypes' }, icon: CogIcon },
  { name: 'Server Locations', to: { name: 'serverLocations' }, icon: CogIcon },
  { name: 'Physical Servers', to: { name: 'physicalServers' }, icon: CogIcon },
  { name: 'Contact Groups', to: { name: 'contactGroups' }, icon: CogIcon },
]);
