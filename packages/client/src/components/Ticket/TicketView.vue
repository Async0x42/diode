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
      <template v-for="application in props.ticket.applications" :key="application.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">
          <template v-if="application.shortName"> [{{ application?.shortName }}] </template>
          {{ application?.name }}
        </n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <template v-for="server in props.ticket.servers" :key="server.id">
        <div class="group">
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ server.name }}</n-text>
          <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ server.ip }}</n-text>
          <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ server.operatingSystem?.name }}</n-text>
        </div>
      </template>
    </n-descriptions-item>
  </n-descriptions>
</template>
