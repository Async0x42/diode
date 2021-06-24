<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';
import TableCellDependencies from '../Table/TableCellDependencies.vue';

const props = defineProps({
  server: { type: Object as PropType<IServer>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'server-view', params: { serverId: props.server.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.server.name }}</n-text>
        <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ props.server.ip }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">
          <span v-if="props.server.environment">[{{ props.server.environment.shortName || props.server.environment.name }}]</span>
          {{ props.server.location?.name }}
        </n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.server.operatingSystem?.name }}</n-text>
      </router-link>
    </n-td>
    <TableCellFqdns :fqdns="props.server.fqdns" />
    <TableCellApplications :applications="props.server.applications" />
    <TableCellDependencies :dependencies="props.server.dependencies" />
    <TableCellQuickActions @edit="$router.push({ name: 'server-edit', params: { serverId: server.id } })" />
  </n-tr>
</template>
