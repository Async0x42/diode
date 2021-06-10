<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';
import { useFormActions } from '~/logic';

const props = defineProps({
  server: { type: Object as PropType<IServer> },
});

const { useField, onSubmit, onDelete } = useFormActions<IServer>('/api/servers', 'servers', props.server);

const name = useField('name', {
  rule: { required: true },
});

const ip = useField('ip');
const notes = useField('notes');
const fqdns = useField('fqdns');
const types = useField('types');
const location = useField('location');
const operatingSystem = useField('operatingSystem');
const applications = useField('applications');
const physicalServer = useField('physicalServer');
const sslCertificates = useField('sslCertificates');
const environment = useField('environment');
const network = useField('network');
const zone = useField('zone');
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
            <FormEnvironmentSelect label="Environment" :field="environment" name="environment" class="sm:col-span-3" />
            <FormZoneSelect label="Zone" :field="zone" name="zone" class="sm:col-span-3" />
            <FormNetworkSelect label="Network" :field="network" name="network" class="sm:col-span-3" />
            <FormFqdnMultiSelect label="FQDNs" :field="fqdns" name="fqdns" class="sm:col-span-3" />
            <FormServerTypeMultiSelect label="Server Types" :field="types" name="types" class="sm:col-span-3" />
            <FormServerLocationSelect label="Location" :field="location" name="location" class="sm:col-span-3" />
            <FormApplicationMultiSelect label="Applications" :field="applications" name="applications" class="sm:col-span-3" />
            <FormSslCertificateMultiSelect label="SSL Certificates" :field="sslCertificates" name="sslCertificates" class="sm:col-span-3" />
            <FormOperatingSystemSelect label="Operating System" :field="operatingSystem" name="operatingSystem" class="sm:col-span-3" />
            <FormPhysicalServerSelect label="Physical Server" :field="physicalServer" name="physicalServer" class="sm:col-span-3" />
            <FormTextArea label="Notes" :field="notes" name="notes" class="sm:col-span-6" />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <FormButtonDelete v-if="props.server" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
