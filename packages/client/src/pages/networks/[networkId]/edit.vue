<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { INetwork } from '@diode/common';

const props = defineProps({
  networkId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<INetwork>(`/api/networks/${props.networkId}`);
</script>

<template>
  <NetworkCreateEdit v-if="isFinished && data" :network="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: network-edit
</route>
