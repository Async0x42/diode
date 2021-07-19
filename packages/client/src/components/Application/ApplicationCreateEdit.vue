<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  application: { type: Object as PropType<IApplication> },
});

const { onSubmit, onDelete } = useFormActions<IApplication>('/api/applications', 'applications', props.application);

// TODO: maybe fqdns interface etc should be listed as number[], overridden on the backend interface
const model = createFormModel<IApplication>([
  'name',
  'shortName',
  'description',
  'fqdns',
  'servers',
  'brds',
  'rfcs',
  'sslCertificates',
  'dependencies',
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

assignDefaultsToForm(model, props.application);

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
  <n-page-header class="mx-8 mt-6" title="Application Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model:value="model.name" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Short Name" path="shortName">
        <n-input v-model:value="model.shortName" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Servers" path="servers">
        <FormServerMultiSelect v-model:value="model.servers" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="FQDNs" path="fqdns">
        <FormFqdnMultiSelect v-model:value="model.fqdns" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="BRDs" path="brds">
        <FormBrdMultiSelect v-model:value="model.brds" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="RFCs" path="rfcs">
        <FormRfcMultiSelect v-model:value="model.rfcs" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="SSL Certificates" path="sslCertificates">
        <FormSslCertificateMultiSelect v-model:value="model.sslCertificates" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Dependencies" path="dependencies">
        <FormDependencyMultiSelect v-model:value="model.dependencies" />
      </n-form-item-gi>

      <n-form-item-gi :span="24" label="Description" path="description">
        <n-input
          v-model:value="model.description"
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
      <FormButtonDelete v-if="props.application" @delete="onDelete()" />
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk @click="handleValidateClick" />
    </n-space>
  </n-form>
</template>
