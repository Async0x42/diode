<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  server: { type: Object as PropType<IServer>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Server Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.server.name }}</n-text>
      <n-text tag="div" depth="2">{{ props.server.ip }}</n-text>
      <n-text tag="div" depth="3">{{ props.server.operatingSystem?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Storage Space">
      <n-text tag="div" depth="1">{{ props.server.storageSpace }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="System Memory">
      <n-text tag="div" depth="1">{{ props.server.systemMemory }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Environment">
      <n-text tag="div" depth="1">{{ props.server.environment?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Zone">
      <n-text tag="div" depth="1">{{ props.server.zone?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Network">
      <n-text tag="div" depth="1">{{ props.server.network?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Location">
      <n-text tag="div" depth="1">{{ props.server.location?.name }}</n-text>
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
          <template v-if="sslCert.expiry"> [{{ formatTableDate(sslCert.expiry) }}] </template>
          {{ sslCert.sans }}
        </n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="WorkOrders">
      <template v-for="workOrder in props.server.workOrders" :key="workOrder.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">
          <div>
            <template v-if="workOrder.startDate || workOrder.endDate">
              [{{ formatTableDate(workOrder.startDate) }}
              <template v-if="workOrder.startDate && workOrder.endDate"> - </template>
              {{ formatTableDate(workOrder.endDate) }}]
            </template>
            {{ workOrder.name }}
          </div>
          <div class="mt-1">{{ workOrder.details }}</div>
        </n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Physical Server">
      <n-text tag="div" depth="1">{{ props.server.physicalServer?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Notes">
      <n-text tag="div" depth="1" v-html="props.server.notes"></n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Dependencies">
      <div v-for="dependency in props.server.dependencies" :key="dependency.id" class="mb-2 group">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">
          <template v-if="dependency.endOfSupportDate"> [{{ formatTableDate(dependency.endOfSupportDate) }}] </template>
          {{ dependency.name }}
        </n-text>
        <n-text tag="div" depth="2" class="group-hover:text-teal-400"> v{{ dependency.version }} </n-text>
      </div>
    </n-descriptions-item>
  </n-descriptions>
</template>
