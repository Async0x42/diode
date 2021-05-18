<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IContact } from '@diode/common';
import ContactList from '~/components/ContactList.vue';
import LoadingList from '~/components/LoadingList.vue';
import LoadingError from '~/components/LoadingError.vue';
const { data, error, isFinished } = useAxios<IContact[]>('/api/contacts');
</script>

<template>
  <ContactList v-if="data && isFinished && data" :contacts="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: contacts
</route>
