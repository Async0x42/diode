<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IDns } from '@diode/common';
import DnsList from '~/components/DnsList.vue';
import LoadingList from '~/components/LoadingList.vue';
import LoadingError from '~/components/LoadingError.vue';
const { data, error, isFinished } = useAxios<IDns[]>('/api/dns');
</script>

<template>
  <DnsList v-if="data && isFinished && data" :dns="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: dns
</route>
