<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IRfc } from '@diode/common';
import RfcList from '~/components/RfcList.vue';
import LoadingList from '~/components/LoadingList.vue';
import LoadingError from '~/components/LoadingError.vue';
const { data, error, isFinished } = useAxios<IRfc[]>('/api/rfcs');
</script>

<template>
  <RfcList v-if="data && isFinished && data" :rfcs="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: rfcs
</route>
