<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="{ name: 'server-view', params: { serverId: props.server.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900">{{ props.server.name }}</div>
            <div class="text-sm text-gray-700">{{ props.server.ip }}</div>
            <div class="text-sm text-gray-500">
              <span v-if="props.server.environment">
                {{ props.server.environment.shortName || props.server.environment.name }}
              </span>
              {{ props.server.location?.name }}
            </div>
            <div class="text-sm text-gray-500">{{ props.server.operatingSystem?.name }}</div>
          </div>
        </router-link>
      </div>
    </td>
    <TableCellFqdns :fqdns="props.server.fqdns" />
    <TableCellApplications :applications="props.server.applications" />
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ name: 'server-edit', params: { serverId: server.id } }" />
    </td>
  </tr>
</template>
