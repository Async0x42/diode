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
        <template #label>
          <n-text depth="1" class="font-bold text-lg">{{ props.server.name }}</n-text>
        </template>
        <ServersWidget :servers="props.server" :show-title="false" />
      </n-descriptions-item>
    </n-descriptions>
  </n-popover>
</template>
