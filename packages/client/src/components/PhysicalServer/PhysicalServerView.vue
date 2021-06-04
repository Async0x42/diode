<script setup lang="ts">
import { defineProps } from 'vue';
import type { IPhysicalServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IPhysicalServer>, required: true },
});
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">Physical Server Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">{{ props.server.name }}</p>
      <p class="text-sm max-w-2xl text-gray-500">{{ props.server.location?.name }}</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <dl class="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Base OS</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.baseOperatingSystem }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Hypervisor</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.hypervisor }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Device Manufacturer</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.deviceManufacturer }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Device Model</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.deviceModel }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Processor Manufacturer</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.processorManufacturer }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Processor Model</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.processorModel }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Processor Frequency (GHz)</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.processorFrequency }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Number of Processors</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.numberOfProcessors }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Number of Cores</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.numberOfCores }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Number of Virtual Machines</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.numberOfVirtualMachines }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Cluster Name</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ props.server.clusterName }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="font-medium text-sm text-gray-500">Servers (Virtual Machines)</dt>
          <dd v-for="server in props.server.servers" :key="server.id" class="mt-1 text-sm text-gray-900">
            {{ server.name }}
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="font-medium text-sm text-gray-500">Notes</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ props.server.notes }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
