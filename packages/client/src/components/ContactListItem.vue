<script setup lang="ts">
import { defineProps } from 'vue';
import type { Contact } from '@daiod/server';
import type { PropType } from 'vue';

const props = defineProps({
  contact: { type: Object as PropType<Contact>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <router-link is="a" :to="`${$route.fullPath}/${props.contact.id}/view`">
        <div class="flex items-center">
          <!-- <div class="flex-shrink-0 h-10 w-10">
                      <img class="rounded-full h-10 w-10" :src="props.contact.image" alt="" />
                    </div>
          <div class="ml-4"> if adding the img from above, change below div to ml-4 -->
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.contact.name }}
            </div>
            <div class="text-sm text-gray-500">
              {{ props.contact.email }}
            </div>
          </div>
        </div>
      </router-link>
    </td>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="text-sm text-gray-900">{{ props.contact.title }}</div>
      <div class="text-sm text-gray-500">{{ props.contact.department }}</div>
    </td>
    <td class="text-sm py-4 px-6 text-gray-500 whitespace-nowrap">
      {{ props.contact.phone }}
    </td>
    <td class="text-sm py-4 px-6 text-gray-500 whitespace-nowrap">
      {{ props.contact.email }}
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <router-link is="a" :to="`${$route.fullPath}/${props.contact.id}/edit`">
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
