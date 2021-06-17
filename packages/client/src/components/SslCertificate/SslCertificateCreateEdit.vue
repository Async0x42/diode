<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  sslCertificate: { type: Object as PropType<ISslCertificate> },
});

const { onSubmit, onDelete } = useFormActions<ISslCertificate>('/api/sslCertificates', 'sslCertificates', props.sslCertificate);

const model = createFormModel<ISslCertificate>(['sans', 'expiry', 'applications', 'servers']);
const rules = {
  sans: [
    {
      required: true,
      message: 'SANs is required',
      trigger: ['input', 'blur'],
    },
  ],
};
assignDefaultsToForm(model, props.sslCertificate);

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
  <n-page-header class="mx-8 mt-6" title="SSL Certificate Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="SANs" path="sans">
        <n-input v-model:value="model.sans" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="24" label="Expiry" path="expiry">
        <n-date-picker v-model:value="model.expiry" type="date" clearable />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Applications" path="applications">
        <FormApplicationMultiSelect v-model:value="model.applications" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Servers" path="servers">
        <FormServerMultiSelect v-model:value="model.servers" placeholder="" />
      </n-form-item-gi>
    </n-grid>

    <div class="flex">
      <FormButtonDelete v-if="props.sslCertificate" class="mr-3" @click="onDelete()" />
      <div class="flex"></div>
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk class="ml-3" @click="handleValidateClick" />
    </div>
  </n-form>
</template>
