<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IOperatingSystem } from '@diode/common';

const props = defineProps({
  modelValue: { type: Number, required: true },
});

const { data, error, isFinished } = useAxios<IOperatingSystem[]>('/api/operatingSystems');
const selected = ref<number>(props.modelValue);
const emit = defineEmit(['update:modelValue']);
watch(selected, (newVal) => emit('update:modelValue', selected.value));
</script>

<template>
  <n-select v-model="selected" remote :loading="!isFinished" :options="data?.map((d) => ({ label: d.name, value: d.id }))" />
</template>
