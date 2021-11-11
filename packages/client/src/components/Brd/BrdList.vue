<script setup lang="ts">
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';
const { n } = useI18n();

const props = defineProps({
  brds: { type: Array as PropType<IBrd[]>, required: true },
});

const { results } = useRouteSearchWithData(props.brds, [
  'brdNumber',
  'title',
  'description',
  'relatedRequests',
  'status',
  'applications.name',
  'applications.shortName',
]);

const totalUpkeep = computed(() => results.value.map((r) => r.upkeepCost || 0).reduce((a, b) => a + b, 0));
const totalInitialCost = computed(() => results.value.map((r) => r.initialCost || 0).reduce((a, b) => a + b, 0));
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="title" sortable header="Title">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'brd-view', params: { brdId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.title }}</div>
          <div class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.brdNumber }}</div>
        </router-link>
      </template>
    </Column>
    <Column field="priority" sortable header="Priority">
      <template #body="slotProps">
        {{ slotProps.data.priority }}
      </template>
    </Column>
    <Column field="status" sortable header="Status">
      <template #body="slotProps">
        {{ slotProps.data.status }}
      </template>
    </Column>
    <Column field="initialCost" sortable header="Init Cost">
      <template #body="slotProps">
        {{ n(slotProps.data.initialCost || 0, 'currency') }}
      </template>
      <template #footer>
        {{ n(totalInitialCost, 'currency') }}
      </template>
    </Column>
    <Column field="upkeepCost" sortable header="Upkeep">
      <template #body="slotProps">
        {{ n(slotProps.data.upkeepCost || 0, 'currency') }}
      </template>
      <template #footer>
        {{ n(totalUpkeep, 'currency') }}
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'brd-edit', params: { brdId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
