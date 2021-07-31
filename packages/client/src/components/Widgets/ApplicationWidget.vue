<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication> },
});
</script>

<template>
  <template v-if="props.application">
    <n-text tag="div" depth="1">{{ props.application?.name }}</n-text>
    <n-text tag="div" depth="3">{{ props.application?.shortName }}</n-text>
  </template>
</template>
