<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  applications: { type: Object as PropType<IApplication[]> },
});
</script>

<template>
  <n-text v-for="application in props.applications" :key="application.id" tag="div" depth="1" class="mb-2 hover:text-teal-300">
    <template v-if="application.shortName"> [{{ application?.shortName }}] </template>
    {{ application?.name }}
  </n-text>
</template>
