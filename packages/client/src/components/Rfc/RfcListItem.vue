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
  <n-tr>
    <TableCellApplication :application="props.rfc.application" />
    <n-td>
      <router-link class="group" :to="{ name: 'rfc-view', params: { rfcId: rfc.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.rfc.title }}</n-text>
        <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ props.rfc.rfcNumber }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">Class: {{ props.rfc.rfcClass }}</n-text>
      </router-link>
    </n-td>
    <n-td>{{ props.rfc.status }}</n-td>
    <n-td class="whitespace-nowrap">{{ iaDueDate }}</n-td>
    <n-td>{{ props.rfc.description }}</n-td>
    <n-td>
      <TableButton v-if="props.rfc.rfcNumber" @click="onBrowseRfc">
        <template #icon>
          <heroicons-solid-eye />
        </template>
      </TableButton>
      <TableButtonEdit :to="{ name: 'rfc-edit', params: { rfcId: rfc.id } }" />
    </n-td>
  </n-tr>
</template>
