<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { ISslCertificate } from '@diode/common';
const { data, error, isFinished } = useAxios<ISslCertificate[]>('/api/sslCertificates');
</script>

<template>
  <SslCertificateList v-if="data && isFinished && data" :ssl-certificates="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: sslCertificates
</route>
