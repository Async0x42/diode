<script setup lang="ts">
import type { IDependency } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  dependency: { type: Object as PropType<IDependency> },
});

const { onSubmit, onDelete } = useFormActions<IDependency>('/api/dependencies', 'dependencies', props.dependency);

const model = createFormModel<IDependency>(['name', 'packageName', 'version', 'endOfSupportDate', 'applications', 'servers']);
const rules = {
  name: [
    {
      required: true,
      message: 'Name is required',
      trigger: ['input', 'blur'],
    },
  ],
};
assignDefaultsToForm(model, props.dependency);

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
  <n-page-header class="mx-8 mt-6" title="Dependency Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model:value="model.name" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Package Name" path="packageName">
        <n-input v-model:value="model.packageName" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Version" path="version">
        <n-input v-model:value="model.version" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="End of Support Date" path="endOfSupportDate">
        <FormDatePicker v-model:value="model.endOfSupportDate" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Applications" path="applications">
        <FormApplicationMultiSelect v-model:value="model.applications" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Servers" path="servers">
        <FormServerMultiSelect v-model:value="model.servers" />
      </n-form-item-gi>
    </n-grid>

    <n-space justify="end">
      <FormButtonDelete v-if="props.dependency" @delete="onDelete()" />
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk @click="handleValidateClick" />
    </n-space>
  </n-form>
</template>
