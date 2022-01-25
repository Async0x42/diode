import type { DataTableColumn } from 'naive-ui';
import TableCellDetails from '~/components/Table/TableCellDetails.vue';

export const detailsColumn: DataTableColumn = {
  key: 'details',
  title: 'Details',
  render(row: any) {
    return h(TableCellDetails, {
      details: row.details,
    });
  },
};