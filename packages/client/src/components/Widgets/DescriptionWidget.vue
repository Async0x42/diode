<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  description: { type: Object as PropType<string>, default: '' },
});
</script>

<template>
  <n-text tag="div" depth="1">
    {{ props.description }}
  </n-text>
</template>
