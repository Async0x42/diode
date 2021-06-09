<script setup lang="ts">
import { defineProps } from 'vue';
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { parseJSON, format } from 'date-fns';
const { n } = useI18n();

const props = defineProps({
  brd: { type: Object as PropType<IBrd>, required: true },
});

const formatDate = (jsonDate?: Date) => jsonDate && format(parseJSON(jsonDate), 'yyyy-MM-dd');
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">BRD Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">BRD details and notes.</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <dl class="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Title</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.brd.title }}</dd>
          <div class="text-sm text-gray-500">{{ props.brd.brdNumber }}</div>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Application</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.brd.application?.name }}</dd>
          <dd class="text-sm text-gray-500">{{ props.brd.application?.shortName }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Description</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.brd.description }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Related Requests</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.brd.relatedRequests }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Priority</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.brd.priority }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Status</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.brd.status }}</dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="font-medium text-sm text-gray-500">Submission Date</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ formatDate(props.brd.submissionDate) }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Date Entered Into Bits</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ formatDate(props.brd.dateEnteredIntoBits) }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Initial Cost</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ n(props.brd.initialCost || 0, 'currency') }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Upkeep Cost</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ n(props.brd.upkeepCost || 0, 'currency') }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
