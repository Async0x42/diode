<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { INetwork } from '@diode/common';
const { data, error, isFinished } = useAxios<INetwork[]>('/api/networks');
</script>

<template>
  <NetworkList v-if="data && isFinished && data" :networks="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: networks
</route>
