<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IWorkOrder } from '@diode/common';

const props = defineProps({
  workOrderId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IWorkOrder>(`/api/workOrders/${props.workOrderId}`);
</script>

<template>
  <WorkOrderCreateEdit v-if="isFinished && data" :work-order="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: workOrder-edit
</route>
