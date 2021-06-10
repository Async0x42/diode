<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';
import { parseJSON, format } from 'date-fns';

const props = defineProps({
  server: { type: Object as PropType<IServer>, required: true },
});
const formatDate = (jsonDate?: Date) => jsonDate && format(parseJSON(jsonDate), 'yyyy-MM-dd');
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">Server Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">{{ props.server.name }}</p>
      <p class="text-sm max-w-2xl text-gray-500">{{ props.server.ip }}</p>
      <p class="text-sm max-w-2xl text-gray-500">{{ props.server.location?.name }}</p>
      <p class="text-sm max-w-2xl text-gray-500">{{ props.server.operatingSystem?.name }}</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <dl class="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Environment</dt>
          <dd class="mt-1 text-sm text-gray-900" v-html="props.server.environment?.name" />
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Zone</dt>
          <dd class="mt-1 text-sm text-gray-900" v-html="props.server.zone" />
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Network</dt>
          <dd class="mt-1 text-sm text-gray-900" v-html="props.server.network?.name" />
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">FQDN</dt>
          <dd v-for="fqdn in props.server.fqdns" :key="fqdn.id" class="mt-1 text-sm text-gray-900">
            {{ fqdn.name }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Applications</dt>
          <dd v-for="application in props.server.applications" :key="application.id" class="mt-1 text-sm text-gray-900">
            <template v-if="application.shortName"> [{{ application.shortName }}] </template>
            {{ application.name }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">SSL Certificates</dt>
          <dd v-for="sslCert in props.server.sslCertificates" :key="sslCert.id" class="mt-1 text-sm text-gray-900">
            <template v-if="sslCert.expiry"> [{{ formatDate(sslCert.expiry) }}] </template>
            {{ sslCert.sans }}
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="font-medium text-sm text-gray-500">Tickets</dt>
          <dd v-for="ticket in props.server.tickets" :key="ticket.id" class="mt-1 text-sm text-gray-900">
            <div>
              <template> [{{ formatDate(ticket.startDate) }} - {{ formatDate(ticket.endDate) }}] </template>
              {{ ticket.name }}
            </div>
            <div class="mt-1">{{ ticket.details }}</div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Physical Server</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.physicalServer?.name }}</dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="font-medium text-sm text-gray-500">Notes</dt>
          <dd class="mt-1 text-sm text-gray-900" v-html="props.server.notes" />
        </div>
      </dl>
    </div>
  </div>
</template>
