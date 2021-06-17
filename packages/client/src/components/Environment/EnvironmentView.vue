<script setup lang="ts">
import { defineProps } from 'vue';
import type { IEnvironment } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  environment: { type: Object as PropType<IEnvironment>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Environment Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.environment.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.environment.shortName }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
