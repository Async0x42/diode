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
  <n-page-header class="p-2" title="Work Order Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.workOrder.name }}</n-text>
      <n-text tag="div" depth="3">{{ formatTableDate(props.workOrder.startDate) }} - {{ formatTableDate(props.workOrder.endDate) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Created">
      <n-text tag="div" depth="1">{{ formatTableDate(props.workOrder.createdOn) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Modified">
      <n-text tag="div" depth="1">{{ formatTableDate(props.workOrder.modifiedOn) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Details">
      <n-text tag="div" depth="1" v-html="props.workOrder.details"></n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Applications">
      <template v-for="application in props.workOrder.applications" :key="application.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">
          <template v-if="application.shortName"> [{{ application?.shortName }}] </template>
          {{ application?.name }}
        </n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <template v-for="server in props.workOrder.servers" :key="server.id">
        <div class="group">
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ server.name }}</n-text>
          <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ server.ip }}</n-text>
          <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ server.operatingSystem?.name }}</n-text>
        </div>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Owners">
      <n-text v-for="owner in props.workOrder.owners" :key="owner.id" tag="div" depth="1" class="mb-2 hover:text-teal-300">{{ owner.name }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
