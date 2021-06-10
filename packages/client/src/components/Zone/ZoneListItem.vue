<script setup lang="ts">
import { defineProps } from 'vue';
import type { IZone } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  zone: { type: Object as PropType<IZone>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="{ name: 'zone-view', params: { zoneId: zone.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.zone.name }}
            </div>
            <div class="text-sm text-gray-700">
              {{ props.zone.shortName }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ name: 'zone-edit', params: { zoneId: zone.id } }" />
    </td>
  </tr>
</template>
