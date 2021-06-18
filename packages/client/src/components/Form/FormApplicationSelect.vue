<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IApplication } from '@diode/common';

const props = defineProps({
  value: { type: Object as PropType<IApplication> },
});

const { data, error, isFinished } = useAxios<IApplication[]>('/api/applications');
const selected = ref<number | undefined>(props.value?.id);
const emit = defineEmit(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select
    v-model:value="selected"
    filterable
    :loading="!isFinished"
    :options="data?.map((d) => ({ label: `[${d.shortName}] ${d.name}`, value: d.id }))"
  />
</template>
