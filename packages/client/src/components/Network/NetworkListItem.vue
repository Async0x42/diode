<script setup lang="ts">
import type { INetwork } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  network: { type: Object as PropType<INetwork>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'network-view', params: { networkId: network.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.network.name }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.network.shortName }}</n-text>
      </router-link>
    </n-td>
    <TableCellQuickActions @edit="$router.push({ name: 'network-edit', params: { networkId: network.id } })" />
  </n-tr>
</template>
