<script setup lang="ts">
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { groupBy } from 'lodash-es';
import { useRouteSearchWithData } from '~/logic';
import { sortByPriority } from '~/utils';

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

const sortPriorities = ['New', 'In progress', 'Waiting on others'];
const sortedResults = computed(() => sortByPriority(sortPriorities, results.value, 'status'));
const groupedResults = computed(() => groupBy(sortedResults.value, 'status'));
</script>

<template>
  <n-collapse :default-expanded-names="['New']" class="mt-3">
    <n-collapse-item v-for="(groupKey, index) in Object.keys(groupedResults)" :key="index" :title="groupKey" :name="groupKey">
      <TableView :headers="['Name', 'Details', 'Applications', 'Servers', 'Created', 'Updated', '']">
        <WorkOrderListItem v-for="workOrder in groupedResults[groupKey]" :key="workOrder.id" :work-order="workOrder" />
      </TableView>
    </n-collapse-item>
  </n-collapse>
</template>
