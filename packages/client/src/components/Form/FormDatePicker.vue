<script setup lang="ts">
import { computed, defineEmit, defineProps, ref, watch } from 'vue';

const props = defineProps({
  value: { type: String, default: () => new Date().toString() },
  loading: { type: Boolean, default: false },
});

const selected = ref<number>(new Date(props.value).getTime());
const propsTimestampValue = computed(() => new Date(props.value).getTime());
const emit = defineEmit(['update:value']);
watch(selected, (newVal) => emit('update:value', new Date(selected.value)));
</script>

<template>
  <n-date-picker v-model:value="propsTimestampValue" type="date" clearable />
</template>
