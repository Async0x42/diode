<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IBrd } from '@diode/common';

const props = defineProps({
  value: { type: Array as PropType<number[]>, default: () => [] },
});

const { data, error, isFinished } = useAxios<IBrd[]>('/api/brds');
const selected = ref<number[]>(props.value);
const emit = defineEmit(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select v-model:value="selected" filterable :loading="!isFinished" :options="data?.map((d) => ({ label: d.title, value: d.id }))" multiple />
</template>
