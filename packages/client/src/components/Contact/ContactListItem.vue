<script setup lang="ts">
import { defineProps } from 'vue';
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contact: { type: Object as PropType<IContact>, required: true },
});

const onEmailContact = () => {
  window.location.href = `mailto:${props.contact.email}`;
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
    <n-td>
      <TableButton v-if="props.contact.email" @click="onEmailContact">
        <template #icon>
          <heroicons-solid-mail />
        </template>
      </TableButton>
      <TableButton v-if="props.contact.phone" @click="onPhoneContact">
        <template #icon>
          <heroicons-solid-phone />
        </template>
      </TableButton>
      <TableButtonEdit :to="{ name: 'contact-edit', params: { contactId: contact.id } }" />
    </n-td>
  </n-tr>
</template>
