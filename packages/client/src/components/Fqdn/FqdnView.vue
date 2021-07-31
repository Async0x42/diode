<script setup lang="ts">
import type { IFqdn } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  fqdn: { type: Object as PropType<IFqdn>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="FQDN Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.fqdn.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Server">
      <ServersWidget :servers="props.fqdn.server" />
    </n-descriptions-item>
    <n-descriptions-item label="Applications" :span="3">
      <ApplicationsWidget :applications="props.fqdn.applications" />
    </n-descriptions-item>
  </n-descriptions>
</template>
