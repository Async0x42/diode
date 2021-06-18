<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IPhysicalServer } from '@diode/common';

const props = defineProps({
  value: { type: Object as PropType<IPhysicalServer> },
});

const { data, error, isFinished } = useAxios<IPhysicalServer[]>('/api/physicalServers');
const selected = ref<number | undefined>(props.value?.id);
const emit = defineEmit(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select v-model:value="selected" remote :loading="!isFinished" :options="data?.map((d) => ({ label: d.name, value: d.id }))" />
</template>
