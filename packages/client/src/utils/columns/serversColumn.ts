import type { DataTableColumn } from 'naive-ui';
import TableCellServers from '~/components/Table/TableCellServers.vue';

export const serversColumn: DataTableColumn = {
  key: 'servers',
  title: 'Servers',
  render(row: any) {
    return h(TableCellServers, {
      servers: row.servers,
    });
  },
};
