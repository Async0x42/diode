<script setup lang="ts">
import type { IServer } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer> },
});
</script>

<template>
  <td class="py-4 px-6 whitespace-nowrap">
    <router-link v-if="server" class="group" :to="{ name: 'server-view', params: { serverId: props.server.id } }">
      <div class="text-sm text-gray-900 group-hover:border-l-1 group-hover:border-blue-300">{{ props.server?.name }}</div>
      <div class="text-sm text-gray-500 group-hover:border-l-1 group-hover:border-blue-300">{{ props.server?.ip }}</div>
    </router-link>
  </td>
</template>
