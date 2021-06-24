<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IDependency } from '@diode/common';
const { data, error, isFinished } = useAxios<IDependency[]>('/api/dependencies');
</script>

<template>
  <DependencyList v-if="data && isFinished && data" :dependencies="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: dependencies
</route>
