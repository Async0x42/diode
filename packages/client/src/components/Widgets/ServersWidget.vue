<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  servers: { type: Object as PropType<IServer[]>, required: true },
});
</script>

<template>
  <div v-for="server in props.servers" :key="server.id" class="mb-2 group">
    <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ server.name }}</n-text>
    <n-text tag="div" depth="2" class="group-hover:text-teal-300">{{ server.ip }}</n-text>
    <n-text tag="div" depth="3" class="group-hover:text-teal-300">{{ server.operatingSystem?.name }}</n-text>
  </div>
</template>
