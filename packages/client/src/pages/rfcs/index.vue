<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
const { data, error, isFinished } = useAxios('/api/rfcs');
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
