import { DocumentTextIcon, ClockIcon, PhoneIcon, CalendarIcon, GlobeAltIcon, ChipIcon, CogIcon } from '@heroicons/vue/outline';
import { ref, h } from 'vue';
import { NIcon } from 'naive-ui';
import { sortBy, uniq } from 'lodash-es';

const renderIcon = (icon: any) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};

interface INav {
  label: string;
  key: string;
  to?: any;
  category?: string;
  icon?: any;
  children?: INav[];
}

const baseNav: INav[] = [
  { label: 'Calendar', key: 'calendar', to: { name: 'calendar' }, icon: CalendarIcon },
  { label: 'Tickets', key: 'tickets', to: { name: 'tickets' }, icon: DocumentTextIcon },
  { label: 'Contacts', key: 'contacts', to: { name: 'contacts' }, icon: PhoneIcon },
  { label: 'BRDs', key: 'brds', to: { name: 'brds' }, icon: DocumentTextIcon },
  { label: 'RFCs', key: 'rfcs', to: { name: 'rfcs' }, icon: ClockIcon },
  { label: 'Applications', key: 'applications', to: { name: 'applications' }, icon: GlobeAltIcon },
  { label: 'Servers', key: 'servers', to: { name: 'servers' }, icon: ChipIcon },
  { label: 'FQDN', key: 'fqdn', category: 'settings', to: { name: 'fqdn' } },
  { label: 'Operating Systems', key: 'operatingSystems', category: 'settings', to: { name: 'operatingSystems' } },
  { label: 'Server Types', key: 'serverTypes', category: 'settings', to: { name: 'serverTypes' } },
  { label: 'Server Locations', key: 'serverLocations', category: 'settings', to: { name: 'serverLocations' } },
  { label: 'Physical Servers', key: 'physicalServers', category: 'settings', to: { name: 'physicalServers' } },
  { label: 'Contact Groups', key: 'contactGroups', category: 'settings', to: { name: 'contactGroups' } },
  { label: 'SSL Certificates', key: 'sslCertificates', category: 'settings', to: { name: 'sslCertificates' } },
  { label: 'Networks', key: 'networks', category: 'settings', to: { name: 'networks' } },
  { label: 'Environments', key: 'environments', category: 'settings', to: { name: 'environments' } },
  { label: 'Zones', key: 'zones', category: 'settings', to: { name: 'zones' } },
];

const groups = [{ label: 'Settings', key: 'settings', icon: 'CogIcon' }];

baseNav.forEach((n) => n.icon && (n.icon = renderIcon(n.icon)));

export const navigation = sortBy(
  baseNav.filter((n) => !n.category),
  'label'
);
groups.forEach((group) => {
  const groupItems = sortBy(
    baseNav.filter((n) => n.category === group.key),
    'label'
  );
  navigation.push({
    label: group.label,
    key: group.label,
    children: groupItems,
  });
});
