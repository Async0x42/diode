<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  headers: { type: Array as PropType<string[]>, default: () => [] },
  footers: { type: Array as PropType<string[]>, default: () => [] },
});
</script>

<template>
  <table size="small">
    <thead>
      <tr>
        <th v-for="(header, index) in props.headers" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>

    <tbody>
      <slot></slot>
    </tbody>

    <thead v-if="props.footers.length > 0">
      <tr>
        <th v-for="(footer, index) in props.footers" :key="index">
          {{ footer }}
        </th>
      </tr>
    </thead>
  </table>
</template>
