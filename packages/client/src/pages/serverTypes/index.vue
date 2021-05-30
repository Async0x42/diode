<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IServerType } from '@diode/common';
import ServerTypeList from '~/components/ServerTypeList.vue';
import LoadingList from '~/components/LoadingList.vue';
import LoadingError from '~/components/LoadingError.vue';
const { data, error, isFinished } = useAxios<IServerType[]>('/api/serverTypes');
</script>

<template>
  <ServerTypeList v-if="data && isFinished && data" :contacts="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: serverTypes
</route>
