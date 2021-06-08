<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { format, parseJSON } from 'date-fns';

const props = defineProps({
  sslCertificate: { type: Object as PropType<ISslCertificate>, required: true },
});

const sslExpiry = computed(() => props.sslCertificate.expiry && format(parseJSON(props.sslCertificate.expiry), 'yyyy-MM-dd'));
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">SSL Certificate Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">SSL Certificate details and notes.</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <dl class="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Subject Alternate Names</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.sslCertificate.sans }}</dd>
          <dd class="mt-1 text-sm text-gray-700">{{ sslExpiry }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
