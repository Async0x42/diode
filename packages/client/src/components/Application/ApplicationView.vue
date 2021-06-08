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
          <dt class="font-medium text-sm text-gray-500">Servers</dt>
          <template v-for="server in props.application.servers" :key="server.id">
            <dd class="text-sm text-gray-900">{{ server.name }}</dd>
            <dd class="mt-1 text-sm text-gray-500">{{ server.ip }}</dd>
            <dd class="mt-1 text-sm text-gray-500">{{ server.operatingSystem?.name }}</dd>
          </template>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">FQDNs</dt>
          <template v-for="fqdn in props.application.fqdns" :key="fqdn.id">
            <dd class="text-sm text-gray-900">{{ fqdn.name }}</dd>
          </template>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">BRDs</dt>
          <template v-for="brd in props.application.brds" :key="brd.id">
            <dd class="text-sm text-gray-900">[{{ brd.brdNumber }}] {{ brd.title }}</dd>
          </template>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">RFCs</dt>
          <template v-for="rfc in props.application.rfcs" :key="rfc.id">
            <dd class="text-sm text-gray-900">[{{ rfc.rfcNumber }}] {{ rfc.title }}</dd>
          </template>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">SSL Certificates</dt>
          <template v-for="sslCert in props.application.sslCertificates" :key="sslCert.id">
            <dd class="text-sm text-gray-900">[{{ sslCert.rfcNumber }}] {{ sslCert.title }}</dd>
          </template>
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
