<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IPhysicalServer } from '@diode/common';
const { data, error, isFinished } = useAxios<IPhysicalServer[]>('/api/physicalServers');
</script>

<template>
  <PhysicalServerList v-if="data && isFinished && data" :servers="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: physicalServers
</route>
