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
  <tr>
    <td class="py-4 px-6">
      <div class="flex items-center">
        <router-link :to="{ name: 'ticket-view', params: { ticketId: props.ticket.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900">{{ props.ticket.name }}</div>
            <div class="text-sm text-gray-700 whitespace-nowrap">
              {{ formatDate(props.ticket.startDate) }} - {{ formatDate(props.ticket.endDate) }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <n-td>{{ props.ticket.status }}</n-td>
    <n-td>{{ props.ticket.details }}</n-td>
    <TableCellApplications :applications="props.ticket.applications" />
    <TableCellServers :servers="props.ticket.servers" />
    <n-td class="whitespace-nowrap">{{ formatDate(props.ticket.createdOn) }}</n-td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ name: 'ticket-edit', params: { ticketId: ticket.id } }" />
    </td>
  </tr>
</template>
