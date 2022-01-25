<script setup lang="ts">
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  workOrder: { type: Object as PropType<IWorkOrder>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Work Order Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.workOrder.name }}</n-text>
      <n-text
        tag="div"
        depth="3"
      >{{ formatTableDate(props.workOrder.startDate) }} - {{ formatTableDate(props.workOrder.endDate) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Created">
      <n-text tag="div" depth="1">{{ formatTableDate(props.workOrder.createdOn) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Modified">
      <n-text tag="div" depth="1">{{ formatTableDate(props.workOrder.modifiedOn) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Details">
      <DetailsWidget :details="props.workOrder.details" />
    </n-descriptions-item>
    <n-descriptions-item label="Applications">
      <ApplicationsWidget :applications="props.workOrder.applications" />
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <ServersWidget :servers="props.workOrder.servers" />
    </n-descriptions-item>
    <n-descriptions-item label="Owners">
      <ContactsWidget :contacts="props.workOrder.owners" />
    </n-descriptions-item>
  </n-descriptions>
</template>
