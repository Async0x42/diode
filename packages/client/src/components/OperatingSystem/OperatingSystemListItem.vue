<script setup lang="ts">
import type { IOperatingSystem } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  operatingSystem: { type: Object as PropType<IOperatingSystem>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'operatingSystem-view', params: { operatingSystemId: operatingSystem.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.operatingSystem.name }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.operatingSystem.shortName }}</n-text>
      </router-link>
    </n-td>
    <n-td>
      <n-text tag="div" depth="1" class="whitespace-nowrap group-hover:text-teal-300">
        {{ formatTableDate(props.operatingSystem.endOfSupportDate) }}
      </n-text>
    </n-td>
    <TableCellQuickActions @edit="$router.push({ name: 'operatingSystem-edit', params: { operatingSystemId: operatingSystem.id } })" />
  </n-tr>
</template>
