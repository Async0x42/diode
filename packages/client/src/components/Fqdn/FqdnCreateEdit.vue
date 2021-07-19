<script setup lang="ts">
import type { IFqdn } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  fqdn: { type: Object as PropType<IFqdn> },
});

const { onSubmit, onDelete } = useFormActions<IFqdn>('/api/fqdns', 'fqdn', props.fqdn);

const model = createFormModel<IFqdn>(['name', 'server', 'applications']);
const rules = {
  name: [
    {
      required: true,
      message: 'Name is required',
      trigger: ['input', 'blur'],
    },
  ],
};

assignDefaultsToForm(model, props.fqdn);

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
  <n-page-header class="mx-8 mt-6" title="FQDN Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model:value="model.name" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Server" path="server">
        <FormServerSelect v-model:value="model.server" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Applications" path="applications">
        <FormApplicationMultiSelect v-model:value="model.applications" />
      </n-form-item-gi>
    </n-grid>

    <n-space justify="end">
      <FormButtonDelete v-if="props.fqdn" @delete="onDelete()" />
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk @click="handleValidateClick" />
    </n-space>
  </n-form>
</template>
