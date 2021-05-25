<script setup lang="ts">
import { defineProps } from 'vue';
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  rfc: { type: Object as PropType<IRfc>, required: true },
});
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">RFC Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">RFC details and notes.</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <dl class="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Title</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.title }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Class</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.class }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Purpose</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.purpose }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">IA Due Date</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.impactAssessmentDueDate }}</dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="font-medium text-sm text-gray-500">Description</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.description }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Parent System</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.parentSystem }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Business Case</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.businessCase }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Security Implications</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.securityImplications }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Affected Infrastructure</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.affectedInfrastructure }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Affected Information System</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.affectedInformationSystem }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Affected Configuration Items</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.affectedConfigurationItems }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Concept Of Operation</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.conceptOfOperation }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Concept Of Testing</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.conceptOfTesting }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Concept Of Implementation</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.conceptOfImplementation }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Backout Plan</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.rfc.backoutPlan }}</dd>
        </div>
        <!-- <div class="sm:col-span-2">
          <dt class="font-medium text-sm text-gray-500">Attachments</dt>
          <dd class="mt-1 text-sm text-gray-900">
            <ul class="divide-y border rounded-md divide-gray-200 border-gray-200">
              <li class="flex text-sm py-3 pr-4 pl-3 items-center justify-between">
                <div class="flex flex-1 w-0 items-center">
                  <heroicons-solid-paper-clip class="flex-shrink-0 h-5 text-gray-400 w-5" aria-hidden="true" />
                  <span class="flex-1 ml-2 w-0 truncate"> resume_back_end_developer.pdf </span>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                </div>
              </li>
              <li class="flex text-sm py-3 pr-4 pl-3 items-center justify-between">
                <div class="flex flex-1 w-0 items-center">
                  <heroicons-solid-paper-clip class="flex-shrink-0 h-5 text-gray-400 w-5" aria-hidden="true" />
                  <span class="flex-1 ml-2 w-0 truncate"> coverletter_back_end_developer.pdf </span>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                </div>
              </li>
            </ul>
          </dd>
        </div> -->
      </dl>
    </div>
  </div>
</template>
