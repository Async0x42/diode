<script setup lang="ts">
import type { IContactGroup } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contactGroup: { type: Object as PropType<IContactGroup>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Contact Group Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Full name">
      <n-text tag="div" depth="1">{{ props.contactGroup.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Title">
      <n-text tag="div" depth="1">{{ props.contactGroup.title }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Organization">
      <n-text tag="div" depth="1">{{ props.contactGroup.organization }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Department">
      <n-text tag="div" depth="1">{{ props.contactGroup.department }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Email address">
      <n-text tag="div" depth="1">{{ props.contactGroup.email }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Phone number">
      <n-text tag="div" depth="1">{{ props.contactGroup.phone }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Contacts">
      <ContactsWidget :contacts="props.contactGroup.contacts" />
    </n-descriptions-item>
    <n-descriptions-item label="Supported Servers">
      <ServersWidget :servers="props.contactGroup.supportedServers" />
    </n-descriptions-item>
    <n-descriptions-item label="Notes" :span="3">
      <n-text tag="div" depth="1"> {{ props.contactGroup.notes }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
