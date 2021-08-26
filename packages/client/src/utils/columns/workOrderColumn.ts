import type { DataTableColumn } from 'naive-ui';
import TableCellWorkOrder from '~/components/Table/TableCellWorkOrder.vue';

export const workOrderColumn: DataTableColumn = {
  key: 'workOrder',
  title: 'Work Order',
  render(row: any) {
    return h(TableCellWorkOrder, {
      workOrder: row,
    });
  },
};
