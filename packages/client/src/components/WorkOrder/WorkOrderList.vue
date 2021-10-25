<script setup lang="ts">
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { groupBy, reverse } from 'lodash-es';
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

const sortPriorities = reverse(['New', 'In progress', 'Waiting on others']);
const sortedResults = computed(() => reverse(sortByPriority(sortPriorities, results.value, 'status')));
const groupedResults = computed(() => groupBy(sortedResults.value, 'status'));
</script>

<template>
  <n-collapse :default-expanded-names="['New', 'In progress', 'Waiting on others']" class="mt-3">
    <n-collapse-item v-for="(groupKey, index) in Object.keys(groupedResults)" :key="index" :title="groupKey" :name="groupKey">
      <DataTable class="p-datatable-sm" :value="groupedResults[groupKey]" responsive-layout="scroll">
        <Column field="workOrder" sortable header="Work Order">
          <template #body="slotProps">
            <TableCellWorkOrder :work-order="slotProps.data" />
          </template>
        </Column>
        <Column field="details" header="Details"></Column>
        <Column field="applications" header="Applications">
          <template #body="slotProps">
            <TableCellApplications :applications="slotProps.data.applications" :use-short-name="true" />
          </template>
        </Column>
        <Column field="servers" header="Servers">
          <template #body="slotProps">
            <TableCellServers :servers="slotProps.data.servers" />
          </template>
        </Column>
        <Column field="modifiedOn" sortable header="Updated">
          <template #body="slotProps">
            <TableCellModified :date="slotProps.data.modifiedOn" />
          </template>
        </Column>
        <Column>
          <template #body="slotProps">
            <TableCellQuickActions @edit="$router.push({ name: 'workOrder-edit', params: { workOrderId: slotProps.data.id } })" />
          </template>
        </Column>
      </DataTable>
    </n-collapse-item>
  </n-collapse>
</template>
