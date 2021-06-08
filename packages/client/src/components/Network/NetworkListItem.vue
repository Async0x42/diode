<script setup lang="ts">
import { defineProps } from 'vue';
import type { INetwork } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  network: { type: Object as PropType<INetwork>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="{ name: 'network-view', params: { networkId: network.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.network.name }}
            </div>
            <div class="text-sm text-gray-700">
              {{ props.network.shortName }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ name: 'network-edit', params: { networkId: network.id } }" />
    </td>
  </tr>
</template>
