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
  <n-page-header class="p-2" title="Server Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.server.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.server.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.server.ip }}</n-text>
      <n-text tag="div" depth="3">{{ props.server.operatingSystem?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Environment">
      <n-text tag="div" depth="1">{{ props.server.environment?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Zone">
      <n-text tag="div" depth="1">{{ props.server.zone }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Network">
      <n-text tag="div" depth="1">{{ props.server.network?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="FQDNs">
      <n-text v-for="fqdn in props.server.fqdns" :key="fqdn.id" tag="div" class="mb-2" depth="1">{{ fqdn.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Applications">
      <template v-for="application in props.server.applications" :key="application.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">
          <template v-if="application.shortName"> [{{ application?.shortName }}] </template>
          {{ application?.name }}
        </n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="SSL Certificates">
      <template v-for="sslCert in props.server.sslCertificates" :key="sslCert.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">
          <template v-if="sslCert.expiry"> [{{ formatDate(sslCert.expiry) }}] </template>
          {{ sslCert.sans }}
        </n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Tickets">
      <template v-for="ticket in props.server.tickets" :key="ticket.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">
          <div>
            <template v-if="ticket.startDate || ticket.endDate">
              [{{ formatDate(ticket.startDate) }}
              <template v-if="ticket.startDate && ticket.endDate"> - </template>
              {{ formatDate(ticket.endDate) }}]
            </template>
            {{ ticket.name }}
          </div>
          <div class="mt-1">{{ ticket.details }}</div>
        </n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Physical Server">
      <n-text tag="div" depth="1">{{ props.server.physicalServer?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Notes">
      <n-text tag="div" depth="1" v-html="props.server.notes"></n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
