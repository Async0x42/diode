<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  error: { type: Object, required: true },
});
</script>

<template>
  <div>{{ props.error }}</div>
</template>
