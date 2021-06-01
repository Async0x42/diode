<script setup lang="ts">
import { defineProps } from 'vue';
import { useForm } from 'vue-hooks-form';
import { useAxios } from '@vueuse/integrations';
import { useRouter } from 'vue-router';
import type { IOperatingSystem } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  operatingSystem: { type: Object as PropType<IOperatingSystem> },
});

const { useField, handleSubmit } = useForm<IOperatingSystem>({
  defaultValues: props.operatingSystem,
});

const router = useRouter();

const name = useField('name', {
  rule: { required: true },
});

// TODO: remove async and display loading information and errors
const onSubmit = handleSubmit(async (formData) => {
  if (props.operatingSystem == null) {
    // create
    const { data, isFinished } = await useAxios(`/api/operatingSystems`, { method: 'POST', data: formData });
    router.push({ name: 'operatingSystems' });
  } else {
    // update
    const { data, isFinished } = await useAxios(`/api/operatingSystems/${props.operatingSystem.id}`, { method: 'PUT', data: formData });
    router.push({ name: 'operatingSystems' });
  }

  // on success, display checkmark transition and then redirect to the new/edited operatingSystem
});

const onDelete = async () => {
  if (props.operatingSystem != null) {
    const { data, isFinished } = await useAxios(`/api/operatingSystems/${props.operatingSystem.id}`, { method: 'DELETE' });
    router.push({ name: 'operatingSystems' });
  }
};
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">Operating System Information</h3>
            <p class="mt-1 text-sm text-gray-500">OS details and notes.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Name" :field="name" name="name" class="sm:col-span-3" />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <FormButtonDelete v-if="props.operatingSystem" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
