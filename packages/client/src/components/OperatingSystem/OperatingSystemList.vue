<script setup lang="ts">
import type { IOperatingSystem } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';
import { formatTableDate } from '~/utils';

const props = defineProps({
  operatingSystems: { type: Array as PropType<IOperatingSystem[]>, required: true },
});

const { results } = useRouteSearchWithData(props.operatingSystems, ['name']);
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'operatingSystem-view', params: { operatingSystemId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.name }}</div>
          <div class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.shortName }}</div>
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
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'operatingSystem-edit', params: { operatingSystemId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
