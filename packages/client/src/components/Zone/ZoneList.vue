<script setup lang="ts">
import type { IZone } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';

const props = defineProps({
  zones: { type: Array as PropType<IZone[]>, required: true },
});

const { results } = useRouteSearchWithData(props.zones, ['name']);
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <td>
          <router-link class="group" :to="{ name: 'zone-view', params: { zoneId: slotProps.data.id } }">
            <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.name }}</div>
            <div class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.shortName }}</div>
          </router-link>
        </td>
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'zone-edit', params: { zoneId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
