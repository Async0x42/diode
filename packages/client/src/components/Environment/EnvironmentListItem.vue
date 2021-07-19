<script setup lang="ts">
import type { IEnvironment } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  environment: { type: Object as PropType<IEnvironment>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'environment-view', params: { environmentId: environment.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.environment.name }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.environment.shortName }}</n-text>
      </router-link>
    </n-td>
    <TableCellQuickActions @edit="$router.push({ name: 'environment-edit', params: { environmentId: environment.id } })" />
  </n-tr>
</template>
