<script setup lang="ts">
import { defineProps } from 'vue';
import type { IPhysicalServer } from '@diode/common';
import type { PropType } from 'vue';
import { useFormActions } from '~/logic';

const props = defineProps({
  server: { type: Object as PropType<IPhysicalServer> },
});

const { useField, onSubmit, onDelete } = useFormActions<IPhysicalServer>('/api/physicalServers', 'physicalServers', props.server);

const name = useField('name', {
  rule: { required: true },
});

const baseOperatingSystem = useField('baseOperatingSystem');
const hypervisor = useField('hypervisor');
const deviceManufacturer = useField('deviceManufacturer');
const deviceModel = useField('deviceModel');
const processorManufacturer = useField('processorManufacturer');
const processorModel = useField('processorModel');
const processorFrequency = useField('processorFrequency');
const numberOfProcessors = useField('numberOfProcessors', {
  rule: {
    type: 'number',
    validator: (rule, value) => {
      try {
        parseInt(value);
        return true;
      } catch {
        return new Error('value must be a number');
      }
    },
  },
});
const numberOfCores = useField('numberOfCores', {
  rule: {
    type: 'number',
    validator: (rule, value) => {
      try {
        parseInt(value);
        return true;
      } catch {
        return new Error('value must be a number');
      }
    },
  },
});
const numberOfVirtualMachines = useField('numberOfVirtualMachines', {
  rule: {
    validator: (rule, value) => {
      try {
        parseInt(value);
        return true;
      } catch {
        return new Error('value must be a number');
      }
    },
  },
});
const clusterName = useField('clusterName');
const notes = useField('notes');
const servers = useField('servers');
const location = useField('location');
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">Server Information</h3>
            <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Name" :field="name" name="name" class="sm:col-span-3" />
            <FormInput label="Base OS" :field="baseOperatingSystem" name="baseOperatingSystem" class="sm:col-span-3" />
            <FormInput label="Hypervisor" :field="hypervisor" name="hypervisor" class="sm:col-span-3" />
            <FormInput label="Device Manufacturer" :field="deviceManufacturer" name="deviceManufacturer" class="sm:col-span-3" />
            <FormInput label="Device Model" :field="deviceModel" name="deviceModel" class="sm:col-span-3" />
            <FormInput label="Processor Manufacturer" :field="processorManufacturer" name="name" class="sm:col-span-3" />
            <FormInput label="Processor Model" :field="processorModel" name="processorModel" class="sm:col-span-3" />
            <FormInput label="Processor Frequency (GHz)" :field="processorFrequency" name="processorFrequency" class="sm:col-span-3" />
            <FormInput label="Number of Processors" :field="numberOfProcessors" name="numberOfProcessors" class="sm:col-span-3" />
            <FormInput label="Number of Cores" :field="numberOfCores" name="numberOfCores" class="sm:col-span-3" />
            <FormInput label="Number of Virtual Machines" :field="numberOfVirtualMachines" name="numberOfVirtualMachines" class="sm:col-span-3" />
            <FormInput label="Cluster Name" :field="clusterName" name="clusterName" class="sm:col-span-3" />
            <FormServerLocationSelect label="Location" :field="location" name="location" class="sm:col-span-3" />
            <FormServerMultiSelect label="Servers" :field="servers" name="servers" class="sm:col-span-3" />
            <FormTextArea label="Notes" :field="notes" name="notes" class="sm:col-span-6" />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <FormButtonDelete v-if="props.server" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
