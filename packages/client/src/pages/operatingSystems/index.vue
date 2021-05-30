<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IOperatingSystem } from '@diode/common';
import OperatingSystemList from '~/components/OperatingSystemList.vue';
import LoadingList from '~/components/LoadingList.vue';
import LoadingError from '~/components/LoadingError.vue';
const { data, error, isFinished } = useAxios<IOperatingSystem[]>('/api/contacts');
</script>

<template>
  <OperatingSystemList v-if="data && isFinished && data" :contacts="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: operatingSystems
</route>
