<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import LitepieDatepicker from 'litepie-datepicker';
import type { FormField } from '~/types';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  field: { type: Object as PropType<FormField>, required: true },
});
</script>

<template>
  <div class="flex">
    <label :for="props.name" class="font-medium text-sm text-gray-700 block"> {{ props.label }} </label>
    <div class="mt-1 flex">
      <litepie-datepicker :id="props.name" :ref="props.field.ref" v-model="props.field.value" as-single :name="props.name" />
    </div>
    <slot name="note"></slot>
  </div>
</template>
