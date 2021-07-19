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
      <template v-for="application in props.dependency.applications" :key="application.id">
        <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">
          <template v-if="application.shortName"> [{{ application?.shortName }}] </template>
          {{ application?.name }}
        </n-text>
      </template>
    </n-descriptions-item>
    <n-descriptions-item label="Servers">
      <div v-for="server in props.dependency.servers" :key="server.id" class="mb-2 group">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ server.name }}</n-text>
        <n-text tag="div" depth="2" class="group-hover:text-teal-300">{{ server.ip }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-300">{{ server.operatingSystem?.name }}</n-text>
      </div>
    </n-descriptions-item>
  </n-descriptions>
</template>
