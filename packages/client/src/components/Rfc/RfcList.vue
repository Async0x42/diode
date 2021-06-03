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
  <div class="min-w-full -my-2 py-2 align-middle inline-block">
    <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <table class="divide-y min-w-full divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <TableHeaderCell>Application</TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>IA Due Date</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <th scope="col" class="py-3 px-6 relative">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y bg-white divide-gray-200">
          <RfcListItem v-for="rfc in results" :key="rfc.id" :rfc="rfc" />
        </tbody>
      </table>
    </div>
  </div>
</template>
