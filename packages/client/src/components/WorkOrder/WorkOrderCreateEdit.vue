<script setup lang="ts">
import type { IWorkOrder } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/composables';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  workOrder: { type: Object as PropType<IWorkOrder> },
});

const { onSubmit, onDelete } = useFormActions<IWorkOrder>('/api/workOrders', 'workOrders', props.workOrder);

const model = createFormModel<IWorkOrder>(['name', 'status', 'startDate', 'endDate', 'details', 'applications', 'servers', 'owners']);
const rules = {
  name: [
    {
      required: true,
      message: 'Name is required',
      trigger: ['input', 'blur'],
    },
  ],
  status: [
    {
      required: true,
      message: 'Status is required',
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

      <n-form-item-gi :span="6" label="Start Date" path="startDate">
        <FormDatePicker v-model:value="model.startDate" />
      </n-form-item-gi>

      <n-form-item-gi :span="6" label="End Date" path="endDate">
        <FormDatePicker v-model:value="model.endDate" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Status" path="status">
        <FormSelect v-model:value="model.status" :options="['New', 'In progress', 'Waiting on others', 'Backlog', 'Done', 'Cancelled']" />
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
