<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  servers: { type: Array as PropType<IServer[]>, required: true },
});

const { results } = useRouteSearchWithData(props.servers, [
  'name',
  'ip',
  'fqdns.name',
  'applications.name',
  'applications.shortName',
  'operatingSystem.name',
  'types.name',
  'location.name',
  'physicalServer.name',
  'environment.name',
  'environment.shortName',
  'network.name',
  'network.shortName',
  'zone.name',
  'zone.shortName',
  'dependencies.name',
]);
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'server-view', params: { serverId: slotProps.data.id } }">
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ slotProps.data.name }}</n-text>
          <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ slotProps.data.ip }}</n-text>
          <n-text tag="div" depth="3" class="group-hover:text-teal-500">
            <span v-if="slotProps.data.environment">[{{ slotProps.data.environment.shortName || slotProps.data.environment.name }}]</span>
            {{ slotProps.data.location?.name }}
          </n-text>
          <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ slotProps.data.operatingSystem?.name }}</n-text>
        </router-link>
      </template>
    </Column>
    <Column field="storage" sortable header="Storage">
      <template #body="slotProps">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ slotProps.data.storageSpace }}</n-text>
      </template>
    </Column>
    <Column field="ram" sortable header="RAM">
      <template #body="slotProps">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ slotProps.data.systemMemory }}</n-text>
      </template>
    </Column>
    <Column field="fqdn" header="FQDN">
      <template #body="slotProps">
        <TableCellFqdns :fqdns="slotProps.data.fqdns" />
      </template>
    </Column>
    <Column field="applications" header="Applications">
      <template #body="slotProps">
        <TableCellApplications :applications="slotProps.data.applications" />
      </template>
    </Column>
    <Column field="dependencies" header="Dependencies">
      <template #body="slotProps">
        <TableCellDependencies :dependencies="slotProps.data.dependencies" />
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'server-edit', params: { serverId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
