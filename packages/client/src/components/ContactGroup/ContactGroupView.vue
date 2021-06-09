<script setup lang="ts">
import { defineProps } from 'vue';
import type { IContactGroup } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contactGroup: { type: Object as PropType<IContactGroup>, required: true },
});
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">Contact Group Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">Contact group details and notes.</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <dl class="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Full name</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.contactGroup.name }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Title</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.contactGroup.title }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Organization</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.contactGroup.organization }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Department</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.contactGroup.department }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Email address</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.contactGroup.email }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Phone number</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.contactGroup.phone }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Contacts</dt>
          <dd v-for="contact in props.contactGroup.contacts" :key="contact.id" class="mt-1 text-sm text-gray-900">
            {{ contact.name }}
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="font-medium text-sm text-gray-500">Notes</dt>
          <dd class="mt-1 text-sm text-gray-900" v-html="props.contactGroup.notes" />
        </div>
      </dl>
    </div>
  </div>
</template>
