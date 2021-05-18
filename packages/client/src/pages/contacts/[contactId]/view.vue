<script setup lang="ts">
import { defineProps } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { ContactAttributes } from '@daiod/common';
import ContactView from '~/components/ContactView.vue';
import LoadingError from '~/components/LoadingError.vue';
import LoadingList from '~/components/LoadingList.vue';

const props = defineProps({
  contactId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<ContactAttributes>(`/api/contacts/${props.contactId}`);
</script>

<template>
  <ContactView v-if="isFinished && data" :contact="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: contact-view
</route>
