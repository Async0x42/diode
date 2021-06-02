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
    <router-link v-for="server in props.servers" :key="server.id" class="group" :to="{ name: 'server-view', params: { serverId: server.id } }">
      <div class="text-sm text-gray-900 group-hover:border-l-1 group-hover:border-blue-300" :class="{ 'mt-2': props.servers.length > 1 }">
        {{ server?.name }}
      </div>
      <div class="text-sm text-gray-500 group-hover:border-l-1 group-hover:border-blue-300">
        <template v-if="server?.ip">[{{ server.ip }}] </template>
        <template v-if="server?.location">[{{ server.location.shortName || server.location.name }}] </template>
        <template v-if="server?.operatingSystem"> [{{ server.operatingSystem.shortName || server.operatingSystem.name }}]</template>
      </div>
    </router-link>
  </td>
</template>
