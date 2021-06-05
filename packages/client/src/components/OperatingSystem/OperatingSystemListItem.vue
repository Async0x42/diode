<script setup lang="ts">
import { defineProps } from 'vue';
import type { IOperatingSystem } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  operatingSystem: { type: Object as PropType<IOperatingSystem>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="{ name: 'operatingSystem-view', params: { operatingSystemId: operatingSystem.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.operatingSystem.name }}
            </div>
            <div class="text-sm text-gray-700">
              {{ props.operatingSystem.shortName }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ name: 'operatingSystem-edit', params: { operatingSystemId: operatingSystem.id } }" />
    </td>
  </tr>
</template>
