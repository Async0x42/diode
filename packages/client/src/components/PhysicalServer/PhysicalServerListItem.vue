<script setup lang="ts">
import { defineProps } from 'vue';
import type { IPhysicalServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IPhysicalServer>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="{ name: 'server-view', params: { serverId: props.server.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900">{{ props.server.name }}</div>
            <div class="text-sm text-gray-500">{{ props.server.location?.shortName || props.server.location?.name }}</div>
          </div>
        </router-link>
      </div>
    </td>
    <TableCellServers :servers="props.server.servers" />
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ path: `${$route.fullPath}/${props.server.id}/edit` }" />
    </td>
  </tr>
</template>
