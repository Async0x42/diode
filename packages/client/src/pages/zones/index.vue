<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IZone } from '@diode/common';
const { data, error, isFinished } = useAxios<IZone[]>('/api/zones');
</script>

<template>
  <ZoneList v-if="data && isFinished && data" :zones="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: zones
</route>
