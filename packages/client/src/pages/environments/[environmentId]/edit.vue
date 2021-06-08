<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IEnvironment } from '@diode/common';

const props = defineProps({
  environmentId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IEnvironment>(`/api/environments/${props.environmentId}`);
</script>

<template>
  <EnvironmentCreateEdit v-if="isFinished && data" :environment="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: environment-edit
</route>
