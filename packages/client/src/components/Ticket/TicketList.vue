<script setup lang="ts">
import type { ITicket } from '@diode/common';
import type { PropType } from 'vue';
import { groupBy } from 'lodash-es';
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

const groupedResults = computed(() => groupBy(results.value, 'status'));
</script>

<template>
  <n-collapse :default-expanded-names="['Open']" class="mt-3">
    <n-collapse-item v-for="(groupKey, index) in Object.keys(groupedResults)" :key="index" :title="groupKey" :name="groupKey">
      <TableView :headers="['Ticket', 'Status', 'Name', 'Applications', 'Servers', 'Created', 'Est Due Date', '']">
        <TicketListItem v-for="ticket in groupedResults[groupKey]" :key="ticket.id" :ticket="ticket" />
      </TableView>
    </n-collapse-item>
  </n-collapse>
</template>
