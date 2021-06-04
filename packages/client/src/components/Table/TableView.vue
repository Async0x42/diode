<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  headers: { type: Array as PropType<string[]>, default: () => [] },
  footers: { type: Array as PropType<string[]>, default: () => [] },
});
</script>

<template>
  <table class="divide-y min-w-full divide-gray-200">
    <TableHeader :headers="props.headers" />
    <tbody class="divide-y bg-white divide-gray-200">
      <slot></slot>
    </tbody>
    <TableFooter v-if="props.footers.length > 0" :headers="props.footers" />
  </table>
</template>
