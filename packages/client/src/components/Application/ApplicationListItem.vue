<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'application-view', params: { applicationId: application.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.application.name }}</n-text>
        <n-text tag="div" depth="2" class="whitespace-nowrap group-hover:text-teal-500">{{ props.application.shortName }}</n-text>
        <n-text v-for="fqdn in props.application.fqdns" :key="fqdn.id" tag="div" depth="3" class="whitespace-nowrap group-hover:text-teal-700">
          {{ fqdn.name }}
        </n-text>
      </router-link>
    </n-td>
    <TableCellServers :servers="props.application.servers" />
    <TableCellDependencies :dependencies="props.application.dependencies" />
    <n-td>{{ props.application.description }}</n-td>
    <TableCellQuickActions @edit="$router.push({ name: 'application-edit', params: { applicationId: application.id } })" />
  </n-tr>
</template>
