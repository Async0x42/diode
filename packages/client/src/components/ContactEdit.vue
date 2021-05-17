<script setup lang="ts">
import { defineProps } from 'vue';
import { useForm } from 'vue-hooks-form';
import type { ContactAttributes } from '@daiod/common';
import type { PropType } from 'vue';

const props = defineProps({
  contact: { type: Object as PropType<ContactAttributes>, required: true },
});

const { useField, handleSubmit } = useForm<ContactAttributes>({
  defaultValues: { ...props.contact },
});

const name = useField('name', {
  rule: { required: true },
});

const email = useField('email');
const title = useField('title');
const organization = useField('organization');
const department = useField('department');
const notes = useField('notes');

const onSubmit = (data) => handleSubmit(data);
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">Personal Information</h3>
            <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label for="name" class="font-medium text-sm text-gray-700 block"> Name </label>
              <div class="mt-1">
                <input
                  id="name"
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
                  name="phone"
                  type="tel"
                  autocomplete="tel"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="country" class="font-medium text-sm text-gray-700 block"> Country / Region </label>
              <div class="mt-1">
                <select
                  id="country"
                  name="country"
                  autocomplete="country"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label for="notes" class="font-medium text-sm text-gray-700 block"> Notes </label>
              <div class="mt-1">
                <textarea
                  id="notes"
                  name="notes"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">Write a few sentences detailing the role of this contact.</p>
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
