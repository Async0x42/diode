<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { IEnvironment } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  value: { type: Object as PropType<IEnvironment> },
});

const { data, error, isFinished } = useAxios<IEnvironment[]>('/api/environments');
const selected = ref<number | undefined>(props.value?.id);
const emit = defineEmits(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select v-model:value="selected" filterable :loading="!isFinished" :options="data?.map((d) => ({ label: d.name, value: d.id }))" />
</template>
