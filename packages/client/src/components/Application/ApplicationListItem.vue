<script setup lang="ts">
import { defineProps } from 'vue';
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6">
      <div class="flex items-center">
        <router-link :to="{ name: 'application-view', params: { applicationId: application.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900">{{ props.application.name }}</div>
            <div class="text-sm text-gray-500 whitespace-nowrap">{{ props.application.shortName }}</div>
            <div v-for="fqdn in props.application.fqdns" :key="fqdn.id" class="text-sm text-gray-400 whitespace-nowrap">{{ fqdn.name }}</div>
          </div>
        </router-link>
      </div>
    </td>
    <TableCellServers :servers="props.application.servers" />
    <n-td>{{ props.application.description }}</n-td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ name: 'application-edit', params: { applicationId: application.id } }" />
    </td>
  </tr>
</template>
