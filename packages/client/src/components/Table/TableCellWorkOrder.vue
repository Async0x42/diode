<script setup lang="ts">
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  workOrder: { type: Object as PropType<IWorkOrder> },
});
</script>

<template>
  <n-td class="min-w-23.5 max-w-25vw">
    <router-link
      v-if="props.workOrder"
      class="group"
      :to="{ name: 'workOrder-view', params: { workOrderId: props.workOrder.id } }"
    >
      <n-text tag="div" depth="1" class="group-hover:text-teal-300">
        <n-text
          tag="span"
          depth="3"
          class="group-hover:text-teal-500"
        >[WO-{{ props.workOrder.id.toString().padStart(4, '0') }}]</n-text>
        {{ props.workOrder.name }}
      </n-text>
      <n-text
        v-if="props.workOrder.startDate || props.workOrder.endDate"
        tag="span"
        depth="2"
        class="whitespace-nowrap group-hover:text-teal-400"
      >
        [{{ formatTableDate(props.workOrder.startDate) }}
        <span
          v-if="props.workOrder.startDate && props.workOrder.endDate"
        >-</span>
        {{ formatTableDate(props.workOrder.endDate) }}]
      </n-text>
    </router-link>
  </n-td>
</template>
