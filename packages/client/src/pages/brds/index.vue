<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IBrd } from '@diode/common';
import BrdList from '~/components/BrdList.vue';
import LoadingList from '~/components/LoadingList.vue';
import LoadingError from '~/components/LoadingError.vue';
const { data, error, isFinished } = useAxios<IBrd[]>('/api/brds');
</script>

<template>
  <BrdList v-if="data && isFinished && data" :brds="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: brds
</route>
