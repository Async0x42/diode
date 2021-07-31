<script setup lang="ts">
import type { ITicket } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  ticket: { type: Object as PropType<ITicket>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Ticket Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">[{{ props.ticket.ticketId }}] {{ props.ticket.name }}</n-text>
      <n-text tag="div" depth="2">{{ props.ticket.status }}</n-text>
      <n-text tag="div" depth="3">Est. Due: {{ formatTableDate(props.ticket.estimatedDueDate) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Created">
      <n-text tag="div" depth="1">{{ formatTableDate(props.ticket.createdOn) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Modified">
      <n-text tag="div" depth="1">{{ formatTableDate(props.ticket.modifiedOn) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Details">
      <n-text tag="div" depth="1" v-html="props.ticket.details"></n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Applications">
      <ApplicationsWidget :applications="props.ticket.applications" />
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <ServersWidget :servers="props.ticket.servers" />
    </n-descriptions-item>
  </n-descriptions>
</template>
