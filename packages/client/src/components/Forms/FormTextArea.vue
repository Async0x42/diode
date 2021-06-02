<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { FormField } from '~/types';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  rows: { type: Number, default: 3 },
  field: { type: Object as PropType<FormField>, required: true },
});
</script>

<template>
  <div>
    <label :for="props.name" class="font-medium text-sm text-gray-700 block"> {{ props.label }} </label>
    <div class="mt-1">
      <textarea
        :id="props.name"
        :ref="props.field.ref"
        v-model="props.field.value"
        :name="props.name"
        :rows="props.rows"
        class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
    <slot name="note"></slot>
  </div>
</template>
