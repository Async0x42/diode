<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
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
        <n-input v-model:value="model.brdNumber" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Priority" path="priority">
        <FormSelect v-model:value="model.priority" :options="['1', '2', '3']" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Current Status" path="status">
        <FormSelect v-model:value="model.status" :options="['Draft', 'Assessment', 'Design', 'WIF', 'SA', 'Implementation', 'Done']" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Submission Date" path="submissionDate">
        <FormDatePicker v-model:value="model.submissionDate" />
      </n-form-item-gi>

      <n-form-item-gi :span="24" label="Date Entered Into Bits" path="dateEnteredIntoBits">
        <FormDatePicker v-model:value="model.dateEnteredIntoBits" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Initial Cost" path="initialCost">
        <n-input v-model:value="model.initialCost" placeholder="" />
      </n-form-item-gi>

      <div class="flex">
        <FormButtonDelete v-if="props.brd" class="mr-3" @click="onDelete()" />
        <div class="flex"></div>
        <FormButtonCancel @click="$router.back()" />
        <FormButtonOk class="ml-3" @click="handleValidateClick" />
      </div>
    </n-grid>
  </n-form>

  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">BRD Information</h3>
            <p class="mt-1 text-sm text-gray-500">BRD details and notes.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Title" :field="title" name="title" class="sm:col-span-3" />
            <FormInput label="BRD Number" :field="brdNumber" name="brdNumber" class="sm:col-span-3" />

            <FormTextArea label="Description" :field="description" name="description" class="sm:col-span-6" />

            <FormInput label="Related Requests" :field="relatedRequests" name="relatedRequests" class="sm:col-span-6" />

            <FormSelect label="Priority" :field="priority" name="priority" class="sm:col-span-3" :options="['1', '2', '3']" />
            <FormSelect
              label="Current Status"
              :field="status"
              name="status"
              class="sm:col-span-3"
              :options="['Draft', 'Assessment', 'Design', 'WIF', 'SA', 'Implementation', 'Done']"
            />

            <FormDatePicker label="Submission Date" :field="submissionDate" name="submissionDate" class="sm:col-span-3" />
            <FormDatePicker label="Date Entered Into Bits" :field="dateEnteredIntoBits" name="dateEnteredIntoBits" class="sm:col-span-3" />

            <FormApplicationSelect label="Application" :field="application" name="application" class="sm:col-span-3" />
            <FormInput label="Initial Cost" :field="initialCost" name="initialCost" class="sm:col-span-3" />
            <FormInput label="Upkeep Cost" :field="upkeepCost" name="upkeepCost" class="sm:col-span-3" />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <FormButtonDelete v-if="props.brd" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
