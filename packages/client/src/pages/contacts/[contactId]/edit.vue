<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IContact } from '@diode/common';

const props = defineProps({
  contactId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IContact>(`/api/contacts/${props.contactId}`);
</script>

<template>
  <ContactCreateEdit v-if="isFinished && data" :contact="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: contact-edit
</route>
