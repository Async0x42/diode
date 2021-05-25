<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { FormField } from '~/types';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  options: { type: Array as PropType<string[]>, required: true },
  field: { type: Object as PropType<FormField>, required: true },
});
</script>

<template>
  <div>
    <label :for="props.name" class="font-medium text-sm text-gray-700 block"> {{ props.label }} </label>
    <div class="mt-1">
      <select
        :id="props.name"
        :ref="props.field.ref"
        v-model="props.field.value"
        :name="props.name"
        class="rounded-md border-gray-300 mt-1 text-base w-full py-2 pr-10 pl-3 block focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option v-for="(option, index) in options" :key="index">{{ option }}</option>
      </select>
    </div>
    <slot name="note"></slot>
  </div>
</template>
