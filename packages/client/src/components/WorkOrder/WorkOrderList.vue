<script setup lang="ts">
import { defineProps } from 'vue';
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

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
</script>

<template>
  <TableView :headers="['Name', 'Status', 'Details', 'Applications', 'Servers', 'Created', '']">
    <WorkOrderListItem v-for="workOrder in results" :key="workOrder.id" :work-order="workOrder" />
  </TableView>
</template>
