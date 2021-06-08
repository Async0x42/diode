<script setup lang="ts">
import { defineProps } from 'vue';
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { useFormActions } from '~/logic';

const props = defineProps({
  sslCertificate: { type: Object as PropType<ISslCertificate> },
});

const { useField, onSubmit, onDelete } = useFormActions<ISslCertificate>('/api/sslCertificates', 'sslCertificates', props.sslCertificate);

const sans = useField('sans', {
  rule: { required: true },
});

const expiry = useField('expiry');
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">SSL Certificate Information</h3>
            <p class="mt-1 text-sm text-gray-500">SSL Certificate details and notes.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Subject Alternate Names" :field="sans" name="sans" class="sm:col-span-3" />
            <FormInput label="Expiry" :field="expiry" name="expiry" class="sm:col-span-3" />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <FormButtonDelete v-if="props.sslCertificate" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
