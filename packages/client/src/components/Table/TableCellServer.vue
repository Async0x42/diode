<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer> },
});
</script>

<template>
  <td class="whitespace-nowrap">
    <router-link v-if="props.server" class="group" :to="{ name: 'server-view', params: { serverId: props.server.id } }">
      <ServerTooltip :server="props.server">
        <div>
          <div class="text-grey-300 group-hover:text-teal-300">{{ props.server?.name }}</div>
          <div class="text-grey-500 group-hover:text-teal-500">
            <template v-if="props.server.environment">[{{ props.server.environment.shortName || props.server.environment.name }}] </template>
            <template v-if="props.server.location">[{{ props.server.location.shortName || props.server.location.name }}] </template>
            <template v-if="props.server.operatingSystem">
              [{{ props.server.operatingSystem.shortName || props.server.operatingSystem.name }}]</template
            >
          </div>
        </div>
      </ServerTooltip>
    </router-link>
  </td>
</template>
