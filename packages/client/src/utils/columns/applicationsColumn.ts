import type { DataTableColumn } from 'naive-ui';
import TableCellApplications from '~/components/Table/TableCellApplications.vue';

export const applicationsColumn: DataTableColumn = {
  key: 'applications',
  title: 'Applications',
  render(row: any) {
    return h(TableCellApplications, {
      useShortName: true,
      applications: row.applications,
    });
  },
};
