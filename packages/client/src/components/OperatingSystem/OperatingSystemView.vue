<script setup lang="ts">
import type { IOperatingSystem } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  operatingSystem: { type: Object as PropType<IOperatingSystem>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Operating System Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.operatingSystem.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.operatingSystem.shortName }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="End of Support">
      <n-text tag="div" depth="1">{{ props.operatingSystem.endOfSupportDate }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
