<script setup lang="ts">
const props = defineProps({
  description: { type: String, default: '' },
});
</script>

<template>
  <n-text tag="div" depth="1">
    {{ props.description }}
  </n-text>
</template>
