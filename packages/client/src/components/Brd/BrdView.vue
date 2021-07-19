<script setup lang="ts">
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { formatTableDate } from '~/utils';
const { n } = useI18n();

const props = defineProps({
  brd: { type: Object as PropType<IBrd>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="BRD Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Title" :span="3">
      <n-text tag="div" depth="1">{{ props.brd.title }}</n-text>
      <n-text tag="div" depth="2">{{ props.brd.brdNumber }}</n-text>
      <n-text tag="div" depth="3">{{ props.brd.description }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Application">
      <n-text tag="div" depth="1">{{ props.brd.application?.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.brd.application?.shortName }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Description" :span="3">
      <n-text tag="div" depth="1">{{ props.brd.description }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Related Requests">
      <n-text tag="div" depth="1">{{ props.brd.relatedRequests }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Priority">
      <n-text tag="div" depth="1">{{ props.brd.priority }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Status">
      <n-text tag="div" depth="1">{{ props.brd.status }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Submission Date">
      <n-text tag="div" depth="1">{{ formatTableDate(props.brd.submissionDate) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Date Entered Into Bits">
      <n-text tag="div" depth="1">{{ formatTableDate(props.brd.dateEnteredIntoBits) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Initial Cost">
      <n-text tag="div" depth="1">{{ n(props.brd.initialCost || 0, 'currency') }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Upkeep Cost">
      <n-text tag="div" depth="1">{{ n(props.brd.upkeepCost || 0, 'currency') }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
