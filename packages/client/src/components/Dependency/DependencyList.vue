<script setup lang="ts">
import type { IDependency } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';
import { formatTableDate } from '~/utils';

const props = defineProps({
  dependencies: { type: Array as PropType<IDependency[]>, required: true },
});

const { results } = useRouteSearchWithData(props.dependencies, ['name']);
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'dependency-view', params: { dependencyId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.datay.name }}</div>
          <div v-if="slotProps.data.version" class="text-gray-400 group-hover:text-teal-400">v{{ slotProps.data.version }}</div>
          <div v-if="slotProps.data.packageName" class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.packageName }}</div>
        </router-link>
      </template>
    </Column>
    <Column field="endOfSupportDate" sortable header="End of Support">
      <template #body="slotProps">
        <div class="text-gray-300 whitespace-nowrap group-hover:text-teal-300">
          {{ formatTableDate(slotProps.data.endOfSupportDate) }}
        </div>
      </template>
    </Column>
    <Column field="applications" header="Applications">
      <template #body="slotProps">
        <TableCellApplications :applications="slotProps.data.applications" />
      </template>
    </Column>
    <Column field="servers" header="Servers">
      <template #body="slotProps">
        <TableCellServers :servers="slotProps.data.servers" />
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'dependency-edit', params: { dependencyId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
