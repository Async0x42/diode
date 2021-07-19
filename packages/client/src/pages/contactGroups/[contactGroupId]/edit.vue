<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IContactGroup } from '@diode/common';

const props = defineProps({
  contactGroupId: { type: String, required: true },
});
const { data, error, isFinished } = useAxios<IContactGroup>(`/api/contactGroups/${props.contactGroupId}`);
</script>

<template>
  <ContactGroupCreateEdit v-if="isFinished && data" :contact-group="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: contactGroup-edit
</route>
