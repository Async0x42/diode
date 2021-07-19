<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { ISslCertificate } from '@diode/common';

const props = defineProps({
  sslCertificateId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<ISslCertificate>(`/api/sslCertificates/${props.sslCertificateId}`);
</script>

<template>
  <SslCertificateCreateEdit v-if="isFinished && data" :ssl-certificate="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: sslCertificate-edit
</route>
