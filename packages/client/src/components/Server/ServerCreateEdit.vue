<script setup lang="ts">
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  server: { type: Object as PropType<IServer> },
});

const { onSubmit, onDelete } = useFormActions<IServer>('/api/servers', 'servers', props.server);

const model = createFormModel<IServer>([
  'name',
  'ip',
  'notes',
  'fqdns',
  'types',
  'location',
  'operatingSystem',
  'applications',
  'physicalServer',
  'storageSpace',
  'systemMemory',
  'sslCertificates',
  'environment',
  'network',
  'zone',
  'dependencies',
  'supportGroups',
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
  <n-page-header class="mx-8 mt-6" title="Server Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model:value="model.name" placeholder="" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="IP" path="ip">
        <n-input v-model:value="model.ip" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="6" label="Storage Space" path="storageSpace">
        <n-input-number v-model:value="model.storageSpace" class="w-full" :show-button="false" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="6" label="System Memory" path="systemMemory">
        <n-input-number v-model:value="model.systemMemory" class="w-full" :show-button="false" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Environment" path="environment">
        <FormEnvironmentSelect v-model:value="model.environment" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Zone" path="zone">
        <FormZoneSelect v-model:value="model.zone" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Network" path="network">
        <FormNetworkSelect v-model:value="model.network" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="FQDNs" path="fqdns">
        <FormFqdnMultiSelect v-model:value="model.fqdns" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Server Types" path="types">
        <FormServerTypeMultiSelect v-model:value="model.types" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Location" path="location">
        <FormServerLocationSelect v-model:value="model.location" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Applications" path="applications">
        <FormApplicationMultiSelect v-model:value="model.applications" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="SSL Certificates" path="sslCertificates">
        <FormSslCertificateMultiSelect v-model:value="model.sslCertificates" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Operating System" path="operatingSystem">
        <FormOperatingSystemSelect v-model:value="model.operatingSystem" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Physical Server" path="physicalServer">
        <FormPhysicalServerSelect v-model:value="model.physicalServer" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Dependencies" path="dependencies">
        <FormDependencyMultiSelect v-model:value="model.dependencies" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Support Groups" path="supportGroups">
        <FormContactGroupMultiSelect v-model:value="model.supportGroups" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Notes" path="notes">
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
