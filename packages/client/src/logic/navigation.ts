import { DocumentTextIcon, ClockIcon, HomeIcon, PhoneIcon, CalendarIcon, GlobeAltIcon, ChipIcon, CogIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';

export const navigation = ref([
  { name: 'Dashboard', to: { name: 'home' }, icon: HomeIcon },
  { name: 'Calendar', to: { name: 'calendar' }, icon: CalendarIcon },
  { name: 'Tickets', to: { name: 'tickets' }, icon: DocumentTextIcon },
  { name: 'Contacts', to: { name: 'contacts' }, icon: PhoneIcon },
  { name: 'BRDs', to: { name: 'brds' }, icon: DocumentTextIcon },
  { name: 'RFCs', to: { name: 'rfcs' }, icon: ClockIcon },
  { name: 'Applications', to: { name: 'applications' }, icon: GlobeAltIcon },
  { name: 'Servers', to: { name: 'servers' }, icon: ChipIcon },
  { name: 'FQDN', category: 'settings', to: { name: 'fqdn' }, icon: CogIcon },
  { name: 'Operating Systems', category: 'settings', to: { name: 'operatingSystems' }, icon: CogIcon },
  { name: 'Server Types', category: 'settings', to: { name: 'serverTypes' }, icon: CogIcon },
  { name: 'Server Locations', category: 'settings', to: { name: 'serverLocations' }, icon: CogIcon },
  { name: 'Physical Servers', category: 'settings', to: { name: 'physicalServers' }, icon: CogIcon },
  { name: 'Contact Groups', category: 'settings', to: { name: 'contactGroups' }, icon: CogIcon },
  { name: 'SSL Certificates', category: 'settings', to: { name: 'sslCertificates' }, icon: CogIcon },
  { name: 'Networks', category: 'settings', to: { name: 'networks' }, icon: CogIcon },
  { name: 'Environments', category: 'settings', to: { name: 'environments' }, icon: CogIcon },
  { name: 'Zones', category: 'settings', to: { name: 'zones' }, icon: CogIcon },
]);
