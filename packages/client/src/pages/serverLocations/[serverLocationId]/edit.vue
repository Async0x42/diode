<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IServerLocation } from '@diode/common';
import ServerLocationCreateEdit from '~/components/ServerLocationCreateEdit.vue';
import LoadingError from '~/components/LoadingError.vue';
import LoadingList from '~/components/LoadingList.vue';

const props = defineProps({
  serverLocationId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IServerLocation>(`/api/serverLocations/${props.serverLocationId}`);
</script>

<template>
  <ServerLocationCreateEdit v-if="isFinished && data" :server-location="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: serverLocation-edit
</route>
