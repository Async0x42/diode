<script setup lang="ts">
import type { IEnvironment } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';

const props = defineProps({
  environments: { type: Array as PropType<IEnvironment[]>, required: true },
});

const { results } = useRouteSearchWithData(props.environments, ['name']);
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'environment-view', params: { environmentId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.name }}</div>
          <div class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.shortName }}</div>
        </router-link>
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'environment-edit', params: { environmentId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
