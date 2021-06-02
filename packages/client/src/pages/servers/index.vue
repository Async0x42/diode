<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IServer } from '@diode/common';
const { data, error, isFinished } = useAxios<IServer[]>('/api/servers');
</script>

<template>
  <ServerList v-if="data && isFinished && data" :servers="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: servers
</route>
