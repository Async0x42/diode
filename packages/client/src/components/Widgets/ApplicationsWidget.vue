<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  applications: { type: Object as PropType<IApplication[]> },
});
</script>

<template>
  <div v-for="application in props.applications" :key="application.id" class="mb-2 group">
    <n-text tag="div" depth="1" class="group-hover:text-teal-300">
      <template v-if="application?.shortName"> [{{ application?.shortName }}] </template>
      {{ application.name }}
    </n-text>
  </div>
</template>
