<script setup lang="ts">
import { defineProps } from 'vue';
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  contacts: { type: Array as PropType<IContact[]>, required: true },
});

const { results } = useRouteSearchWithData(props.contacts, ['name', 'email', 'phone', 'title', 'organization', 'department', 'notes']);
</script>

<template>
  <div class="min-w-full -my-2 py-2 align-middle inline-block">
    <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <table class="divide-y min-w-full divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Phone</TableHeaderCell>
            <TableHeaderCell>Notes</TableHeaderCell>
            <th scope="col" class="py-3 px-6 relative">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y bg-white divide-gray-200">
          <ContactListItem v-for="contact in results" :key="contact.id" :contact="contact" />
        </tbody>
      </table>
    </div>
  </div>
</template>
