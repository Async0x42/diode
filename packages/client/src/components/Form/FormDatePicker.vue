<script setup lang="ts">
// TODO: error message example is here https://vcalendar.io/datepicker.html
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import { DatePicker } from 'v-calendar';
import type { FormField } from '~/types';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  field: { type: Object as PropType<FormField>, required: true },
});
</script>

<template>
  <div>
    <label :for="props.name" class="font-medium text-sm text-gray-700 block"> {{ props.label }} </label>
    <div class="mt-1">
      <date-picker v-model="props.field.value" :masks="{ input: 'YYYY-MM-DD' }" :update-on-input="false">
        <template #default="{ inputValue, inputEvents }">
          <input
            :id="props.name"
            :ref="props.field.ref"
            :name="props.name"
            :value="inputValue"
            type="text"
            class="rounded-md flex-grow border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
            v-on="inputEvents"
          />
        </template>
      </date-picker>
    </div>
    <slot name="note"></slot>
  </div>
</template>
