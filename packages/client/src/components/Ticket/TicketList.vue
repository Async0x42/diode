<script setup lang="ts">
import type { ITicket } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  tickets: { type: Array as PropType<ITicket[]>, required: true },
});

const { results } = useRouteSearchWithData(props.tickets, [
  'name',
  'ticketId',
  'details',
  'status',
  'applications.name',
  'applications.shortName',
  'servers.name',
]);
</script>

<template>
  <TableView :headers="['Ticket', 'Status', 'Name', 'Applications', 'Servers', 'Created', 'Est Due Date', '']">
    <TicketListItem v-for="ticket in results" :key="ticket.id" :ticket="ticket" />
  </TableView>
</template>
