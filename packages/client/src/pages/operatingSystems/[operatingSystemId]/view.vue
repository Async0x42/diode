<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IOperatingSystem } from '@diode/common';
import OperatingSystemView from '~/components/OperatingSystemView.vue';
import LoadingError from '~/components/LoadingError.vue';
import LoadingList from '~/components/LoadingList.vue';

const props = defineProps({
  operatingSystemId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IOperatingSystem>(`/api/operatingSystems/${props.operatingSystemId}`);
</script>

<template>
  <OperatingSystemView v-if="isFinished && data" :operating-system="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: operatingSystem-view
</route>
