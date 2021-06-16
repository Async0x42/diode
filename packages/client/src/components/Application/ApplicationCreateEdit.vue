<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';
import { useFormActions } from '~/logic';

const props = defineProps({
  application: { type: Object as PropType<IApplication> },
});

const { onSubmit, onDelete } = useFormActions<IApplication>('/api/applications', 'applications', props.application);

const model = ref({
  name: null as any,
  shortName: null as any,
  description: null as any,
  fqdns: null as any,
  servers: null as any,
  brds: null as any,
  rfcs: null as any,
  sslCertificates: null as any,
});
</script>

<template>
  <n-page-header class="mx-8 mt-6" title="Application Information" />
  <n-form class="mx-12" @submit="onSubmit">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Name" path="name">
        <n-input v-model="name" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Short Name" path="shortName">
        <n-input v-model="model.shortName" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Servers" path="servers">
        <FormServerMultiSelect v-model="model.servers" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="FQDNs" path="fqdns">
        <FormFqdnMultiSelect v-model="model.fqdns" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="BRDs" path="brds">
        <FormBrdMultiSelect v-model="model.brds" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="RFCs" path="rfcs">
        <FormRfcMultiSelect v-model="model.rfcs" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="SSL Certificates" path="sslCertificates">
        <FormSslCertificateMultiSelect v-model="model.sslCertificates" />
      </n-form-item-gi>

      <n-form-item-gi :span="24" label="Description" path="description">
        <n-input
          v-model="model.description"
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
