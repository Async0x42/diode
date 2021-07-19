<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IFqdn } from '@diode/common';

const props = defineProps({
  fqdnId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IFqdn>(`/api/fqdns/${props.fqdnId}`);
</script>

<template>
  <FqdnView v-if="isFinished && data" :fqdn="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: fqdn-view
</route>
