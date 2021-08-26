<script setup lang="ts">
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { groupBy, reverse } from 'lodash-es';
import type { DataTableColumn } from 'naive-ui';
import { useRouteSearchWithData } from '~/logic';
import {
  applicationsColumn,
  createQuickActionsColumn,
  createdColumn,
  detailsColumn,
  modifiedColumn,
  serversColumn,
  sortByPriority,
  workOrderColumn,
} from '~/utils';

const router = useRouter();

const props = defineProps({
  workOrders: { type: Array as PropType<IWorkOrder[]>, required: true },
});

const { results } = useRouteSearchWithData(props.workOrders, [
  'name',
  'description',
  'applications.name',
  'applications.shortName',
  'servers.name',
  'owners.name',
  'status',
]);

const sortPriorities = reverse(['New', 'In progress', 'Waiting on others']);
const sortedResults = computed(() => reverse(sortByPriority(sortPriorities, results.value, 'status')));
const groupedResults = computed(() => groupBy(sortedResults.value, 'status'));
const columns: DataTableColumn[] = [
  workOrderColumn,
  detailsColumn,
  applicationsColumn,
  serversColumn,
  createdColumn,
  { ...modifiedColumn, defaultSortOrder: 'descend' } as DataTableColumn,
  createQuickActionsColumn((row: any) => router.push({ name: 'workOrder-edit', params: { workOrderId: row.id } })),
];
</script>

<template>
  <n-collapse :default-expanded-names="['New', 'In progress', 'Waiting on others']" class="mt-3">
    <n-collapse-item v-for="(groupKey, index) in Object.keys(groupedResults)" :key="index" :title="groupKey" :name="groupKey">
      <n-data-table :columns="columns" :data="groupedResults[groupKey]" size="small" />
    </n-collapse-item>
  </n-collapse>
</template>
