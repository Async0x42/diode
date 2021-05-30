<script setup lang="ts">
import { defineProps } from 'vue';
import { useForm } from 'vue-hooks-form';
import { useAxios } from '@vueuse/integrations';
import { useRouter } from 'vue-router';
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  server: { type: Object as PropType<IServer> },
});

const { useField, handleSubmit } = useForm<IServer>({
  defaultValues: props.server,
});

const router = useRouter();

const name = useField('name', {
  rule: { required: true },
});

const ip = useField('ip');
const notes = useField('notes');
const fqdns = useField('fqdns');
const types = useField('types');
const location = useField('location');
const operatingSystem = useField('operatingSystem');

// TODO: remove async and display loading information and errors
const onSubmit = handleSubmit(async (formData) => {
  if (props.server == null) {
    // create
    const { data, isFinished } = await useAxios(`/api/servers`, { method: 'POST', data: formData });
    router.push({ name: 'servers' });
  } else {
    // update
    const { data, isFinished } = await useAxios(`/api/servers/${props.server.id}`, { method: 'PUT', data: formData });
    router.push({ name: 'servers' });
  }

  // on success, display checkmark transition and then redirect to the new/edited server
});

const onDelete = async () => {
  if (props.server != null) {
    const { data, isFinished } = await useAxios(`/api/servers/${props.server.id}`, { method: 'DELETE' });
    router.push({ name: 'servers' });
  }
};
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">Server Information</h3>
            <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Name" :field="name" name="name" class="sm:col-span-3" />
            <FormInput label="IP" :field="ip" name="ip" class="sm:col-span-3" />
            <FormFqdnMultiSelect label="FQDNs" :field="fqdns" name="fqdns" class="sm:col-span-3" />
            <FormServerTypeMultiSelect label="Server Types" :field="types" name="types" class="sm:col-span-3" />
            <FormServerLocationSelect label="Location" :field="location" name="location" class="sm:col-span-3" />
            <FormOperatingSystemSelect label="Operating System" :field="operatingSystem" name="operatingSystem" class="sm:col-span-3" />
            <FormTextArea label="Notes" :field="notes" name="notes" class="sm:col-span-6" />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <button
            v-if="props.server != null"
            type="button"
            class="border border-transparent rounded-md font-medium bg-red-600 shadow-sm text-sm text-white mr-3 py-2 px-4 inline-flex justify-center focus:outline-none hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            @click="onDelete()"
          >
            Delete
          </button>
          <div class="flex-1"></div>
          <button
            type="button"
            class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 focus:outline-none hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="$router.back()"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="border border-transparent rounded-md font-medium bg-indigo-600 shadow-sm text-sm text-white ml-3 py-2 px-4 inline-flex justify-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
