<script setup lang="ts">
import { defineProps } from 'vue';
import { useForm } from 'vue-hooks-form';
import { useAxios } from '@vueuse/integrations';
import { useRouter } from 'vue-router';
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  brd: { type: Object as PropType<IBrd> },
});

const { useField, handleSubmit } = useForm<IBrd>({
  defaultValues: props.brd,
});

const router = useRouter();

const title = useField('title', {
  rule: { required: true },
});

const description = useField('description');
const relatedRequests = useField('relatedRequests');
const brdNumber = useField('brdNumber');
const priority = useField('priority');
const status = useField('status');
const submissionDate = useField('submissionDate');
const dateEnteredIntoBits = useField('dateEnteredIntoBits');
const initialCost = useField('initialCost');
const upkeepCost = useField('upkeepCost');
const application = useField('application');

// TODO: remove async and display loading information and errors
const onSubmit = handleSubmit(async (formData) => {
  if (props.brd == null) {
    // create
    const { data, isFinished } = await useAxios(`/api/brds`, { method: 'POST', data: formData });
    router.push({ name: 'brds' });
  } else {
    // update
    const { data, isFinished } = await useAxios(`/api/brds/${props.brd.id}`, { method: 'PUT', data: formData });
    router.push({ name: 'brds' });
  }

  // on success, display checkmark transition and then redirect to the new/edited brd
});

const onDelete = async () => {
  if (props.brd != null) {
    const { data, isFinished } = await useAxios(`/api/brds/${props.brd.id}`, { method: 'DELETE' });
    router.push({ name: 'brds' });
  }
};
</script>

<template>
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

            <FormInput label="Submission Date" :field="submissionDate" name="submissionDate" class="sm:col-span-3" />
            <FormInput label="Date Entered Into Bits" :field="dateEnteredIntoBits" name="dateEnteredIntoBits" class="sm:col-span-3" />

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
