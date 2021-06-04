<script setup lang="ts">
import type { IServer } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer> },
});
</script>

<template>
  <TableCell class="whitespace-nowrap">
    <router-link v-if="props.server" class="group" :to="{ name: 'server-view', params: { serverId: props.server.id } }">
      <div class="text-sm text-gray-900 group-hover:bg-gray-200">{{ props.server?.name }}</div>
      <div class="text-sm text-gray-500 group-hover:bg-gray-200">{{ props.server?.ip }}</div>
    </router-link>
  </TableCell>
</template>
