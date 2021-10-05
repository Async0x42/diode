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
      <DataTable :value="groupedResults[groupKey]" responsive-layout="scroll">
        <Column field="ticketId" header="Ticket"></Column>
        <Column field="status" header="Status"></Column>
        <Column field="name" header="Name">
          <template #body="slotProps">
            <router-link class="group" :to="{ name: 'ticket-view', params: { ticketId: slotProps.data.id } }">
              <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ slotProps.data.name }}</n-text>
            </router-link>
          </template>
        </Column>
        <Column field="applications" header="Applications">
          <template #body="slotProps">
            <TableCellApplications :applications="slotProps.data.applications" :use-short-name="true" />
          </template>
        </Column>
        <Column field="servers" header="Servers">
          <template #body="slotProps">
            <TableCellServers :servers="slotProps.data.servers" />
          </template>
        </Column>
        <Column field="createdOn" header="Created">
          <template #body="slotProps">
            <TableCellCreated :date="slotProps.data.createdOn" />
          </template>
        </Column>
        <Column field="modifiedOn" header="Updated">
          <template #body="slotProps">
            <TableCellModified :date="slotProps.data.modifiedOn" />
          </template>
        </Column>
        <Column field="estimatedDueDate" header="Est Due Date">
          <template #body="slotProps">
            <TableCellEstimatedDueDate :date="slotProps.data.estimatedDueDate" />
          </template>
        </Column>
        <Column>
          <template #body="slotProps">
            <TableCellQuickActions @edit="$router.push({ name: 'ticket-edit', params: { ticketId: slotProps.data.id } })" />
          </template>
        </Column>
      </DataTable>
    </n-collapse-item>
  </n-collapse>
</template>
