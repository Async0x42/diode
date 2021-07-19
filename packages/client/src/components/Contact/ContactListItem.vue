<script setup lang="ts">
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contact: { type: Object as PropType<IContact>, required: true },
});

const onEmailContact = () => {
  window.open(`mailto:${props.contact.email}`);
};

const onPhoneContact = () => {
  // replace extensions w/ comma's for phone support, TODO: improve
  window.location.href = `tel:${props.contact.phone?.replace(' x ', ',').replace(' x', ',').replace('x', ',')}`;
};
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'contact-view', params: { contactId: contact.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.contact.name }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.contact.email }}</n-text>
      </router-link>
    </n-td>
    <n-td>
      <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.contact.title }}</n-text>
      <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ props.contact.department }}</n-text>
      <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.contact.organization }}</n-text>
    </n-td>
    <n-td class="whitespace-nowrap">{{ props.contact.phone }}</n-td>
    <n-td>{{ props.contact.notes }}</n-td>
    <TableCellQuickActions
      :email="props.contact.email"
      :phone="props.contact.phone"
      @edit="$router.push({ name: 'contact-edit', params: { contactId: contact.id } })"
      @phone="onPhoneContact"
      @email="onEmailContact"
    />
  </n-tr>
</template>
