<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { Rfc } from '@daiod/server';
const { data, error, isFinished } = useAxios<Rfc>('/api/rfcs');
</script>

<template>
  <div>
    <div v-if="data && isFinished">{{ data }}</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>loading...</div>
  </div>
</template>

<route lang="yaml">
name: rfcs
</route>
