<script setup lang="ts">
import type { IServerType } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  serverType: { type: Object as PropType<IServerType>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Server Type Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.serverType.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.serverType.shortName }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
