<script setup lang="ts">
import { defineProps } from 'vue';
import type { IEnvironment } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  environment: { type: Object as PropType<IEnvironment>, required: true },
});
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">Environment Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">Environment details and notes.</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <dl class="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Name</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.environment.name }}</dd>
          <dd class="mt-1 text-sm text-gray-700">{{ props.environment.shortName }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
