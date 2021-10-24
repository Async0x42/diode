<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  options: { type: Array as PropType<string[]>, default: () => [] },
  value: { type: String, default: '' },
  loading: { type: Boolean, default: false },
});

const selected = ref<string>(props.value);
const emit = defineEmits(['update:value']);
watch(selected, (newVal) => emit('update:value', selected.value));
</script>

<template>
  <n-select v-model:value="selected" filterable :loading="props.loading" :options="props.options.map((d) => ({ label: d, value: d }))" />
</template>
