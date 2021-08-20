<script setup lang="ts">
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { groupBy } from 'lodash-es';
import { useRouteSearchWithData } from '~/logic';
import { sortByPriority } from '~/utils';

// 'Name', 'Details', 'Applications', 'Servers', 'Created', 'Updated', ''

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
const columns = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'details',
    title: 'Details',
  },
  {
    key: 'applications',
    title: 'Applications',
    render(row: IWorkOrder) {
      const tags = row.tags.map((tagKey) => {
        return h(
          TableCellApplications,
          {
            applications: row.applications,
            useShortName: true,
          },
          {
            default: () => tagKey,
          }
        );
      });
      return tags;
    },
  },
  {
    key: 'servers',
    title: 'Servers',
  },
  {
    key: 'created',
    title: 'Created',
  },
  {
    key: 'updated',
    title: 'Updated',
  },
  {
    key: 'actions',
    title: 'Actions',
  },
];
</script>

<template>
  <n-collapse :default-expanded-names="['New', 'In progress', 'Waiting on others']" class="mt-3">
    <n-collapse-item v-for="(groupKey, index) in Object.keys(groupedResults)" :key="index" :title="groupKey" :name="groupKey">
      <n-data-table ref="table" :columns="columns" :data="groupedResults[groupKey]" />
      <!-- <TableView :headers="['Name', 'Details', 'Applications', 'Servers', 'Created', 'Updated', '']">
        <WorkOrderListItem v-for="workOrder in groupedResults[groupKey]" :key="workOrder.id" :work-order="workOrder" />
      </TableView> -->
    </n-collapse-item>
  </n-collapse>
</template>

<n-td>
  <router-link class="group" :to="{ name: 'workOrder-view', params: { workOrderId: props.workOrder.id } }">
    <n-text tag="div" depth="1" class="group-hover:text-teal-300"
      ><n-text tag="span" depth="3" class="group-hover:text-teal-500">[WO-{{ props.workOrder.id.toString().padStart(4, '0') }}] </n-text
      >{{ props.workOrder.name }}</n-text
    >
    <n-text v-if="props.workOrder.startDate || props.workOrder.endDate" tag="span" depth="2" class="whitespace-nowrap group-hover:text-teal-400">
      [{{ formatTableDate(props.workOrder.startDate) }}<span v-if="props.workOrder.startDate && props.workOrder.endDate"> - </span
      >{{ formatTableDate(props.workOrder.endDate) }}]
    </n-text>
  </router-link>
</n-td>
<n-td>{{ props.workOrder.details }}</n-td>
<TableCellApplications :applications="props.workOrder.applications" :use-short-name="true" />
<TableCellServers :servers="props.workOrder.servers" />
<n-td class="whitespace-nowrap">{{ formatTableDate(props.workOrder.createdOn) }}</n-td>
<n-td class="whitespace-nowrap">{{ formatTableDate(props.workOrder.modifiedOn) }}</n-td>
<TableCellQuickActions @edit="$router.push({ name: 'workOrder-edit', params: { workOrderId: workOrder.id } })" />
