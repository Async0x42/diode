<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer> },
});
</script>

<template>
  <n-td class="whitespace-nowrap">
    <router-link v-if="props.server" class="group" :to="{ name: 'server-view', params: { serverId: props.server.id } }">
      <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.server?.name }}</n-text>
      <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.server?.environment }}</n-text>
    </router-link>
  </n-td>
</template>
