<script setup lang="ts">
import type { IPhysicalServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IPhysicalServer>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Physical Server Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.server.name }}</n-text>
      <n-text tag="div" depth="3">{{ props.server.location?.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Base OS">
      <n-text tag="div" depth="1">{{ props.server.baseOperatingSystem }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Hypervisor">
      <n-text tag="div" depth="1">{{ props.server.hypervisor }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Device Manufacturer">
      <n-text tag="div" depth="1">{{ props.server.deviceManufacturer }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Device Model">
      <n-text tag="div" depth="1">{{ props.server.deviceModel }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Processor Manufacturer">
      <n-text tag="div" depth="1">{{ props.server.processorManufacturer }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Processor Model">
      <n-text tag="div" depth="1">{{ props.server.processorModel }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Processor Frequency (GHz)">
      <n-text tag="div" depth="1">{{ props.server.processorFrequency }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Number of Processors">
      <n-text tag="div" depth="1">{{ props.server.numberOfProcessors }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Number of Cores">
      <n-text tag="div" depth="1">{{ props.server.numberOfCores }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Number of Virtual Machines">
      <n-text tag="div" depth="1">{{ props.server.numberOfVirtualMachines }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Cluster Name">
      <n-text tag="div" depth="1">{{ props.server.clusterName }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Servers (Virtual Machines)">
      <ServersWidget :servers="props.server.servers" />
    </n-descriptions-item>
    <n-descriptions-item label="Notes">
      <n-text tag="div" depth="1">{{ props.server.notes }}</n-text>
    </n-descriptions-item>
  </n-descriptions>
</template>
