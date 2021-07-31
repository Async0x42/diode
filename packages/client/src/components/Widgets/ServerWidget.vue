<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer>, required: true },
});
</script>

<template>
  <div class="group">
    <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.server?.name }}</n-text>
    <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ props.server?.ip }}</n-text>
    <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.server?.operatingSystem?.name }}</n-text>
  </div>
</template>
