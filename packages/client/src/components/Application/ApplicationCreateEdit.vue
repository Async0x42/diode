<script setup lang="ts">
import { defineProps } from 'vue';
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';
import { useFormActions } from '~/logic';

const props = defineProps({
  application: { type: Object as PropType<IApplication> },
});

const { useField, onSubmit, onDelete } = useFormActions<IApplication>('/api/applications', 'applications', props.application);

const name = useField('name', {
  rule: { required: true },
});

const shortName = useField('shortName');
const description = useField('description');
const fqdns = useField('fqdns');
const servers = useField('servers');
const brds = useField('brds');
const rfcs = useField('rfcs');
const sslCertificates = useField('sslCertificates');
</script>

<template>
  <n-page-header class="mx-8 mt-6" title="Application Information" />
  <n-form class="mx-12" @submit="onSubmit">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model="name" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Short Name" path="shortName">
        <n-input v-model="shortName" placeholder="" />
      </n-form-item-gi>

      <FormServerMultiSelect label="Servers" :field="servers" name="server" :span="12" />
      <FormFqdnMultiSelect label="FQDNs" :field="fqdns" name="fqdns" :span="12" />
      <FormBrdMultiSelect label="BRDs" :field="brds" name="brds" :span="12" />
      <FormRfcMultiSelect label="RFCs" :field="rfcs" name="rfc" :span="12" />
      <FormSslCertificateMultiSelect label="SSL Certificates" :field="sslCertificates" name="sslCertificates" :span="12" />

      <n-form-item-gi :span="24" label="Description">
        <n-input
          v-model="description"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
      </n-form-item-gi>

      <div class="flex">
        <FormButtonDelete v-if="props.application" class="mr-3" @click="onDelete()" />
        <div class="flex"></div>
        <FormButtonCancel @click="$router.back()" />
        <FormButtonOk class="ml-3" />
      </div>
    </n-grid>
  </n-form>
</template>
