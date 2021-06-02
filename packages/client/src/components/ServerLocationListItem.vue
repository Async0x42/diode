<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServerLocation } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  serverLocation: { type: Object as PropType<IServerLocation>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="`${$route.fullPath}/${props.serverLocation.id}/view`">
          <div class="ml-4">
            <div class="font-medium text-sm text-gray-900">
              {{ props.serverLocation.name }}
            </div>
            <div class="font-medium text-sm text-gray-700">
              {{ props.serverLocation.shortName }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <router-link :to="`${$route.fullPath}/${props.serverLocation.id}/edit`">
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
