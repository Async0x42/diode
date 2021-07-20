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
      <template v-for="contact in props.contactGroup.contacts" :key="contact.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">{{ contact.name }}</n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Supported Servers">
      <div v-for="server in props.contactGroup.supportedServers" :key="server.id" class="mb-2 group">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ server.name }}</n-text>
        <n-text tag="div" depth="2" class="group-hover:text-teal-300">{{ server.ip }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-300">{{ server.operatingSystem?.name }}</n-text>
      </div>
    </n-descriptions-item>
    <n-descriptions-item label="Notes" :span="3">
      <n-text tag="div" depth="1"> {{ props.contactGroup.notes }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
