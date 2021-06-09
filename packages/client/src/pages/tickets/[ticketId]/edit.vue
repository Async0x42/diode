<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { ITicket } from '@diode/common';

const props = defineProps({
  ticketId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<ITicket>(`/api/tickets/${props.ticketId}`);
</script>

<template>
  <TicketCreateEdit v-if="isFinished && data" :ticket="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: ticket-edit
</route>
