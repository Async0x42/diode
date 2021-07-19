<script setup lang="ts">
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IRfc } from '@diode/common';

const props = defineProps({
  value: { type: Array as PropType<number[]>, default: () => [] },
});

const { data, error, isFinished } = useAxios<IRfc[]>('/api/rfcs');
const selected = ref<number[]>(props.value);
const emit = defineEmits(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select v-model:value="selected" filterable :loading="!isFinished" :options="data?.map((d) => ({ label: d.title, value: d.id }))" multiple />
</template>
