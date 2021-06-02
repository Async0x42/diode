<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IOperatingSystem } from '@diode/common';
const { data, error, isFinished } = useAxios<IOperatingSystem[]>('/api/operatingSystems');
</script>

<template>
  <OperatingSystemList v-if="data && isFinished && data" :operating-systems="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: operatingSystems
</route>
