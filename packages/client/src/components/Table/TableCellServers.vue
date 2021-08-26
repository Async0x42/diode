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
      v-for="server in props.servers"
      :key="server.id"
      :class="{ 'mb-2': props.servers.length > 1 }"
      class="group"
      :to="{ name: 'server-view', params: { serverId: server.id } }"
    >
      <ServerTooltip :server="server">
        <div>
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ server?.name }}</n-text>
          <n-text tag="div" depth="3" class="group-hover:text-teal-500">
            <template v-if="server.environment">[{{ server.environment.shortName || server.environment.name }}] </template>
            <template v-if="server.types.length > 0">
              <template v-for="serverType in server.types" :key="serverType.id"> [{{ serverType.shortName || serverType.name }}] </template>
            </template>
          </n-text>
        </div>
      </ServerTooltip>
    </router-link>
  </n-td>
</template>
