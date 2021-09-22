<script setup lang="ts">

const props = defineProps({
  label: { type: String },
});
</script>
<template>
  <Button :label="props.label" class="p-button-rounded">
    <slot></slot>
  </Button>
</template>
