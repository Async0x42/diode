<script setup lang="ts">
import type { IDependency } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  dependency: { type: Object as PropType<IDependency>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'dependency-view', params: { dependencyId: dependency.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.dependency.name }}</n-text>
        <n-text v-if="props.dependency.version" tag="div" depth="2" class="group-hover:text-teal-400">v{{ props.dependency.version }}</n-text>
        <n-text v-if="props.dependency.packageName" tag="div" depth="3" class="group-hover:text-teal-500">{{ props.dependency.packageName }}</n-text>
      </router-link>
    </n-td>
    <n-td>
      <n-text tag="div" depth="1" class="whitespace-nowrap group-hover:text-teal-300">
        {{ formatTableDate(props.dependency.endOfSupportDate) }}
      </n-text>
    </n-td>
    <TableCellApplications :applications="props.dependency.applications" />
    <TableCellServers :servers="props.dependency.servers" />
    <TableCellQuickActions @edit="$router.push({ name: 'dependency-edit', params: { dependencyId: dependency.id } })" />
  </n-tr>
</template>
