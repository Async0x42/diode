<script setup lang="ts">
import { defineProps } from 'vue';
import { useForm } from 'vue-hooks-form';
import type { ContactAttributes } from '@daiod/common';
import type { PropType } from 'vue';

const props = defineProps({
  contact: { type: Object as PropType<ContactAttributes>, required: true },
});

const { useField, handleSubmit, set } = useForm<ContactAttributes>({
  defaultValues: { ...props.contact },
});

const name = useField('name', {
  rule: { required: true },
});

const email = useField('email');
const phone = useField('phone');
const title = useField('title');
const organization = useField('organization');
const department = useField('department');
const notes = useField('notes');

// TODO: sent to REST API
const onSubmit = handleSubmit((data) =>
  console.log({
    id: props.contact.id,
    ...data,
  })
);
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
            <div class="sm:col-span-6">
              <label for="name" class="font-medium text-sm text-gray-700 block"> Name </label>
              <div class="mt-1">
                <input
                  id="name"
                  :ref="name.ref"
                  v-model="name.value"
                  type="text"
                  name="name"
                  autocomplete="name"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="email" class="font-medium text-sm text-gray-700 block"> Email address </label>
              <div class="mt-1">
                <input
                  id="email"
                  :ref="email.ref"
                  v-model="email.value"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="phone" class="font-medium text-sm text-gray-700 block"> Phone number </label>
              <div class="mt-1">
                <input
                  id="phone"
                  :ref="phone.ref"
                  v-model="phone.value"
                  name="phone"
                  type="tel"
                  autocomplete="tel"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="organization" class="font-medium text-sm text-gray-700 block"> Organization </label>
              <div class="mt-1">
                <input
                  id="organization"
                  :ref="organization.ref"
                  v-model="organization.value"
                  name="organization"
                  type="text"
                  autocomplete="organization"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="department" class="font-medium text-sm text-gray-700 block"> Department </label>
              <div class="mt-1">
                <input
                  id="department"
                  :ref="department.ref"
                  v-model="department.value"
                  name="department"
                  type="text"
                  autocomplete="department"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="title" class="font-medium text-sm text-gray-700 block"> Title </label>
              <div class="mt-1">
                <input
                  id="title"
                  :ref="title.ref"
                  v-model="title.value"
                  name="title"
                  type="text"
                  autocomplete="title"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label for="notes" class="font-medium text-sm text-gray-700 block"> Notes </label>
              <div class="mt-1">
                <textarea
                  id="notes"
                  :ref="notes.ref"
                  v-model="notes.value"
                  name="notes"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Write a few sentences detailing the role of this contact, and for what reasons they would be contacted.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <button
            type="button"
            class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="border border-transparent rounded-md font-medium bg-indigo-600 shadow-sm text-sm text-white ml-3 py-2 px-4 inline-flex justify-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
