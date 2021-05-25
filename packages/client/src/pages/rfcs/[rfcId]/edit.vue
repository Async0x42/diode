<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IRfc } from '@diode/common';
import RfcCreateEdit from '~/components/RfcCreateEdit.vue';
import LoadingError from '~/components/LoadingError.vue';
import LoadingList from '~/components/LoadingList.vue';

const props = defineProps({
  rfcId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IRfc>(`/api/rfcs/${props.rfcId}`);
</script>

<template>
  <RfcCreateEdit v-if="isFinished && data" :rfc="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: Rfc-edit
</route>
