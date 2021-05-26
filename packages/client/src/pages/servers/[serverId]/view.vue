<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IServer } from '@diode/common';
import ServerView from '~/components/ServerView.vue';
import LoadingError from '~/components/LoadingError.vue';
import LoadingList from '~/components/LoadingList.vue';

const props = defineProps({
  serverId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IServer>(`/api/server/${props.serverId}`);
</script>

<template>
  <ServerView v-if="isFinished && data" :server="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: server-view
</route>
