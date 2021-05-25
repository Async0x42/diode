<script setup lang="ts">
import { defineProps } from 'vue';
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  rfc: { type: Object as PropType<IRfc>, required: true },
});

const onBrowseRfc = () => {
  window.location.href = `http://rfc.mil.ca/viewrfc_e.asp?id=${props.rfc.rfcNumber}`;
};
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <button
            v-if="props.rfc.rfcNumber"
            type="button"
            class="border border-transparent rounded-full bg-indigo-600 shadow-sm text-white p-1 inline-flex items-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="onBrowseRfc"
          >
            <heroicons-solid-eye class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <router-link is="a" :to="`${$route.fullPath}/${props.rfc.id}/view`">
          <div class="ml-4">
            <div class="font-medium text-sm text-gray-900">
              {{ props.rfc.title }}
            </div>
            <div class="text-sm text-gray-500">
              {{ props.rfc.rfcNumber }}
            </div>
            <div class="text-xs text-gray-300">
              {{ props.rfc.rfcClass }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="text-sm py-4 px-6 text-gray-500">
      {{ props.rfc.impactAssessmentDueDate }}
    </td>
    <td class="text-sm py-4 px-6 text-gray-500">
      {{ props.rfc.description }}
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <router-link is="a" :to="`${$route.fullPath}/${props.rfc.id}/edit`">
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
