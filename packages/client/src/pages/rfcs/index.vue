<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IRfc } from '@daiod/common';
const { data, error, isFinished } = useAxios<IRfc>('/api/rfcs');
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
