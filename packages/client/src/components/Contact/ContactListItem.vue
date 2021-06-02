<script setup lang="ts">
import { defineProps } from 'vue';
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contact: { type: Object as PropType<IContact>, required: true },
});

const onEmailContact = () => {
  window.location.href = `mailto:${props.contact.email}`;
};

const onPhoneContact = () => {
  window.location.href = `tel:${props.contact.phone}`;
};
</script>

<template>
  <tr>
    <td class="py-4 px-6">
      <div class="flex items-center">
        <router-link :to="`${$route.fullPath}/${props.contact.id}/view`">
          <div>
            <div class="font-medium text-sm text-gray-900 whitespace-nowrap">
              {{ props.contact.name }}
            </div>
            <div class="text-sm text-gray-500">
              {{ props.contact.email }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="py-4 px-6">
      <div class="text-sm text-gray-900 whitespace-nowrap">{{ props.contact.title }}</div>
      <div class="text-sm text-gray-500">{{ props.contact.department }}</div>
      <div class="text-sm text-gray-300">{{ props.contact.organization }}</div>
    </td>
    <td class="text-sm py-4 px-6 text-gray-500 whitespace-nowrap">
      {{ props.contact.phone }}
    </td>
    <td class="text-sm py-4 px-6 text-gray-500">
      {{ props.contact.notes }}
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <button
        v-if="props.contact.email"
        type="button"
        class="border border-transparent rounded-full bg-indigo-600 shadow-sm text-white p-1 inline-flex items-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="onEmailContact"
      >
        <heroicons-solid-mail class="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        v-if="props.contact.phone"
        type="button"
        class="border border-transparent rounded-full bg-indigo-600 shadow-sm text-white ml-4 p-1 inline-flex items-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="onPhoneContact"
      >
        <heroicons-solid-phone class="h-5 w-5" aria-hidden="true" />
      </button>
      <router-link :to="`${$route.fullPath}/${props.contact.id}/edit`">
        <button
          type="button"
          class="border border-transparent rounded-full bg-indigo-600 shadow-sm text-white ml-4 p-1 inline-flex items-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <heroicons-solid-pencil class="h-5 w-5" aria-hidden="true" />
        </button>
      </router-link>
    </td>
  </tr>
</template>
