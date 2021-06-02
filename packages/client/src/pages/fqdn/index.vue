<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IFqdn } from '@diode/common';
const { data, error, isFinished } = useAxios<IFqdn[]>('/api/fqdns');
</script>

<template>
  <FqdnList v-if="data && isFinished && data" :fqdn="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: fqdn
</route>
