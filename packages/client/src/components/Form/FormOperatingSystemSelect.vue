<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IOperatingSystem } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  value: { type: Object as PropType<IOperatingSystem> },
});

const { data, error, isFinished } = useAxios<IOperatingSystem[]>('/api/operatingSystems');
const selected = ref<IOperatingSystem | undefined>(props.value);
const emit = defineEmit(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select v-model="selected" remote :loading="!isFinished" :options="data?.map((d) => ({ label: d.name, value: d.id }))" />
</template>
