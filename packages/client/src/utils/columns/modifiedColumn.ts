import type { DataTableColumn } from 'naive-ui';
import TableCellModified from '~/components/Table/TableCellModified.vue';

export const modifiedColumn: DataTableColumn = {
  key: 'modified',
  title: 'Modified',
  render(row: any) {
    return h(TableCellModified, {
      date: row.modifiedOn,
    });
  },
};
