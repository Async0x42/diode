<script setup lang="ts">
import { defineProps } from 'vue';
import type { IZone } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  zone: { type: Object as PropType<IZone>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Zone Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.zone.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.zone.shortName }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
