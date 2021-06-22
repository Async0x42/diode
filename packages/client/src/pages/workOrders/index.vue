<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IWorkOrder } from '@diode/common';
const { data, error, isFinished } = useAxios<IWorkOrder[]>('/api/workOrders');
</script>

<template>
  <WorkOrderList v-if="data && isFinished && data" :work-orders="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: workOrders
</route>
