<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IEnvironment } from '@diode/common';
const { data, error, isFinished } = useAxios<IEnvironment[]>('/api/environments');
</script>

<template>
  <EnvironmentList v-if="data && isFinished && data" :environments="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: environments
</route>
