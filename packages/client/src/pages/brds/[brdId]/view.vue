<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IBrd } from '@diode/common';
import BrdView from '~/components/BrdView.vue';
import LoadingError from '~/components/LoadingError.vue';
import LoadingList from '~/components/LoadingList.vue';

const props = defineProps({
  brdId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IBrd>(`/api/brds/${props.brdId}`);
</script>

<template>
  <BrdView v-if="isFinished && data" :brd="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: Brd-view
</route>
