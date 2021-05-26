<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IApplication } from '@diode/common';
import ApplicationCreateEdit from '~/components/ApplicationCreateEdit.vue';
import LoadingError from '~/components/LoadingError.vue';
import LoadingList from '~/components/LoadingList.vue';

const props = defineProps({
  applicationId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IApplication>(`/api/applications/${props.applicationId}`);
</script>

<template>
  <ApplicationCreateEdit v-if="isFinished && data" :application="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: application-edit
</route>
