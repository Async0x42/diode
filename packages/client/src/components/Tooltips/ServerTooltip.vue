<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer>, required: true },
});
</script>

<template>
  <n-popover trigger="hover" raw :show-arrow="false">
    <template #trigger><slot></slot></template>
    <n-descriptions bordered>
      <n-descriptions-item>
        <ServersWidget :servers="props.server" />
      </n-descriptions-item>
    </n-descriptions>
  </n-popover>
</template>
