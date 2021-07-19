<script setup lang="ts">
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  contact: { type: Object as PropType<IContact> },
});

const { onSubmit, onDelete } = useFormActions<IContact>('/api/contacts', 'contacts', props.contact);

const model = createFormModel<IContact>(['name', 'email', 'phone', 'title', 'organization', 'department', 'notes', 'contactGroups']);
const rules = {
  name: [
    {
      required: true,
      message: 'Name is required',
      trigger: ['input', 'blur'],
    },
  ],
};
assignDefaultsToForm(model, props.contact);

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
  <n-page-header class="mx-8 mt-6" title="Contact Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model:value="model.name" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Title" path="title">
        <n-input v-model:value="model.title" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Organization" path="organization">
        <n-input v-model:value="model.organization" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Department" path="department">
        <n-input v-model:value="model.department" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Email address" path="email">
        <n-input v-model:value="model.email" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Phone number" path="phone">
        <n-input v-model:value="model.phone" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Contact groups" path="contactGroups">
        <FormContactGroupMultiSelect v-model:value="model.contactGroups" placeholder="" />
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
        <template #note>
          <p class="mt-2 text-sm text-gray-500">
            Write a few sentences detailing the role of this contact, and for what reasons they would be contacted.
          </p>
        </template>
      </n-form-item-gi>
    </n-grid>

    <n-space justify="end">
      <FormButtonDelete v-if="props.contact" @delete="onDelete()" />
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk @click="handleValidateClick" />
    </n-space>
  </n-form>
</template>
