<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { IZone } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  zone: { type: Object as PropType<IZone> },
});

const { onSubmit, onDelete } = useFormActions<IZone>('/api/zones', 'zones', props.zone);

const model = createFormModel<IZone>(['name', 'shortName']);
const rules = {
  name: [
    {
      required: true,
      message: 'Name is required',
      trigger: ['input', 'blur'],
    },
  ],
};
assignDefaultsToForm(model, props.zone);

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
  <n-page-header class="mx-8 mt-6" title="Zone Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model:value="model.name" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Short Name" path="shortName">
        <n-input v-model:value="model.shortName" placeholder="" />
      </n-form-item-gi>
    </n-grid>

    <div class="flex">
      <FormButtonDelete v-if="props.zone" class="mr-3" @click="onDelete()" />
      <div class="flex"></div>
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk class="ml-3" @click="handleValidateClick" />
    </div>
  </n-form>
</template>
