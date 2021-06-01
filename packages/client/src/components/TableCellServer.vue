<script setup lang="ts">
import type { IServer } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer>, default: () => [] },
});
</script>

<template>
  <td class="py-4 px-6 whitespace-nowrap">
    <router-link :to="{ name: 'server-view', params: { serverId: server.id } }">
      <div class="text-sm text-gray-900">{{ props.server?.name }}</div>
      <div class="text-sm text-gray-500">{{ props.server?.ip }}</div>
    </router-link>
  </td>
</template>
