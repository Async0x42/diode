<script setup lang="ts">
import type { IDependency } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  dependencies: { type: Object as PropType<IDependency[]>, default: () => [] },
});
</script>

<template>
  <n-td>
    <div v-for="dependency in props.dependencies" :key="dependency.id" class="group">
      <n-text tag="div" depth="1" class="group-hover:text-teal-300">
        <template v-if="dependency.endOfSupportDate"> [{{ formatTableDate(dependency.endOfSupportDate) }}] </template>
        {{ dependency.name }}
      </n-text>
      <n-text v-if="dependency.version" tag="div" depth="2" class="group-hover:text-teal-400"> v{{ dependency.version }} </n-text>
    </div>
  </n-td>
</template>
