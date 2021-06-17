<script setup lang="ts">
import { defineProps } from 'vue';
import type { INetwork } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  network: { type: Object as PropType<INetwork>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Network Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.network.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.network.shortName }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
