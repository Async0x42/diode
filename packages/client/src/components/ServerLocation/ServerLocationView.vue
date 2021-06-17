<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServerLocation } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  serverLocation: { type: Object as PropType<IServerLocation>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Server Location Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.serverLocation.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.serverLocation.shortName }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
