<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IApplication } from '@diode/common';
const { data, error, isFinished } = useAxios<IApplication[]>('/api/applications');
</script>

<template>
  <ApplicationList v-if="data && isFinished && data" :applications="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: applications
</route>
