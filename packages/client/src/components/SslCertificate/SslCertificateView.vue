<script setup lang="ts">
import { defineProps } from 'vue';
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { format, parseJSON } from 'date-fns';

const props = defineProps({
  sslCertificate: { type: Object as PropType<ISslCertificate>, required: true },
});

const formatDate = (jsonDate?: Date) => jsonDate && format(parseJSON(jsonDate), 'yyyy-MM-dd');
</script>

<template>
  <n-page-header class="p-2" title="SSL Certificate Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Subject Alternate Names" :span="3">
      <n-text tag="div" depth="1">{{ props.sslCertificate.sans }}</n-text>
      <n-text tag="div" depth="3">{{ formatDate(props.sslCertificate.expiry) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Applications">
      <template v-for="application in props.sslCertificate.applications" :key="application.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">
          <template v-if="application.shortName"> [{{ application?.shortName }}] </template>
          {{ application?.name }}
        </n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <template v-for="server in props.sslCertificate.servers" :key="server.id">
        <div class="group">
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ server.name }}</n-text>
          <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ server.ip }}</n-text>
          <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ server.operatingSystem?.name }}</n-text>
        </div>
      </template>
    </n-descriptions-item>
  </n-descriptions>
</template>
