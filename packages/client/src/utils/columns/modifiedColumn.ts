import type { DataTableColumn } from 'naive-ui';
import { isBefore, parseJSON } from 'date-fns';
import TableCellModified from '~/components/Table/TableCellModified.vue';

export const modifiedColumn: DataTableColumn = {
  key: 'modified',
  title: 'Modified',
  render(row: any) {
    return h(TableCellModified, {
      date: row.modifiedOn,
    });
  },
  sorter(rowA: any, rowB: any) {
    return isBefore(parseJSON(rowA.modifiedOn), parseJSON(rowB.modifiedOn)) ? -1 : 1;
  },
};
