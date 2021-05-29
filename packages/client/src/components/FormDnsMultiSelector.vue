<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import { useAxios } from '@vueuse/integrations';
import type { IDns } from '@diode/common';
import LoadingList from './LoadingList.vue';
import LoadingError from './LoadingError.vue';
import FormMultiSelect from './FormMultiSelect.vue';
import type { FormField } from '~/types';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  field: { type: Object as PropType<FormField>, required: true },
});

const { data, error, isFinished } = useAxios<IDns[]>('/api/dns');
</script>

<template>
  <div>
    <label :for="props.name" class="font-medium text-sm text-gray-700 block"> {{ props.label }} </label>
    <div class="mt-1">
      <FormMultiSelect
        v-if="data && isFinished"
        :id="props.name"
        :ref="props.field.ref"
        v-model="props.field.value"
        :options="data.map((d) => ({ id: d.id, name: d.name }))"
        :name="props.name"
        label="Multi Select"
        class="sm:col-span-3"
      />
      <LoadingError v-else-if="error" :error="error" />
      <LoadingList v-else />
    </div>
    <slot name="note"></slot>
  </div>
</template>
