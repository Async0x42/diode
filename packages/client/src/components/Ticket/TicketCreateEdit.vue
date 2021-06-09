<script setup lang="ts">
import { defineProps } from 'vue';
import type { ITicket } from '@diode/common';
import type { PropType } from 'vue';
import { useFormActions } from '~/logic';

const props = defineProps({
  ticket: { type: Object as PropType<ITicket> },
});

const { useField, onSubmit, onDelete } = useFormActions<ITicket>('/api/tickets', 'tickets', props.ticket);

const name = useField('name', {
  rule: { required: true },
});

const startDate = useField('startDate');
const endDate = useField('endDate');
const details = useField('details');
const applications = useField('applications');
const servers = useField('servers');
const owners = useField('owners');
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">Ticket Information</h3>
            <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Name" :field="name" name="name" class="sm:col-span-3" />
            <FormDatePicker label="Start Date" :field="startDate" name="startDate" class="sm:col-span-3" />
            <FormDatePicker label="End Date" :field="endDate" name="endDate" class="sm:col-span-3" />
            <FormApplicationMultiSelect label="Applications" :field="applications" name="applications" class="sm:col-span-3" />
            <FormServerMultiSelect label="Servers" :field="servers" name="servers" class="sm:col-span-3" />
            <FormContactMultiSelect label="Owners" :field="owners" name="owners" class="sm:col-span-3" />
            <FormTextArea label="Details" :field="details" name="details" class="sm:col-span-6" />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <FormButtonDelete v-if="props.ticket" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
