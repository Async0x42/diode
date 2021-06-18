<script setup lang="ts">
import { defineEmit, defineProps, ref, watch } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  options: { type: Array as PropType<{ value: number; label: string }[]>, default: [] },
  modelValue: { type: Array as PropType<number[]>, default: () => [] },
  loading: { type: Boolean, default: false },
});

const selected = ref<number[]>(props.modelValue);
const emit = defineEmit(['update:modelValue']);
watch(selected, (newVal) => emit('update:modelValue', selected.value));
</script>

<template>
  <n-select v-model="selected" filterable :loading="props.loading" :options="options" multiple />
</template>
