<script setup lang="ts">
const props = defineProps({
  error: { type: Object, required: true },
});
</script>

<template>
  <div>{{ props.error }}</div>
</template>
