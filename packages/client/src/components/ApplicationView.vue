<script setup lang="ts">
import { defineProps } from 'vue';
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication>, required: true },
});
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">Application Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">Application details and notes.</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <dl class="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Name</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.application.name }}</dd>
          <dd class="text-sm text-gray-500">{{ props.application.shortName }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Server</dt>
          <dd class="text-sm text-gray-500">{{ props.application.server?.name }}</dd>
          <dd class="mt-1 text-sm text-gray-900">{{ props.application.server?.ip }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">DNS</dt>
          <dd class="text-sm text-gray-500">{{ props.application.dns?.name }}</dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="font-medium text-sm text-gray-500">Description</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ props.application.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
