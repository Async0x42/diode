<script setup lang="ts">
import type { IDependency } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  dependencies: { type: Array as PropType<IDependency[]>, default: () => [] },
});
</script>

<template>
  <td>
    <div v-for="dependency in props.dependencies" :key="dependency.id" class="mb-1 group">
      <span class="text-grey-300 group-hover:text-teal-300">
        <template v-if="dependency.endOfSupportDate"> [{{ formatTableDate(dependency.endOfSupportDate) }}] </template>
        {{ dependency.name }}
      </span>
      <span v-if="dependency.version" class="text-grey-400 group-hover:text-teal-400"> v{{ dependency.version }} </span>
    </div>
  </td>
</template>
