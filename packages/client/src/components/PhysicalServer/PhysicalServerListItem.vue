<script setup lang="ts">
import type { IPhysicalServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IPhysicalServer>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'physicalServer-view', params: { serverId: props.server.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.server.name }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.server.location?.shortName || props.server.location?.name }}</n-text>
      </router-link>
    </n-td>
    <TableCellServers :servers="props.server.servers" />
    <TableCellQuickActions @edit="$router.push({ name: 'physicalServer-edit', params: { serverId: server.id } })" />
  </n-tr>
</template>
