<script setup lang="ts">
import { defineProps } from 'vue';
import { useForm } from 'vue-hooks-form';
import { useAxios } from '@vueuse/integrations';
import { useRouter } from 'vue-router';
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contact: { type: Object as PropType<IContact> },
});

const { useField, handleSubmit } = useForm<IContact>({
  defaultValues: props.contact,
});

const router = useRouter();

const name = useField('name', {
  rule: { required: true },
});

const email = useField('email');
const phone = useField('phone');
const title = useField('title');
const organization = useField('organization');
const department = useField('department');
const notes = useField('notes');

// TODO: remove async and display loading information and errors
const onSubmit = handleSubmit(async (formData) => {
  if (props.contact == null) {
    // create
    const { data, isFinished } = await useAxios(`/api/contacts`, { method: 'POST', data: formData });
    router.push({ name: 'contacts' });
  } else {
    // update
    const { data, isFinished } = await useAxios(`/api/contacts/${props.contact.id}`, { method: 'PUT', data: formData });
    router.push({ name: 'contacts' });
  }

  // on success, display checkmark transition and then redirect to the new/edited contact
});

const onDelete = async () => {
  if (props.contact != null) {
    const { data, isFinished } = await useAxios(`/api/contacts/${props.contact.id}`, { method: 'DELETE' });
    router.push({ name: 'contacts' });
  }
};
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">Contact Information</h3>
            <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Name" :field="name" name="name" class="sm:col-span-3" />
            <FormInput label="Title" :field="title" name="title" class="sm:col-span-3" />

            <FormInput label="Organization" :field="organization" name="organization" class="sm:col-span-3" />
            <FormInput label="Department" :field="department" name="department" class="sm:col-span-3" />

            <FormInput label="Email address" :field="email" name="email" type="email" class="sm:col-span-3" />
            <FormInput label="Phone number" :field="phone" name="phone" type="tel" class="sm:col-span-3" />

            <FormTextArea label="Description" :field="notes" name="notes" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  Write a few sentences detailing the role of this contact, and for what reasons they would be contacted.
                </p>
              </template>
            </FormTextArea>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <FormButtonDelete v-if="props.contact" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
