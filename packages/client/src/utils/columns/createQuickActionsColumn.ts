import type { DataTableColumn } from 'naive-ui';
import TableCellQuickActions from '~/components/Table/TableCellQuickActions.vue';

export const createQuickActionsColumn = (editEvent?: any): DataTableColumn => ({
  key: 'quickActions',
  title: 'Actions',
  render(row: any) {
    return h(TableCellQuickActions, {
      email: row.email,
      phone: row.phone,
      browse: row.browse,
      onEdit: () => editEvent && editEvent(row),
    });
  },
});
