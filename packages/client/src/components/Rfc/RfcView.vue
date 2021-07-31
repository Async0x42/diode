<script setup lang="ts">
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  rfc: { type: Object as PropType<IRfc>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="RFC Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Title" :span="3">
      <n-text tag="div" depth="1">{{ props.rfc.title }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Application">
      <ApplicationsWidget :applications="props.rfc.application" />
    </n-descriptions-item>
    <n-descriptions-item label="Class">
      <n-text tag="div" depth="1">{{ props.rfc.rfcClass }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Purpose">
      <n-text tag="div" depth="1">{{ props.rfc.purpose }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Status">
      <n-text tag="div" depth="1">{{ props.rfc.status }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="IA Due Date">
      <n-text tag="div" depth="1">{{ formatTableDate(props.rfc.impactAssessmentDueDate) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Description">
      <n-text tag="div" depth="1">{{ props.rfc.description }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Parent System">
      <n-text tag="div" depth="1">{{ props.rfc.parentSystem }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Business Case">
      <n-text tag="div" depth="1">{{ props.rfc.businessCase }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Security Implications">
      <n-text tag="div" depth="1">{{ props.rfc.securityImplications }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Affected Infrastructure">
      <n-text tag="div" depth="1">{{ props.rfc.affectedInfrastructure }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Affected Information System">
      <n-text tag="div" depth="1">{{ props.rfc.affectedInformationSystem }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Affected Configuration Items">
      <n-text tag="div" depth="1">{{ props.rfc.affectedConfigurationItems }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Concept Of Operation">
      <n-text tag="div" depth="1">{{ props.rfc.conceptOfOperation }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Concept Of Testing">
      <n-text tag="div" depth="1">{{ props.rfc.conceptOfTesting }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Concept Of Implementation">
      <n-text tag="div" depth="1">{{ props.rfc.conceptOfImplementation }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Backout Plan">
      <n-text tag="div" depth="1">{{ props.rfc.backoutPlan }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
