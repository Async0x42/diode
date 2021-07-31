<script setup lang="ts">
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  rfcs: { type: Object as PropType<IRfc[]>, required: true },
});
</script>

<template>
  <template v-for="rfc in props.rfcs" :key="rfc.id">
    <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">[{{ rfc.rfcNumber }}] {{ rfc.title }}</n-text>
  </template>
</template>
