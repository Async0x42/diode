import { DocumentTextIcon, ClockIcon, HomeIcon, PhoneIcon, CalendarIcon, GlobeAltIcon, ChipIcon, CogIcon } from '@heroicons/vue/outline';
import { ref, h } from 'vue';
import { NIcon } from 'naive-ui';

const renderIcon = (icon: any) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};

export const headerNavigation = ref([]);

export const navigation = ref([
  { label: 'Calendar', key: 'calendar', to: { name: 'calendar' }, icon: CalendarIcon },
  { label: 'Tickets', key: 'tickets', to: { name: 'tickets' }, icon: DocumentTextIcon },
  { label: 'Contacts', key: 'contacts', to: { name: 'contacts' }, icon: PhoneIcon },
  { label: 'BRDs', key: 'brds', to: { name: 'brds' }, icon: DocumentTextIcon },
  { label: 'RFCs', key: 'rfcs', to: { name: 'rfcs' }, icon: ClockIcon },
  { label: 'Applications', key: 'applications', to: { name: 'applications' }, icon: GlobeAltIcon },
  { label: 'Servers', key: 'servers', to: { name: 'servers' }, icon: ChipIcon },
  { label: 'FQDN', key: 'fqdn', category: 'settings', to: { name: 'fqdn' }, icon: CogIcon },
  { label: 'Operating Systems', key: 'operatingSystems', category: 'settings', to: { name: 'operatingSystems' }, icon: CogIcon },
  { label: 'Server Types', key: 'serverTypes', category: 'settings', to: { name: 'serverTypes' }, icon: CogIcon },
  { label: 'Server Locations', key: 'serverLocations', category: 'settings', to: { name: 'serverLocations' }, icon: CogIcon },
  { label: 'Physical Servers', key: 'physicalServers', category: 'settings', to: { name: 'physicalServers' }, icon: CogIcon },
  { label: 'Contact Groups', key: 'contactGroups', category: 'settings', to: { name: 'contactGroups' }, icon: CogIcon },
  { label: 'SSL Certificates', key: 'sslCertificates', category: 'settings', to: { name: 'sslCertificates' }, icon: CogIcon },
  { label: 'Networks', key: 'networks', category: 'settings', to: { name: 'networks' }, icon: CogIcon },
  { label: 'Environments', key: 'environments', category: 'settings', to: { name: 'environments' }, icon: CogIcon },
  { label: 'Zones', key: 'zones', category: 'settings', to: { name: 'zones' }, icon: CogIcon },
]);

headerNavigation.value.forEach((n) => n.icon && (n.icon = renderIcon(n.icon)));
navigation.value.forEach((n) => n.icon && (n.icon = renderIcon(n.icon)));
