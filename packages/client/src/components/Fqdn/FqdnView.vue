<script setup lang="ts">
import { defineProps } from 'vue';
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
      <div class="group">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.fqdn.server?.name }}</n-text>
        <n-text tag="div" depth="2" class="group-hover:text-teal-400">{{ props.fqdn.server?.ip }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.fqdn.server?.operatingSystem?.name }}</n-text>
      </div>
    </n-descriptions-item>
    <n-descriptions-item label="Applications" :span="3">
      <div v-for="application in props.fqdn.applications" :key="application.id" class="mb-2 group">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">
          <template v-if="application?.shortName"> [{{ application?.shortName }}] </template>
          {{ application.name }}
        </n-text>
      </div>
    </n-descriptions-item>
  </n-descriptions>
</template>
