<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IRfc } from '@diode/common';
import type { FormField } from '~/types';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  field: { type: Object as PropType<FormField>, required: true },
});

const { data, error, isFinished } = useAxios<IRfc[]>('/api/rfcs');
</script>

<template>
  <div>
    <FormMultiSelect
      v-if="data && isFinished"
      :id="props.name"
      :ref="props.field.ref"
      v-model="props.field.value"
      :label="props.label"
      :options="data.map((d) => ({ id: d.id, name: d.title }))"
      :name="props.name"
    />
    <LoadingError v-else-if="error" :error="error" />
    <LoadingList v-else />
    <slot name="note"></slot>
  </div>
</template>
