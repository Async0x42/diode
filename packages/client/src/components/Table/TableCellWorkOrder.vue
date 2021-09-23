<script setup lang="ts">
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  workOrder: { type: Object as PropType<IWorkOrder> },
});
</script>

<template>
  <td>
    <router-link v-if="props.workOrder" class="group" :to="{ name: 'workOrder-view', params: { workOrderId: props.workOrder.id } }">
      <div class="text-grey-300 group-hover:text-teal-300">
        <div tag="span" depth="3" class="group-hover:text-teal-500">[WO-{{ props.workOrder.id.toString().padStart(4, '0') }}]</div>
        {{ props.workOrder.name }}
      </div>
      <span v-if="props.workOrder.startDate || props.workOrder.endDate" class="text-grey-400 whitespace-nowrap group-hover:text-teal-400">
        [{{ formatTableDate(props.workOrder.startDate) }}<span v-if="props.workOrder.startDate && props.workOrder.endDate"> - </span
        >{{ formatTableDate(props.workOrder.endDate) }}]
      </span>
    </router-link>
  </td>
</template>
