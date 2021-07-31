<script setup lang="ts">
import type { IDependency } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils/tables';

const props = defineProps({
  dependency: { type: Object as PropType<IDependency>, required: true },
});
</script>

<template>
  <n-page-header class="p-2" title="Operating System Information" />
  <n-descriptions bordered>
    <n-descriptions-item label="Name" :span="3">
      <n-text tag="div" depth="1">{{ props.dependency.name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Package Name">
      <n-text tag="div" depth="1">{{ props.dependency.packageName }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Version">
      <n-text tag="div" depth="1">{{ props.dependency.version }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="End of Support">
      <n-text tag="div" depth="1">{{ formatTableDate(props.dependency.endOfSupportDate) }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Applications">
      <ApplicationsWidget :applications="props.dependency.applications" />
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <ServersWidget :servers="props.dependency.servers" />
    </n-descriptions-item>
  </n-descriptions>
</template>
