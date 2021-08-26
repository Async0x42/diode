<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  servers: { type: [Object, Array] as PropType<IServer | IServer[]>, default: '' },
  showTitle: { type: Boolean, default: true },
});
</script>

<template>
  <template v-if="!Array.isArray(props.servers)">
    <div class="group">
      <n-text v-if="showTitle" tag="div" depth="1" class="group-hover:text-teal-300">{{ props.servers.name }}</n-text>
      <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ props.servers.ip }}</n-text>
      <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.servers.operatingSystem?.name }}</n-text>
    </div>
  </template>
  <template v-else>
    <div v-for="server in props.servers" :key="server.id" class="mb-2 group">
      <n-text v-if="showTitle" tag="div" depth="1" class="group-hover:text-teal-300">{{ server?.name }}</n-text>
      <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ server?.ip }}</n-text>
      <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ server?.operatingSystem?.name }}</n-text>
    </div>
  </template>
</template>
