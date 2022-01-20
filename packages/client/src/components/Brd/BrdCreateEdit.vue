<script setup lang="ts">
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/composables';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  brd: { type: Object as PropType<IBrd> },
});

const { onSubmit, onDelete } = useFormActions<IBrd>('/api/brds', 'brds', props.brd);

const model = createFormModel<IBrd>([
  'title',
  'description',
  'relatedRequests',
  'brdNumber',
  'priority',
  'status',
  'submissionDate',
  'dateEnteredIntoBits',
  'initialCost',
  'upkeepCost',
  'application',
]);
const rules = {
  title: [
    {
      required: true,
      message: 'Title is required',
      trigger: ['input', 'blur'],
    },
  ],
};
assignDefaultsToForm(model, props.brd);

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
  <n-page-header class="mx-8 mt-6" title="BRD Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Title" path="title">
        <n-input v-model:value="model.title" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Description" path="description">
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

      <n-form-item-gi :span="12" label="Related Requests" path="relatedRequests">
        <n-input v-model:value="model.relatedRequests" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Brd Number" path="brdNumber">
        <n-input-number v-model:value="model.brdNumber" :show-button="false" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Priority" path="priority">
        <n-input-number v-model:value="model.priority" :min="1" :max="3" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Current Status" path="status">
        <FormSelect
          v-model:value="model.status"
          :options="['Draft', 'Assessment', 'Design', 'WIF', 'SA', 'Implementation', 'Solution Setup', 'Done']"
        />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Submission Date" path="submissionDate">
        <FormDatePicker v-model:value="model.submissionDate" />
      </n-form-item-gi>

      <n-form-item-gi :span="24" label="Date Entered Into Bits" path="dateEnteredIntoBits">
        <FormDatePicker v-model:value="model.dateEnteredIntoBits" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Initial Cost" path="initialCost">
        <n-input-number v-model:value="model.initialCost" :show-button="false" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Upkeep Cost" path="upkeepCost">
        <n-input-number v-model:value="model.upkeepCost" :show-button="false" placeholder="" />
      </n-form-item-gi>
    </n-grid>

    <n-space justify="end">
      <FormButtonDelete v-if="props.brd" @delete="onDelete()" />
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk @click="handleValidateClick" />
    </n-space>
  </n-form>
</template>
