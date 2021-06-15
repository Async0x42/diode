<script setup lang="ts">
import type { IServer } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  servers: { type: Object as PropType<IServer[]>, default: () => [] },
});
</script>

<template>
  <n-td class="whitespace-nowrap">
    <router-link v-for="server in props.servers" :key="server.id" class="group" :to="{ name: 'server-view', params: { serverId: server.id } }">
      <div :class="{ 'mt-2': props.servers.length > 1 }">
        <div>
          <n-text class="group-hover:text-teal-300" depth="1">{{ server?.name }}</n-text>
        </div>
        <div>
          <n-text class="group-hover:text-teal-700" depth="3">
            <template v-if="server.ip">[{{ server.ip }}] </template>
            <template v-if="server.location">[{{ server.location.shortName || server.location.name }}] </template>
            <template v-if="server.operatingSystem"> [{{ server.operatingSystem.shortName || server.operatingSystem.name }}]</template>
          </n-text>
        </div>
      </div>
    </router-link>
  </n-td>
</template>
