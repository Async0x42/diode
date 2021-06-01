<script setup lang="ts">
import { defineProps } from 'vue';
import { useForm } from 'vue-hooks-form';
import { useAxios } from '@vueuse/integrations';
import { useRouter } from 'vue-router';
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication> },
});

const { useField, handleSubmit } = useForm<IApplication>({
  defaultValues: props.application,
});

const router = useRouter();

const name = useField('name', {
  rule: { required: true },
});

const shortName = useField('shortName');
const description = useField('description');
const fqdns = useField('fqdns');
const servers = useField('servers');
const brds = useField('brds');
const rfcs = useField('rfcs');

// TODO: remove async and display loading information and errors
const onSubmit = handleSubmit(async (formData) => {
  if (props.application == null) {
    // create
    const { data, isFinished } = await useAxios(`/api/applications`, { method: 'POST', data: formData });
    router.push({ name: 'applications' });
  } else {
    // update
    const { data, isFinished } = await useAxios(`/api/applications/${props.application.id}`, { method: 'PUT', data: formData });
    router.push({ name: 'applications' });
  }

  // on success, display checkmark transition and then redirect to the new/edited application
});

const onDelete = async () => {
  if (props.application != null) {
    const { data, isFinished } = await useAxios(`/api/applications/${props.application.id}`, { method: 'DELETE' });
    router.push({ name: 'applications' });
  }
};
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">Application Information</h3>
            <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Name" :field="name" name="name" class="sm:col-span-3" />
            <FormInput label="Short Name" :field="shortName" name="shortName" class="sm:col-span-3" />

            <FormServerMultiSelect label="Servers" :field="servers" name="server" class="sm:col-span-3" />
            <FormFqdnMultiSelect label="FQDNs" :field="fqdns" name="fqdns" class="sm:col-span-3" />
            <FormBrdMultiSelect label="BRDs" :field="brds" name="brds" class="sm:col-span-3" />
            <FormRfcMultiSelect label="RFCs" :field="rfcs" name="rfc" class="sm:col-span-3" />
            <FormTextArea label="Description" :field="description" name="description" class="sm:col-span-6" :rows="6" />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <FormButtonDelete v-if="props.application" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
