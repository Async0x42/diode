<script setup lang="ts">
import { computed, defineEmit, defineProps, ref, watch } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  value: { type: [String, Date] as PropType<string | Date>, required: false },
  loading: { type: Boolean, default: false },
});

const propsTimestampValue = computed(() => (props.value ? new Date(props.value).getTime() : new Date().getTime()));
const selected = ref<number>(propsTimestampValue.value);
const emit = defineEmit(['update:value']);
watch(selected, (newVal) => emit('update:value', new Date(selected.value)));
</script>

<template>
  <n-date-picker v-model:value="selected" type="date" class="w-full" clearable />
</template>
