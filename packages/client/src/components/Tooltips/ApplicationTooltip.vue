<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication>, required: true },
});
</script>

<template>
  <n-popover trigger="hover" raw :show-arrow="false">
    <template #trigger><slot></slot></template>
    <n-descriptions bordered>
      <n-descriptions-item>
        <template #label>
          <n-text depth="1" class="font-bold text-lg">{{ props.application.name }}</n-text>
        </template>
        <ApplicationsWidget :applications="props.application" :show-title="false" />
      </n-descriptions-item>
    </n-descriptions>
  </n-popover>
</template>
