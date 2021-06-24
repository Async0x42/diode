<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IDependency } from '@diode/common';

// TODO: use a tree select so we can do name -> version

const props = defineProps({
  value: { type: Array as PropType<number[]>, default: () => [] },
});

const { data, error, isFinished } = useAxios<IDependency[]>('/api/dependencies');
const selected = ref<number[]>(props.value);
const emit = defineEmit(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select
    v-model:value="selected"
    filterable
    :loading="!isFinished"
    :options="data?.map((d) => ({ label: `${d.version ? `[v${d.version}] ` : ''}${d.name}`, value: d.id }))"
    multiple
  />
</template>
