<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IApplication } from '@diode/common';
const { data, error, isFinished } = useAxios<IApplication[]>('/api/applications');

const { data } = axios.get 
</script>

<template>
  <n-data-table
    ref="table"
    :loading="!isFinished"
    :columns="columns"
    :data="data"
    :pagination="pagination"
    max-height="100vh"
  />
</template>

<route lang="yaml">
name: applications
</route>
