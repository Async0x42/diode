<script setup lang="ts">
import { defineProps } from 'vue';
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  workOrder: { type: Object as PropType<IWorkOrder>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'workOrder-view', params: { workOrderId: props.workOrder.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.workOrder.name }}</n-text>
        <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ props.workOrder.id }}</n-text>
        <n-text tag="div" depth="3" class="whitespace-nowrap group-hover:text-teal-500">
          {{ formatTableDate(props.workOrder.startDate) }} - {{ formatTableDate(props.workOrder.endDate) }}
        </n-text>
      </router-link>
    </n-td>
    <n-td>{{ props.workOrder.status }}</n-td>
    <n-td>{{ props.workOrder.details }}</n-td>
    <TableCellApplications :applications="props.workOrder.applications" />
    <TableCellServers :servers="props.workOrder.servers" />
    <n-td class="whitespace-nowrap">{{ formatTableDate(props.workOrder.createdOn) }}</n-td>
    <TableCellQuickActions @edit="$router.push({ name: 'workOrder-edit', params: { workOrderId: workOrder.id } })" />
  </n-tr>
</template>
