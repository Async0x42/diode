<script setup lang="ts">
const props = defineProps({
  label: { type: String },
});
</script>
<template>
  <Button :label="props.label" class="p-button-raised p-button-sm">
    <slot></slot>
  </Button>
</template>
