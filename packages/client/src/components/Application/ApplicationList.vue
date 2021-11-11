<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';

const props = defineProps({
  applications: { type: Array as PropType<IApplication[]>, required: true },
});

const { results } = useRouteSearchWithData(props.applications, [
  'name',
  'shortName',
  'description',
  'fqdns.name',
  'servers.name',
  'servers.ip',
  'brds.title',
  'rfcs.title',
  'dependencies.name',
]);
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="title" sortable header="Title">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'application-view', params: { applicationId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.name }}</div>
          <div class="text-gray-500 whitespace-nowrap group-hover:text-teal-500">{{ slotProps.data.shortName }}</div>
          <div v-for="fqdn in slotProps.data.fqdns" :key="fqdn.id" class="text-gray-700 whitespace-nowrap group-hover:text-teal-700">
            {{ fqdn.name }}
          </div>
        </router-link>
      </template>
    </Column>
    <Column field="servers" header="Servers">
      <template #body="slotProps">
        <TableCellServers :servers="slotProps.data.servers" />
      </template>
    </Column>
    <Column field="dependencies" header="Dependencies">
      <template #body="slotProps">
        <TableCellDependencies :dependencies="slotProps.data.dependencies" />
      </template>
    </Column>
    <Column field="initialCost" header="Init Cost">
      <template #body="slotProps">
        {{ slotProps.data.description }}
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'application-edit', params: { applicationId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
