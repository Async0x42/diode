<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IContactGroup } from '@diode/common';

const props = defineProps({
  modelValue: { type: Array as PropType<number[]>, default: () => [] },
});

const { data, error, isFinished } = useAxios<IContactGroup[]>('/api/contactGroups');
const selected = ref<number[]>(props.modelValue);
const emit = defineEmit(['update:modelValue']);
watch(selected, (newVal) => emit('update:modelValue', selected.value));
</script>
<template>
  <n-select v-model="selected" remote :loading="!isFinished" :options="data?.map((d) => ({ label: d.name, value: d.id }))" multiple />
</template>
