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
  // replace extensions w/ comma's for phone support, TODO: improve
  window.location.href = `tel:${props.contact.phone?.replace(' x ', ',').replace(' x', ',').replace('x', ',')}`;
};
</script>

<template>
  <tr>
    <td class="py-4 px-6">
      <div class="flex items-center">
        <router-link :to="{ name: 'contact-view', params: { contactId: contact.id } }">
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
    <n-td>
      <div class="text-gray-900 whitespace-nowrap">{{ props.contact.title }}</div>
      <div class="text-gray-500">{{ props.contact.department }}</div>
      <div class="text-gray-300">{{ props.contact.organization }}</div>
    </n-td>
    <n-td class="whitespace-nowrap">{{ props.contact.phone }}</n-td>
    <n-td>{{ props.contact.notes }}</n-td>
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
      <TableButtonEdit class="ml-4" :to="{ name: 'contact-edit', params: { contactId: contact.id } }" />
    </td>
  </tr>
</template>
