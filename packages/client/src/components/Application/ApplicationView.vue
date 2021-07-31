<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication>, required: true },
});

const title = `${props.application.shortName && `[${props.application.shortName}] `}${props.application.name}`;
</script>

<template>
  <n-page-header class="p-2" :title="title" />
  <n-descriptions bordered>
    <n-descriptions-item label="Description" :span="3">
      <DescriptionWidget :description="props.application.description" />
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <ServersWidget :servers="props.application.servers" />
    </n-descriptions-item>
    <n-descriptions-item label="FQDNs">
      <FqdnsWidget :fqdns="props.application.fqdns" />
    </n-descriptions-item>
    <n-descriptions-item label="SSL Certs">
      <SslCertificatesWidget :ssl-certificates="props.application.sslCertificates" />
    </n-descriptions-item>
    <n-descriptions-item label="BRDs">
      <BrdsWidget :brds="props.application.brds" />
    </n-descriptions-item>
    <n-descriptions-item label="RFCs">
      <RfcsWidget :rfcs="props.application.rfcs" />
    </n-descriptions-item>
    <n-descriptions-item label="Dependencies">
      <DependenciesWidget :dependencies="props.application.dependencies" />
    </n-descriptions-item>
  </n-descriptions>
</template>
