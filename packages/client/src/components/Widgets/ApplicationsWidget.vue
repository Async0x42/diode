<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  applications: { type: [Object, Array] as PropType<IApplication[] | IApplication>, default: '' },
});
</script>

<template>
  <template v-if="!Array.isArray(props.applications)">
    <n-text tag="div" depth="1">{{ props.applications?.name }}</n-text>
    <n-text tag="div" depth="3">{{ props.applications?.shortName }}</n-text>
  </template>
  <template v-else>
    <div v-for="application in props.applications" :key="application.id" class="mb-2 group">
      <n-text tag="div" depth="1" class="group-hover:text-teal-300">
        <template v-if="application?.shortName"> [{{ application?.shortName }}] </template>
        {{ application.name }}
      </n-text>
    </div>
  </template>
</template>
