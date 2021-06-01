<script setup lang="ts">
import type { IServer } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  servers: { type: Object as PropType<IServer[]>, default: () => [] },
});
</script>

<template>
  <td class="py-4 px-6 whitespace-nowrap">
    <router-link v-for="server in props.servers" :key="server.id" :to="{ name: 'server-view', params: { serverId: server.id } }">
      <div class="text-sm text-gray-900">{{ server?.name }}</div>
      <div class="text-sm text-gray-700">{{ server?.ip }}</div>
      <div class="text-sm text-gray-500">{{ server?.location?.name }}</div>
      <div class="text-sm text-gray-500">{{ server?.operatingSystem?.name }}</div>
    </router-link>
  </td>
</template>
