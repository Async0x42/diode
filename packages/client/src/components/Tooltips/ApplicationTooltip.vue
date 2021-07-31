<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication>, default: '' },
});
</script>

<template>
  <n-popover trigger="hover" raw :show-arrow="false">
    <template #trigger><slot></slot></template>
    <n-descriptions bordered>
      <n-descriptions-item>
        <ApplicationsWidget :applications="props.application" />
      </n-descriptions-item>
    </n-descriptions>
  </n-popover>
</template>
