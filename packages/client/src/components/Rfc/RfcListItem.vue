<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';
import { parseJSON, format } from 'date-fns';

const props = defineProps({
  rfc: { type: Object as PropType<IRfc>, required: true },
});

const onBrowseRfc = () => {
  window.location.href = `http://rfc.mil.ca/viewrfc_e.asp?id=${props.rfc.rfcNumber}`;
};

const iaDueDate = computed(() => props.rfc.impactAssessmentDueDate && format(parseJSON(props.rfc.impactAssessmentDueDate), 'yyyy-MM-dd'));
</script>

<template>
  <tr>
    <TableCellApplication :application="props.rfc.application" />
    <td class="py-4 px-6">
      <div class="flex items-center">
        <router-link :to="{ name: 'rfc-view', params: { rfcId: rfc.id } }">
          <div class="font-medium text-sm text-gray-900">
            {{ props.rfc.title }}
          </div>
          <div class="text-sm text-gray-500 whitespace-nowrap">
            {{ props.rfc.rfcNumber }}
          </div>
          <div class="text-xs text-gray-300 whitespace-nowrap">Class: {{ props.rfc.rfcClass }}</div>
        </router-link>
      </div>
    </td>
    <TableCell>{{ props.rfc.status }}</TableCell>
    <TableCell class="whitespace-nowrap">{{ iaDueDate }}</TableCell>
    <TableCell>{{ props.rfc.description }}</TableCell>
    <td class="flex font-medium text-right text-sm py-4 px-6 whitespace-nowrap items-center">
      <button
        v-if="props.rfc.rfcNumber"
        type="button"
        class="border border-transparent rounded-full bg-indigo-600 shadow-sm text-white p-1 inline-flex items-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="onBrowseRfc"
      >
        <heroicons-solid-eye class="h-5 w-5" aria-hidden="true" />
      </button>
      <TableButtonEdit :to="{ name: 'rfc-edit', params: { rfcId: rfc.id } }" />
    </td>
  </tr>
</template>
