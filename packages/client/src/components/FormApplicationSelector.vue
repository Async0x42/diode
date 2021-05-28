<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IApplication } from '@diode/common';
import LoadingList from './LoadingList.vue';
import LoadingError from './LoadingError.vue';
import type { FormField } from '~/types';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  field: { type: Object as PropType<FormField>, required: true },
});

const { data, error, isFinished } = useAxios<IApplication[]>('/api/applications');
</script>

<template>
  <div>
    <label :for="props.name" class="font-medium text-sm text-gray-700 block"> {{ props.label }} </label>
    <div class="mt-1">
      <select
        v-if="data && isFinished"
        :id="props.name"
        :ref="props.field.ref"
        v-model="props.field.value"
        :name="props.name"
        class="rounded-md border-gray-300 mt-1 text-base w-full py-2 pr-10 pl-3 block focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option v-for="(option, index) in data" :key="index" :value="option.id">[{{ option.shortName }}] {{ option.name }}</option>
      </select>
      <LoadingError v-else-if="error" :error="error" />
      <LoadingList v-else />
    </div>
    <slot name="note"></slot>
  </div>
</template>
