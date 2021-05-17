<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { ContactAttributes } from '@daiod/common';
import ContactList from '~/components/ContactList.vue';
import LoadingList from '~/components/LoadingList.vue';
import LoadingError from '~/components/LoadingError.vue';
const { data, error, isFinished } = useAxios<ContactAttributes[]>('/api/contacts');
</script>

<template>
  <ContactList v-if="isFinished && data" :contacts="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: contacts
</route>
