import { h } from 'vue';
import { NIcon } from 'naive-ui';
import { sortBy } from 'lodash-es';
import type { MenuMixedOption } from 'naive-ui/lib/menu/src/interface';

export const navigation: MenuMixedOption[] = [
  { label: 'Work Orders', key: 'workOrders', to: { name: 'workOrders' } },
  { label: 'Tickets', key: 'tickets', to: { name: 'tickets' } },
  // { label: 'Calendar', key: 'calendar', to: { name: 'calendar' } },
  { label: 'Applications', key: 'applications', to: { name: 'applications' } },
  { label: 'Servers', key: 'servers', to: { name: 'servers' } },
  { label: 'Contacts', key: 'contacts', to: { name: 'contacts' } },
  { label: 'Contact Groups', key: 'contactGroups', to: { name: 'contactGroups' } },
  { label: 'BRDs', key: 'brds', to: { name: 'brds' } },
  { label: 'RFCs', key: 'rfcs', to: { name: 'rfcs' } },
  {
    label: 'Settings',
    key: 'settings',
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

const renderIcon = (icon: any) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};

const renderItemIcons = (navItems: MenuMixedOption[]) => {
  navItems.forEach((n) => {
    n.icon && (n.icon = renderIcon(n.icon));
      if (n.children && (n.children as Array<MenuMixedOption>).length > 0) {
        renderItemIcons((n.children as Array<MenuMixedOption>));
      }
  });
};

renderItemIcons(navigation);
