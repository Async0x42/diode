<script setup lang="ts">
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  sslCertificate: { type: Object as PropType<ISslCertificate>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="SSL Certificate Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Subject Alternate Names" :span="3">
      <n-text tag="div" depth="1">{{ props.sslCertificate.sans }}</n-text>
      <n-text tag="div" depth="3">{{ formatTableDate(props.sslCertificate.expiry) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Applications">
      <ApplicationsWidget :applications="props.sslCertificate.applications" />
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <ServersWidget :servers="props.sslCertificate.servers" />
    </n-descriptions-item>
  </n-descriptions>
</template>
