<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IServerType } from '@diode/common';
const { data, error, isFinished } = useAxios<IServerType[]>('/api/serverTypes');
</script>

<template>
  <ServerTypeList v-if="data && isFinished && data" :server-types="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: serverTypes
</route>
