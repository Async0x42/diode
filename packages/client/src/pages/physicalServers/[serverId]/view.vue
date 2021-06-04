<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IPhysicalServer } from '@diode/common';

const props = defineProps({
  serverId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IPhysicalServer>(`/api/physicalServers/${props.serverId}`);
</script>

<template>
  <PhysicalServerView v-if="isFinished && data" :server="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: physicalServer-view
</route>
