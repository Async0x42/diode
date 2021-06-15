import { DocumentTextIcon, ClockIcon, PhoneIcon, GlobeAltIcon, ChipIcon, CogIcon } from '@heroicons/vue/outline';
import { h } from 'vue';
import { NIcon } from 'naive-ui';
import { sortBy } from 'lodash-es';

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

export const navigation: INav[] = [
  { label: 'Tickets', key: 'tickets', to: { name: 'tickets' }, icon: DocumentTextIcon },
  // { label: 'Calendar', key: 'calendar', to: { name: 'calendar' }, icon: CalendarIcon },
  { label: 'Applications', key: 'applications', to: { name: 'applications' }, icon: GlobeAltIcon },
  { label: 'Servers', key: 'servers', to: { name: 'servers' }, icon: ChipIcon },
  { label: 'Contacts', key: 'contacts', to: { name: 'contacts' }, icon: PhoneIcon },
  { label: 'BRDs', key: 'brds', to: { name: 'brds' }, icon: DocumentTextIcon },
  { label: 'RFCs', key: 'rfcs', to: { name: 'rfcs' }, icon: ClockIcon },
  {
    label: 'Settings',
    key: 'settings',
    icon: CogIcon,
    children: sortBy(
      [
        { label: 'FQDN', key: 'fqdn', to: { name: 'fqdn' } },
        { label: 'Operating Systems', key: 'operatingSystems', to: { name: 'operatingSystems' } },
        { label: 'Server Types', key: 'serverTypes', to: { name: 'serverTypes' } },
        { label: 'Server Locations', key: 'serverLocations', to: { name: 'serverLocations' } },
        { label: 'Physical Servers', key: 'physicalServers', to: { name: 'physicalServers' } },
        { label: 'Contact Groups', key: 'contactGroups', to: { name: 'contactGroups' } },
        { label: 'SSL Certificates', key: 'sslCertificates', to: { name: 'sslCertificates' } },
        { label: 'Networks', key: 'networks', to: { name: 'networks' } },
        { label: 'Environments', key: 'environments', to: { name: 'environments' } },
        { label: 'Zones', key: 'zones', to: { name: 'zones' } },
      ],
      'label'
    ),
  },
];

const renderItemIcons = (navItems: INav[]) => {
  navItems.forEach((n) => {
    n.icon && (n.icon = renderIcon(n.icon));
    if (n.children && n.children.length > 0) {
      renderItemIcons(n.children);
    }
  });
};

renderItemIcons(navigation);
