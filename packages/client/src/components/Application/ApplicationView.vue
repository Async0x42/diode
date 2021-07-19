<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  application: { type: Object as PropType<IApplication>, required: true },
});

const title = `${props.application.shortName && `[${props.application.shortName}] `}${props.application.name}`;
</script>

<template>
  <n-page-header class="p-2" :title="title" />
  <n-descriptions bordered>
    <n-descriptions-item label="Description" :span="3">
      <n-text tag="div" depth="1">
        {{ props.application.description }}
      </n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <div v-for="server in props.application.servers" :key="server.id" class="mb-2 group">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ server.name }}</n-text>
        <n-text tag="div" depth="2" class="group-hover:text-teal-300">{{ server.ip }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-300">{{ server.operatingSystem?.name }}</n-text>
      </div>
    </n-descriptions-item>
    <n-descriptions-item label="FQDNs">
      <div v-for="fqdn in props.application.fqdns" :key="fqdn.id" class="mb-2 group">
        <n-text tag="div" depth="1" class="whitespace-nowrap group-hover:text-teal-300">{{ fqdn.name }}</n-text>
      </div>
    </n-descriptions-item>
    <n-descriptions-item label="SSL Certs">
      <n-text v-for="sslCert in props.application.sslCertificates" :key="sslCert.id" tag="div" depth="1" class="mb-2 hover:text-teal-300">
        <template v-if="sslCert.expiry"> [{{ formatTableDate(sslCert?.expiry) }}] </template>
        {{ sslCert?.sans }}
      </n-text>
    </n-descriptions-item>
    <n-descriptions-item label="BRDs">
      <template v-for="brd in props.application.brds" :key="brd.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">[{{ brd.brdNumber }}] {{ brd.title }}</n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="RFCs">
      <template v-for="rfc in props.application.rfcs" :key="rfc.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">[{{ rfc.rfcNumber }}] {{ rfc.title }}</n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Dependencies">
      <div v-for="dependency in props.application.dependencies" :key="dependency.id" class="mb-2 group">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">
          <template v-if="dependency.endOfSupportDate"> [{{ formatTableDate(dependency.endOfSupportDate) }}] </template>
          {{ dependency.name }}
        </n-text>
        <n-text tag="div" depth="2" class="group-hover:text-teal-400"> v{{ dependency.version }} </n-text>
      </div>
    </n-descriptions-item>
  </n-descriptions>
</template>
