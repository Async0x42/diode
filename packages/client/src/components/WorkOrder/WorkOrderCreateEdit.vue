<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  workOrder: { type: Object as PropType<IWorkOrder> },
});

const { onSubmit, onDelete } = useFormActions<IWorkOrder>('/api/workOrders', 'workOrders', props.workOrder);

const model = createFormModel<IWorkOrder>(['name', 'startDate', 'endDate', 'details', 'applications', 'servers', 'owners']);
const rules = {
  name: [
    {
      required: true,
      message: 'Name is required',
      trigger: ['input', 'blur'],
    },
  ],
};
assignDefaultsToForm(model, props.workOrder);

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
  <n-page-header class="mx-8 mt-6" title="Work Order Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model:value="model.name" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Start Date" path="startDate">
        <n-date-picker v-model:value="model.startDate" type="date" clearable />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="End Date" path="endDate">
        <n-date-picker v-model:value="model.endDate" type="date" clearable />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Applications" path="applications">
        <FormApplicationMultiSelect v-model:value="model.applications" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Servers" path="servers">
        <FormServerMultiSelect v-model:value="model.servers" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Owners" path="owners">
        <FormContactMultiSelect v-model:value="model.owners" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Details" path="details">
        <n-input
          v-model:value="model.details"
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
      <FormButtonDelete v-if="props.workOrder" @delete="onDelete()" />
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk @click="handleValidateClick" />
    </n-space>
  </n-form>
</template>
