<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServerType } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  serverType: { type: Object as PropType<IServerType>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="`${$route.fullPath}/${props.serverType.id}/view`">
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.serverType.name }}
            </div>
            <div class="text-sm text-gray-700">
              {{ props.serverType.shortName }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ path: `${$route.fullPath}/${props.serverType.id}/edit` }" />
    </td>
  </tr>
</template>
