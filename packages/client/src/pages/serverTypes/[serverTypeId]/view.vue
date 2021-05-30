<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IServerType } from '@diode/common';
import ServerTypeView from '~/components/ServerTypeView.vue';
import LoadingError from '~/components/LoadingError.vue';
import LoadingList from '~/components/LoadingList.vue';

const props = defineProps({
  serverTypeId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IServerType>(`/api/serverTypes/${props.serverTypeId}`);
</script>

<template>
  <ServerTypeView v-if="isFinished && data" :server-type="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: serverType-view
</route>
