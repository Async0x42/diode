<script setup lang="ts">
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  contacts: { type: Array as PropType<IContact[]>, required: true },
});

const onEmailContact = (email: string) => {
  window.location.href = `mailto:${email}`;
};

const onPhoneContact = (phone: string) => {
  // replace extensions w/ comma's for phone support, TODO: improve
  window.location.href = `tel:${phone?.replace(' x ', ',').replace(' x', ',').replace('x', ',')}`;
};

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
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'contactGroup-view', params: { contactGroupId: slotProps.data.id } }">
          <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.name }}</div>
          <div class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.email }}</div>
        </router-link>
      </template>
    </Column>
    <Column field="title" sortable header="Title">
      <template #body="slotProps">
        <div class="text-gray-300 group-hover:text-teal-300">{{ slotProps.data.title }}</div>
        <div class="text-gray-400 group-hover:text-teal-400">{{ slotProps.data.department }}</div>
        <div class="text-gray-500 group-hover:text-teal-500">{{ slotProps.data.organization }}</div>
      </template>
    </Column>
    <Column field="phone" header="Phone">
      <template #body="slotProps">
        <div class="whitespace-nowrap">{{ slotProps.data.phone }}</div>
      </template>
    </Column>
    <Column field="notes" header="Notes">
      <template #body="slotProps">
        {{ slotProps.data.notes }}
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions
          :email="slotProps.data.email"
          :phone="slotProps.data.phone"
          @edit="$router.push({ name: 'contact-edit', params: { contactId: slotProps.data.id } })"
          @phone="onPhoneContact(slotProps.data.phone)"
          @email="onEmailContact(slotProps.data.email)"
        />
      </template>
    </Column>
  </DataTable>
</template>
