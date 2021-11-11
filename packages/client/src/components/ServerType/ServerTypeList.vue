<script setup lang="ts">
import type { IServerType } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';

const props = defineProps({
  serverTypes: { type: Array as PropType<IServerType[]>, required: true },
});

const { results } = useRouteSearchWithData(props.serverTypes, ['name']);
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'serverType-view', params: { serverTypeId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.name }}</div>
          <div class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.shortName }}</div>
        </router-link>
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'serverType-edit', params: { serverType: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
