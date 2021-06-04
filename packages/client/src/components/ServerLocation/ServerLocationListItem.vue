<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServerLocation } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  serverLocation: { type: Object as PropType<IServerLocation>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="`${$route.fullPath}/${props.serverLocation.id}/view`">
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.serverLocation.name }}
            </div>
            <div class="font-medium text-sm text-gray-700">
              {{ props.serverLocation.shortName }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="`${$route.fullPath}/${props.serverLocation.id}/edit`" />
    </td>
  </tr>
</template>
