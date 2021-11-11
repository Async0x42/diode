import { h } from 'vue';
import { NIcon } from 'naive-ui';
import { sortBy } from 'lodash-es';
import Clock from '~icons/heroicons-outline/clock';
import Calendar from '~icons/heroicons-outline/calendar';
import DocumentText from '~icons/heroicons-outline/document-text';
import Phone from '~icons/heroicons-outline/phone';
import GlobeAlt from '~icons/heroicons-outline/globe-alt';
import Chip from '~icons/heroicons-outline/chip';
import Cog from '~icons/heroicons-outline/cog';
import Ticket from '~icons/heroicons-outline/ticket';

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
  { label: 'Work Orders', key: 'workOrders', to: { name: 'workOrders' }, icon: DocumentText },
  { label: 'Tickets', key: 'tickets', to: { name: 'tickets' }, icon: Ticket },
  { label: 'Calendar', key: 'calendar', to: { name: 'calendar' }, icon: Calendar },
  { label: 'Applications', key: 'applications', to: { name: 'applications' }, icon: GlobeAlt },
  { label: 'Servers', key: 'servers', to: { name: 'servers' }, icon: Chip },
  { label: 'Contacts', key: 'contacts', to: { name: 'contacts' }, icon: Phone },
  { label: 'Contact Groups', key: 'contactGroups', to: { name: 'contactGroups' }, icon: Phone },
  { label: 'BRDs', key: 'brds', to: { name: 'brds' }, icon: DocumentText },
  { label: 'RFCs', key: 'rfcs', to: { name: 'rfcs' }, icon: Clock },
  {
    label: 'Settings',
    key: 'settings',
    icon: Cog,
    children: sortBy(
      [
        { label: 'FQDN', key: 'fqdn', to: { name: 'fqdn' } },
        { label: 'Operating Systems', key: 'operatingSystems', to: { name: 'operatingSystems' } },
        { label: 'Dependencies', key: 'dependencies', to: { name: 'dependencies' } },
        { label: 'Server Types', key: 'serverTypes', to: { name: 'serverTypes' } },
        { label: 'Server Locations', key: 'serverLocations', to: { name: 'serverLocations' } },
        { label: 'Physical Servers', key: 'physicalServers', to: { name: 'physicalServers' } },
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