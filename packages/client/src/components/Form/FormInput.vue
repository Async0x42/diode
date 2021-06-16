<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { FormField } from '~/types';

const props = defineProps({
  label: { type: String, required: true },
  field: { type: Object as PropType<FormField>, required: true },
  placeholder: { type: String, default: '' },
  span: { type: Number },
});
</script>

<template>
  <n-form-item-gi :span="span" :label="props.label">
    <n-input v-model="props.field.value" :placeholder="props.placeholder" />
  </n-form-item-gi>
</template>
