<script setup lang="ts">
import { defineProps } from 'vue';
import type { ITicket } from '@diode/common';
import type { PropType } from 'vue';
import { parseJSON, format } from 'date-fns';

const props = defineProps({
  ticket: { type: Object as PropType<ITicket>, required: true },
});

const formatDate = (jsonDate?: Date) => jsonDate && format(parseJSON(jsonDate), 'yyyy-MM-dd');
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'ticket-view', params: { ticketId: props.ticket.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.ticket.name }}</n-text>
        <n-text tag="div" depth="3" class="whitespace-nowrap group-hover:text-teal-500">
          {{ formatDate(props.ticket.startDate) }} - {{ formatDate(props.ticket.endDate) }}
        </n-text>
      </router-link>
    </n-td>
    <n-td>{{ props.ticket.status }}</n-td>
    <n-td>{{ props.ticket.details }}</n-td>
    <TableCellApplications :applications="props.ticket.applications" />
    <TableCellServers :servers="props.ticket.servers" />
    <n-td class="whitespace-nowrap">{{ formatDate(props.ticket.createdOn) }}</n-td>
    <TableCellQuickActions @edit="$router.push({ name: 'ticket-edit', params: { ticketId: ticket.id } })" />
  </n-tr>
</template>
