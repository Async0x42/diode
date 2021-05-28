<script setup lang="ts">
import { defineProps } from 'vue';
import type { IDns } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  dns: { type: Object as PropType<IDns>, required: true },
});
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">DNS Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">DNS details and notes.</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <dl class="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Name</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.dns.name }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Server</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.dns.server }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Application</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.dns.application }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
