<script setup lang="ts">
import type { IServerLocation } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  serverLocations: { type: Array as PropType<IServerLocation[]>, required: true },
});

const { results } = useRouteSearchWithData(props.serverLocations, ['name']);
</script>

<template>
  <DataTable :value="results" responsive-layout="scroll">
    <Column field="name" header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'serverLocation-view', params: { serverLocationId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.name }}</div>
          <div class="text-gray-300 group-hover:text-teal-500">{{ slotProps.data.shortName }}</div>
        </router-link>
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'serverLocation-edit', params: { serverLocation: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
