<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { FormField } from '~/types';

const props = defineProps({
  label: { type: String, required: true },
  field: { type: Object as PropType<FormField>, required: true },
  placeholder: { type: String, default: '' },
});
</script>

<template>
  <n-form-item-gi :span="24" :label="props.label">
    <n-input
      v-model="props.field.value"
      type="textarea"
      :placeholder="placeholder"
      :autosize="{
        minRows: 3,
        maxRows: 5,
      }"
    />
  </n-form-item-gi>
</template>
