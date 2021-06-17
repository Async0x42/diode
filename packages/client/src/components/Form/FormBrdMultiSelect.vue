<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IBrd } from '@diode/common';

const props = defineProps({
  modelValue: { type: Array as PropType<number[]>, default: () => [] },
});

const { data, error, isFinished } = useAxios<IBrd[]>('/api/brds');
const selected = ref<number[]>(props.modelValue);
const emit = defineEmit(['update:modelValue']);
watch(selected, (newVal) => emit('update:modelValue', selected.value));
</script>

<template>
  <n-select v-model="selected" remote :loading="!isFinished" :options="data?.map((d) => ({ label: d.title, value: d.id }))" multiple />
</template>
