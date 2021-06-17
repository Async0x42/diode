<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IEnvironment } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  value: { type: Object as PropType<IEnvironment> },
});

const { data, error, isFinished } = useAxios<IEnvironment[]>('/api/environments');
const selected = ref<IEnvironment | undefined>(props.value);
const emit = defineEmit(['update:modelValue']);
watch(selected, (newVal) => emit('update:modelValue', selected.value));
</script>

<template>
  <n-select v-model="selected" remote :loading="!isFinished" :options="data?.map((d) => ({ label: d.name, value: d.id }))" />
</template>
