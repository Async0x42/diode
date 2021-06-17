<script setup lang="ts">
import { defineEmit, defineProps, ref, watch } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  options: { type: Array as PropType<string[]>, default: [] },
  modelValue: { type: Number, required: true },
  remote: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
});

const selected = ref<number>(props.modelValue);
const emit = defineEmit(['update:modelValue']);
watch(selected, (newVal) => emit('update:modelValue', selected.value));
</script>

<template>
  <n-select v-model="selected" :remote="props.remote" :loading="props.loading" :options="props.options?.map((d) => ({ label: d, value: d }))" />
</template>
