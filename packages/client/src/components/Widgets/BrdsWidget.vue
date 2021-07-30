<script setup lang="ts">
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  brds: { type: Object as PropType<IBrd[]>, required: true },
});
</script>

<template>
  <template v-for="brd in props.brds" :key="brd.id">
    <n-text tag="div" depth="1" class="mb-2 hover:text-teal-300">[{{ brd.brdNumber }}] {{ brd.title }}</n-text>
  </template>
</template>
