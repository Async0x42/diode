<script setup lang="ts">
import { defineProps } from 'vue';
import type { IContactGroup } from '@diode/common';
import type { PropType } from 'vue';
import { useFormActions } from '~/logic';

const props = defineProps({
  contactGroup: { type: Object as PropType<IContactGroup> },
});

const { useField, onSubmit, onDelete } = useFormActions<IContactGroup>('/api/contactGroups', 'contactGroups', props.contactGroup);

const name = useField('name', {
  rule: { required: true },
});

const email = useField('email');
const phone = useField('phone');
const title = useField('title');
const organization = useField('organization');
const department = useField('department');
const notes = useField('notes');
const contacts = useField('contacts');
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">Contact Group Information</h3>
            <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Name" :field="name" name="name" class="sm:col-span-3" />
            <FormInput label="Title" :field="title" name="title" class="sm:col-span-3" />

            <FormInput label="Organization" :field="organization" name="organization" class="sm:col-span-3" />
            <FormInput label="Department" :field="department" name="department" class="sm:col-span-3" />

            <FormInput label="Email address" :field="email" name="email" type="email" class="sm:col-span-3" />
            <FormInput label="Phone number" :field="phone" name="phone" type="tel" class="sm:col-span-3" />

            <FormContactMultiSelect label="Contacts" :field="contacts" name="contacts" class="sm:col-span-3" />

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
          <FormButtonDelete v-if="props.contactGroup" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
