<script setup lang="ts">
import type { IContactGroup } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contactGroup: { type: Object as PropType<IContactGroup>, required: true },
});

const onEmailContact = () => {
  window.location.href = `mailto:${props.contactGroup.email}`;
};

const onPhoneContact = () => {
  // replace extensions w/ comma's for phone support, TODO: improve
  window.location.href = `tel:${props.contactGroup.phone?.replace(' x ', ',').replace(' x', ',').replace('x', ',')}`;
};
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'contactGroup-view', params: { contactGroupId: contactGroup.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.contactGroup.name }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.contactGroup.email }}</n-text>
      </router-link>
    </n-td>
    <n-td>
      <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.contactGroup.title }}</n-text>
      <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ props.contactGroup.department }}</n-text>
      <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.contactGroup.organization }}</n-text>
    </n-td>
    <n-td class="whitespace-nowrap">{{ props.contactGroup.phone }}</n-td>
    <n-td>{{ props.contactGroup.notes }}</n-td>
    <TableCellQuickActions
      :email="props.contactGroup.email"
      :phone="props.contactGroup.phone"
      @edit="$router.push({ name: 'contactGroup-edit', params: { contactGroupId: contactGroup.id } })"
      @phone="onPhoneContact"
      @email="onEmailContact"
    />
  </n-tr>
</template>
