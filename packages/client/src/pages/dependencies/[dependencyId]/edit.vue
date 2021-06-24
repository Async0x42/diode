<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IDependency } from '@diode/common';

const props = defineProps({
  dependencyId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IDependency>(`/api/dependencies/${props.dependencyId}`);
</script>

<template>
  <DependencyCreateEdit v-if="isFinished && data" :dependency="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: dependency-edit
</route>
