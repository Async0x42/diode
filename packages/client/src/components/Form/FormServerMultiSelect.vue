<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IServer } from '@diode/common';

const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: Array as PropType<number[]>, default: () => [] },
});

const { data, error } = useAxios<IServer[]>('/api/servers');
const selected = ref<number[]>(props.modelValue);
const emit = defineEmit(['update:modelValue']);
watch(selected, (newVal) => emit('update:modelValue', selected.value));
</script>

<template>
  <LoadingError v-if="error" :error="error" />
  <FormMultiSelect v-else v-model="selected" :label="props.label" :options="data?.map((d) => ({ label: d.name, value: d.id }))" />
</template>
