<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { PropType } from 'vue';
import type { IServerLocation } from '@diode/common';

const props = defineProps({
  value: { type: Object as PropType<IServerLocation> },
});

const { data, error, isFinished } = useAxios<IServerLocation[]>('/api/serverLocations');
const selected = ref<IServerLocation | undefined>(props.value);
const emit = defineEmit(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select v-model="selected" remote :loading="!isFinished" :options="data?.map((d) => ({ label: d.name, value: d.id }))" multiple />
</template>
