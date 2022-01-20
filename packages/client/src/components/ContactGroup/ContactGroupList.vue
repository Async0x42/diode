<script setup lang="ts">
import type { IContactGroup } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';

const props = defineProps({
  contactGroups: { type: Array as PropType<IContactGroup[]>, required: true },
});

const { results } = useRouteSearchWithData(props.contactGroups, [
  'name',
  'email',
  'phone',
  'title',
  'organization',
  'department',
  'notes',
  'contacts.name',
]);
</script>

<template>
  <TableView :headers="['Name', 'Title', 'Phone', 'Notes', '']">
    <ContactGroupListItem v-for="contactGroup in results" :key="contactGroup.id" :contact-group="contactGroup" />
  </TableView>
</template>
