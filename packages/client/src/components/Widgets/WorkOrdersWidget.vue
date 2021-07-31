<script setup lang="ts">
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  workOrders: { type: Object as PropType<IWorkOrder[]>, required: true },
});
</script>

<template>
  <template v-for="workOrder in props.workOrders" :key="workOrder.id">
    <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">
      <div>
        <template v-if="workOrder.startDate || workOrder.endDate">
          [{{ formatTableDate(workOrder.startDate) }}
          <template v-if="workOrder.startDate && workOrder.endDate"> - </template>
          {{ formatTableDate(workOrder.endDate) }}]
        </template>
        {{ workOrder.name }}
      </div>
      <div class="mt-1">{{ workOrder.details }}</div>
    </n-text>
  </template>
</template>
