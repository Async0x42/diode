<script setup lang="ts">
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { ISslCertificate } from '@diode/common';

const props = defineProps({
  value: { type: Array as PropType<number[]>, default: () => [] },
});

const { data, error, isFinished } = useAxios<ISslCertificate[]>('/api/sslCertificates');
const selected = ref<number[]>(props.value);
const emit = defineEmits(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select v-model:value="selected" filterable :loading="!isFinished" :options="data?.map((d) => ({ label: d.sans, value: d.id }))" multiple />
</template>
