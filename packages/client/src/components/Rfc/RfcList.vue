<script setup lang="ts">
import { defineProps } from 'vue';
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';
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
  <TableWrapper>
    <TableView :headers="['Application', 'Title', 'Status', 'IA Due Date', 'Description', '']">
      <RfcListItem v-for="rfc in results" :key="rfc.id" :rfc="rfc" />
    </TableView>
  </TableWrapper>
</template>
