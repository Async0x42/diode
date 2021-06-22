<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { ITicket } from '@diode/common';
const { data, error, isFinished } = useAxios<ITicket[]>('/api/tickets');
</script>

<template>
  <TicketList v-if="data && isFinished && data" :tickets="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: tickets
</route>
