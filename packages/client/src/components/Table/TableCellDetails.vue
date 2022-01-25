<script setup lang="ts">
const props = defineProps({
  details: { type: String },
});
</script>

<template>
  <n-td class="min-w-11 max-w-50vw">
    <n-text depth="1" class="max-h-16 overflow-ellipsis">{{ props.details }}</n-text>
  </n-td>
</template>