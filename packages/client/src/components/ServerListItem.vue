<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link is="a" :to="`${$route.fullPath}/${props.server.id}/view`">
          <div class="ml-4">
            <div class="font-medium text-sm text-gray-900">{{ props.server.name }}</div>
            <div class="text-sm text-gray-500">{{ props.server.ip }}</div>
            <div class="text-sm text-gray-300">{{ props.server.os }}</div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="py-4 px-6 whitespace-nowrap">
      <template v-if="props.server.dns != null && props.server.dns.length > 0">
        <div v-for="dns in props.server.dns" :key="dns.id" class="text-sm text-gray-900">
          {{ dns.name }}
        </div>
      </template>
    </td>
    <td class="py-4 px-6">
      <template v-if="props.server.applications != null && props.server.applications.length > 0">
        <div v-for="application in props.server.applications" :key="application.id" class="text-sm text-gray-900">
          [{{ application.shortName }}] {{ application.name }}
        </div>
      </template>
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <router-link is="a" :to="`${$route.fullPath}/${props.server.id}/edit`">
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
