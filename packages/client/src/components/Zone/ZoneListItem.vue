<script setup lang="ts">
import { defineProps } from 'vue';
import type { IZone } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  zone: { type: Object as PropType<IZone>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'zone-view', params: { zoneId: zone.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.zone.name }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.zone.shortName }}</n-text>
      </router-link>
    </n-td>
    <TableCellQuickActions @edit="$router.push({ name: 'zone-edit', params: { zoneId: zone.id } })" />
  </n-tr>
</template>
