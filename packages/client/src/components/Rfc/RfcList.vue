<script setup lang="ts">
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';
import { parseJSON, format } from 'date-fns';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  rfcs: { type: Array as PropType<IRfc[]>, required: true },
});

const { results } = useRouteSearchWithData(props.rfcs, [
  'rfcNumber',
  'title',
  'rfcClass',
  'purpose',
  'description',
  'parentSystem',
  'businessCase',
  'securityImplications',
  'affectedInfrastructure',
  'affectedConfigurationItems',
  'affectedInformationSystem',
  'conceptOfOperation',
  'conceptOfTesting',
  'conceptOfImplementation',
  'backoutPlan',
  'impactAssessmentDueDate',
]);
</script>

<template>
  <DataTable :value="results" responsive-layout="scroll">
    <Column field="application" header="Application">
      <template #body="slotProps">
        <TableCellApplication :application="slotProps.data.application" />
      </template>
    </Column>
    <Column field="title" header="Title">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'rfc-view', params: { rfcId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.title }}</div>
          <div class="text-gray-400 group-hover:text-teal-400">{{ slotProps.data.rfcNumber }}</div>
          <div class="text-gray-500 group-hover:text-teal-500">Class: {{ slotProps.data.rfcClass }}</div>
        </router-link>
      </template>
    </Column>
    <Column field="status" header="Status">
      <template #body="slotProps">
        {{ slotProps.data.status }}
      </template>
    </Column>
    <Column field="impactAssessmentDueDate" header="IA Due Date" class="whitespace-nowrap">
      <template #body="slotProps">
        <div v-if="slotProps.data.impactAssessmentDueDate">{{ format(parseJSON(slotProps.data.impactAssessmentDueDate), 'yyyy-MM-dd') }}</div>
      </template>
    </Column>
    <Column field="description" header="Description" class="whitespace-nowrap">
      <template #body="slotProps">
        {{ slotProps.data.description }}
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions
          :browse="slotProps.data.rfcNumber ? `http://rfc.mil.ca/viewrfc_e.asp?id=${slotProps.data.rfcNumber}` : ''"
          @edit="$router.push({ name: 'rfc-edit', params: { rfcId: slotProps.data.id } })"
        />
      </template>
    </Column>
  </DataTable>
</template>
