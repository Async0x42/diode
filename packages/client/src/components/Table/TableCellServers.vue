<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  servers: { type: Object as PropType<IServer[]>, default: () => [] },
});
</script>

<template>
  <n-td class="whitespace-nowrap">
    <router-link
      v-for="(server, index) in props.servers"
      :key="server.id"
      class="group"
      :to="{ name: 'server-view', params: { serverId: server.id } }"
    >
      <ServerTooltip :server="server">
        <div :class="{ 'mb-2': props.servers.length > 1 && index !== props.servers.length - 1 }">
          <n-text tag="div" depth="1"><n-tag size="small" class="cursor-pointer whitespace-nowrap group-hover:text-teal-300">{{ server?.name }}</n-tag></n-text>
          <n-text tag="div" depth="3">
            <n-tag size="small" class="cursor-pointer  whitespace-nowrap group-hover:text-teal-300" v-if="server.location">{{ server.location?.shortName || server.location?.name }}</n-tag>
            <n-tag size="small" class="cursor-pointer  whitespace-nowrap group-hover:text-teal-300" v-if="server.environment">{{ server.environment?.shortName || server.environment?.name }}</n-tag>
            <n-tag v-for="type in server.types" size="small" class="cursor-pointer  whitespace-nowrap group-hover:text-teal-300">{{ type?.shortName || type?.name }}</n-tag>
          </n-text>
        </div>
      </ServerTooltip>
    </router-link>
  </n-td>
</template>
