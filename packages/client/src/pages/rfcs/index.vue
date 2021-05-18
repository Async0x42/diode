<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { RfcAttributes } from '@daiod/common';
const { data, error, isFinished } = useAxios<RfcAttributes>('/api/rfcs');
</script>

<template>
  <div>
    <div v-if="isFinished">{{ data }}</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>loading...</div>
  </div>
</template>

<route lang="yaml">
name: rfcs
</route>
