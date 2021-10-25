<script setup lang="ts">
import type { IPhysicalServer } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  servers: { type: Array as PropType<IPhysicalServer[]>, required: true },
});

const { results } = useRouteSearchWithData(props.servers, [
  'name',
  'baseOperatingSystem',
  'hypervisor',
  'deviceManufacturer',
  'deviceModel',
  'processorManufacturer',
  'processorModel',
  'clusterName',
  'location',
  'servers.name',
]);
</script>

<template>
  <DataTable :value="results" responsive-layout="scroll">
    <Column field="name" header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'physicalServer-view', params: { serverId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.name }}</div>
          <div class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.location?.shortName || slotProps.data.location?.name }}</div>
        </router-link>
      </template>
    </Column>
    <Column field="title" header="Servers (VM)">
      <template #body="slotProps">
        <TableCellServers :servers="slotProps.data.servers" />
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'physicalServer-edit', params: { serverId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
