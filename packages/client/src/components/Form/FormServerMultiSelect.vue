<script setup lang="ts">
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IServer } from '@diode/common';

const props = defineProps({
  value: { type: Array as PropType<number[]>, default: () => [] },
});

const { data, error, isFinished } = useAxios<IServer[]>('/api/servers');
const selected = ref<number[]>(props.value);
const emit = defineEmits(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select
    v-model:value="selected"
    filterable
    :loading="!isFinished"
    :options="data?.map((d) => ({ label: `${d.environment ? `[${d.environment.shortName || d.environment.name}] ` : ''} ${d.name}`, value: d.id }))"
    multiple
  />
</template>
