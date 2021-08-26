import type { DataTableColumn } from 'naive-ui';
import { isBefore, parseJSON } from 'date-fns';
import TableCellCreated from '~/components/Table/TableCellCreated.vue';

export const createdColumn: DataTableColumn = {
  key: 'created',
  title: 'Created',
  render(row: any) {
    return h(TableCellCreated, {
      date: row.createdOn,
    });
  },
  sorter(rowA: any, rowB: any) {
    return isBefore(parseJSON(rowA.createdOn), parseJSON(rowB.createdOn)) ? -1 : 1;
  },
};
