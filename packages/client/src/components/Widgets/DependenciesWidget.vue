<script setup lang="ts">
import type { IDependency } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  dependencies: { type: Object as PropType<IDependency[]>, required: true },
});
</script>

<template>
  <div v-for="dependency in props.dependencies" :key="dependency.id" class="mb-2 group">
    <n-text tag="span" depth="1" class="group-hover:text-teal-300">
      <template v-if="dependency.endOfSupportDate"> [{{ formatTableDate(dependency.endOfSupportDate) }}] </template>
      {{ dependency.name }}
    </n-text>
    <n-text v-if="dependency.version" tag="span" depth="2" class="group-hover:text-teal-400"> v{{ dependency.version }} </n-text>
  </div>
</template>
