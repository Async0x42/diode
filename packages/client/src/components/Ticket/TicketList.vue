<script setup lang="ts">
import { defineProps } from 'vue';
import type { ITicket } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  tickets: { type: Array as PropType<ITicket[]>, required: true },
});

const { results } = useRouteSearchWithData(props.tickets, [
  'name',
  'description',
  'applications.name',
  'applications.shortName',
  'servers.name',
  'owners.name',
  'status',
]);
</script>

<template>
  <TableView :headers="['Name', 'Status', 'Details', 'Applications', 'Servers', 'Created']">
    <TicketListItem v-for="ticket in results" :key="ticket.id" :ticket="ticket" />
  </TableView>
</template>
