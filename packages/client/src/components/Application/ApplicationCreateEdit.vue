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

      <n-form-item-gi :span="12" label="Servers" path="servers">
        <FormServerMultiSelect v-model="servers.value" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="FQDNs" path="fqdns">
        <FormFqdnMultiSelect v-model="fqdns.value" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="BRDs" path="brds">
        <FormBrdMultiSelect v-model="brds.value" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="RFCs" path="rfcs">
        <FormRfcMultiSelect v-model="rfcs.value" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="SSL Certificates" path="sslCertificates">
        <FormSslCertificateMultiSelect v-model="sslCertificates.value" />
      </n-form-item-gi>

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
