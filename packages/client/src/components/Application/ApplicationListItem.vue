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
        <router-link :to="`${$route.fullPath}/${props.application.id}/view`">
          <div>
            <div class="font-medium text-sm text-gray-900">{{ props.application.name }}</div>
            <div class="text-sm text-gray-500 whitespace-nowrap">{{ props.application.shortName }}</div>
            <div v-for="fqdn in props.application.fqdns" :key="fqdn.id" class="text-sm text-gray-400 whitespace-nowrap">{{ fqdn.name }}</div>
          </div>
        </router-link>
      </div>
    </td>
    <TableCellServers :servers="props.application.servers" />
    <TableCell>{{ props.application.description }}</TableCell>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <router-link :to="`${$route.fullPath}/${props.application.id}/edit`">
        <button
          type="button"
          class="border border-transparent rounded-full bg-indigo-600 shadow-sm text-white p-1 inline-flex items-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <heroicons-solid-pencil class="h-5 w-5" aria-hidden="true" />
        </button>
      </router-link>
    </td>
  </tr>
</template>
