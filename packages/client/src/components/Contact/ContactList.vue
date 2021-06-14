<script setup lang="ts">
import { defineProps } from 'vue';
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  contacts: { type: Array as PropType<IContact[]>, required: true },
});

const { results } = useRouteSearchWithData(props.contacts, [
  'name',
  'email',
  'phone',
  'title',
  'organization',
  'department',
  'notes',
  'contactGroups.name',
]);
</script>

<template>
  <TableView :headers="['Name', 'Title', 'Phone', 'Notes', '']">
    <ContactListItem v-for="contact in results" :key="contact.id" :contact="contact" />
  </TableView>
</template>
