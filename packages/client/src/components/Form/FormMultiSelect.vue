<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  options: { type: Array as PropType<{ value: number; label: string }[]>, default: [] },
  value: { type: Array as PropType<number[]>, default: () => [] },
  loading: { type: Boolean, default: false },
});

const selected = ref<number[]>(props.value);
const emit = defineEmits(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select v-model:value="selected" filterable :loading="props.loading" :options="options" multiple />
</template>
