<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IDns } from '@diode/common';
import DnsCreateEdit from '~/components/DnsCreateEdit.vue';
import LoadingError from '~/components/LoadingError.vue';
import LoadingList from '~/components/LoadingList.vue';

const props = defineProps({
  dnsId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IDns>(`/api/dns/${props.dnsId}`);
</script>

<template>
  <DnsCreateEdit v-if="isFinished && data" :dns="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: dns-edit
</route>
