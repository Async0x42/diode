<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IContactGroup } from '@diode/common';
const { data, error, isFinished } = useAxios<IContactGroup[]>('/api/contactGroups');
</script>

<template>
  <ContactGroupList v-if="data && isFinished && data" :contact-groups="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: contactGroups
</route>
