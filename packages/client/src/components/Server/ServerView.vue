<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

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
    <n-descriptions-item label="Types">
      <n-text v-for="type in props.server.types" :key="type.id" tag="div" class="mb-2" depth="1">{{ type.name }}</n-text>
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
      <FqdnsWidget :fqdns="props.server.fqdns" />
    </n-descriptions-item>
    <n-descriptions-item label="Applications">
      <ApplicationsWidget :applications="props.server.applications" />
    </n-descriptions-item>
    <n-descriptions-item label="SSL Certificates">
      <SslCertificatesWidget :ssl-certificates="props.server.sslCertificates" />
    </n-descriptions-item>
    <n-descriptions-item label="Work Orders">
      <WorkOrdersWidget :work-orders="props.server.workOrders" />
    </n-descriptions-item>
    <n-descriptions-item label="Physical Server">
      <n-text tag="div" depth="1">{{ props.server.physicalServer?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Notes">
      <n-text tag="div" depth="1" v-html="props.server.notes"></n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Support Groups">
      <ContactGroupsWidget :contact-groups="props.server.supportGroups" />
    </n-descriptions-item>
    <n-descriptions-item label="Dependencies">
      <DependenciesWidget :dependencies="props.server.dependencies" />
    </n-descriptions-item>
  </n-descriptions>
</template>
