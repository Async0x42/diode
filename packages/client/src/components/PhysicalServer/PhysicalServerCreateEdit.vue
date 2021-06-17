<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { IPhysicalServer } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  server: { type: Object as PropType<IPhysicalServer> },
});

const { onSubmit, onDelete } = useFormActions<IPhysicalServer>('/api/physicalServers', 'physicalServers', props.server);
const model = createFormModel<IPhysicalServer>([
  'name',
  'baseOperatingSystem',
  'hypervisor',
  'deviceManufacturer',
  'deviceModel',
  'processorManufacturer',
  'processorModel',
  'processorFrequency',
  'numberOfProcessors',
  'numberOfCores',
  'numberOfVirtualMachines',
  'clusterName',
  'notes',
  'servers',
  'location',
]);
const rules = {
  name: [
    {
      required: true,
      message: 'Name is required',
      trigger: ['input', 'blur'],
    },
  ],
};

assignDefaultsToForm(model, props.server);

const formRef = ref(null as any);
const handleValidateClick = (e: Event) => {
  e.preventDefault();
  formRef.value.validate((errors: any) => {
    if (!errors) {
      message.success('Valid');
      onSubmit(model.value);
    } else {
      console.log(errors);
      message.error('Invalid');
    }
  });
};
</script>

<template>
  <n-page-header class="mx-8 mt-6" title="Physical Server Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model:value="model.name" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Base OS" path="baseOperatingSystem">
        <n-input v-model:value="model.baseOperatingSystem" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Hypervisor" path="hypervisor">
        <n-input v-model:value="model.hypervisor" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Device Manufacturer" path="deviceManufacturer">
        <n-input v-model:value="model.deviceManufacturer" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Device Model" path="deviceModel">
        <n-input v-model:value="model.deviceModel" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Processor Manufacturer" path="processorManufacturer">
        <n-input v-model:value="model.processorManufacturer" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Processor Model" path="processorModel">
        <n-input v-model:value="model.processorModel" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Processor Frequency (GHz)" path="processorFrequency">
        <n-input v-model:value="model.processorFrequency" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Number of Processors" path="numberOfProcessors">
        <n-input-number v-model:value="model.numberOfProcessors" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Number of Cores" path="numberOfCores">
        <n-input-number v-model:value="model.numberOfCores" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Number of Virtual Machines" path="numberOfVirtualMachines">
        <n-input v-model:value="model.numberOfVirtualMachines" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Cluster Name" path="clusterName">
        <n-input v-model:value="model.clusterName" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Server Location" path="location">
        <FormServerLocationSelect v-model:value="model.location" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Servers" path="server">
        <FormServerMultiSelect v-model:value="model.servers" />
      </n-form-item-gi>
      <n-form-item-gi :span="24" label="Notes" path="notes">
        <n-input
          v-model:value="model.notes"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
      </n-form-item-gi>
    </n-grid>

    <n-space justify="end">
      <FormButtonDelete v-if="props.server" @delete="onDelete()" />
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk @click="handleValidateClick" />
    </n-space>
  </n-form>
</template>
