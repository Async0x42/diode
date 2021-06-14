<script setup lang="ts">
import { defineProps } from 'vue';
import type { IContactGroup } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contactGroup: { type: Object as PropType<IContactGroup>, required: true },
});

const onEmailContact = () => {
  window.location.href = `mailto:${props.contactGroup.email}`;
};

const onPhoneContact = () => {
  // replace extensions w/ comma's for phone support, TODO: improve
  window.location.href = `tel:${props.contactGroup.phone?.replace(' x ', ',').replace(' x', ',').replace('x', ',')}`;
};
</script>

<template>
  <tr>
    <td class="py-4 px-6">
      <div class="flex items-center">
        <router-link :to="{ name: 'contactGroup-view', params: { contactGroupId: contactGroup.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900 whitespace-nowrap">
              {{ props.contactGroup.name }}
            </div>
            <div class="text-sm text-gray-500">
              {{ props.contactGroup.email }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <n-td>
      <div class="text-gray-900 whitespace-nowrap">{{ props.contactGroup.title }}</div>
      <div class="text-gray-500">{{ props.contactGroup.department }}</div>
      <div class="text-gray-300">{{ props.contactGroup.organization }}</div>
    </n-td>
    <n-td class="whitespace-nowrap">{{ props.contactGroup.phone }}</n-td>
    <n-td>{{ props.contactGroup.notes }}</n-td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <button
        v-if="props.contactGroup.email"
        type="button"
        class="border border-transparent rounded-full bg-indigo-600 shadow-sm text-white p-1 inline-flex items-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="onEmailContact"
      >
        <heroicons-solid-mail class="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        v-if="props.contactGroup.phone"
        type="button"
        class="border border-transparent rounded-full bg-indigo-600 shadow-sm text-white ml-4 p-1 inline-flex items-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="onPhoneContact"
      >
        <heroicons-solid-phone class="h-5 w-5" aria-hidden="true" />
      </button>
      <TableButtonEdit class="ml-4" :to="{ name: 'contactGroup-edit', params: { contactGroupId: contactGroup.id } }" />
    </td>
  </tr>
</template>
