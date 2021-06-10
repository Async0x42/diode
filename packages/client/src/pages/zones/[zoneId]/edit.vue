<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IZone } from '@diode/common';

const props = defineProps({
  zoneId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IZone>(`/api/zones/${props.zoneId}`);
</script>

<template>
  <ZoneCreateEdit v-if="isFinished && data" :zone="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: zone-edit
</route>
