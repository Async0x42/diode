<script setup lang="ts">
import type { INetwork } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';

const props = defineProps({
  networks: { type: Array as PropType<INetwork[]>, required: true },
});

const { results } = useRouteSearchWithData(props.networks, ['name']);
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'network-view', params: { networkId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.name }}</div>
          <div class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.shortName }}</div>
        </router-link>
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'network-edit', params: { networkId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
