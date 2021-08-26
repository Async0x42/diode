import type { DataTableColumn } from 'naive-ui';
import TableCellCreated from '~/components/Table/TableCellCreated.vue';

export const createdColumn: DataTableColumn = {
  key: 'created',
  title: 'Created',
  render(row: any) {
    return h(TableCellCreated, {
      date: row.createdOn,
    });
  },
};
