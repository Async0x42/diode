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
    <div class="py-5 px-4 sm:px-6">
      <h3 class="font-medium text-lg text-gray-900 leading-6">Contact Information</h3>
      <p class="mt-1 text-sm max-w-2xl text-gray-500">Personal details and notes.</p>
    </div>
    <div class="border-t border-gray-200 py-5 px-4 sm:px-6">
      <form class="divide-y space-y-8 divide-gray-200">
        <div class="divide-y space-y-8 divide-gray-200">
          <div>
            <div>
              <h3 class="font-medium text-lg text-gray-900 leading-6">Profile</h3>
              <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
            </div>

            <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
              <div class="sm:col-span-4">
                <label for="username" class="font-medium text-sm text-gray-700 block"> Username </label>
                <div class="rounded-md flex shadow-sm mt-1">
                  <span class="border rounded-l-md bg-gray-50 border-r-0 border-gray-300 px-3 text-gray-500 inline-flex items-center sm:text-sm">
                    workcation.com/
                  </span>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    autocomplete="username"
                    class="rounded-none rounded-r-md border-gray-300 flex-1 w-full min-w-0 block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="about" class="font-medium text-sm text-gray-700 block"> About </label>
                <div class="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    :rows="3"
                    class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
              </div>

              <div class="sm:col-span-6">
                <label for="photo" class="font-medium text-sm text-gray-700 block"> Photo </label>
                <div class="flex mt-1 items-center">
                  <span class="rounded-full bg-gray-100 h-12 w-12 overflow-hidden">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <button
                    type="button"
                    class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm ml-5 py-2 px-3 text-gray-700 leading-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="cover_photo" class="font-medium text-sm text-gray-700 block"> Cover photo </label>
                <div class="border-dashed rounded-md flex border-2 border-gray-300 mt-1 px-6 pt-5 pb-6 justify-center">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 text-gray-400 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="bg-white rounded-md cursor-pointer font-medium text-indigo-600 relative hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-8">
            <div>
              <h3 class="font-medium text-lg text-gray-900 leading-6">Personal Information</h3>
              <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
            </div>
            <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="first_name" class="font-medium text-sm text-gray-700 block"> First name </label>
                <div class="mt-1">
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    autocomplete="given-name"
                    class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last_name" class="font-medium text-sm text-gray-700 block"> Last name </label>
                <div class="mt-1">
                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    autocomplete="family-name"
                    class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
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
  </div>
</template>
