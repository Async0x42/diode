<script setup lang="ts">
import { defineProps } from 'vue';
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contact: { type: Object as PropType<IContact>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Contact Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Full name">
      <n-text tag="div" depth="1">{{ props.contact.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Title">
      <n-text tag="div" depth="1">{{ props.contact.title }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Organization">
      <n-text tag="div" depth="1">{{ props.contact.organization }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Department">
      <n-text tag="div" depth="1">{{ props.contact.department }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Email address">
      <n-text tag="div" depth="1">{{ props.contact.email }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Phone number">
      <n-text tag="div" depth="1">{{ props.contact.phone }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Notes" :span="3">
      <n-text tag="div" depth="1"> {{ props.contact.notes }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Contact Groups">
      <template v-for="contactGroup in props.contact.contactGroups" :key="contactGroup.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">{{ contactGroup.name }}</n-text>
      </template>
    </n-descriptions-item>
  </n-descriptions>
</template>
