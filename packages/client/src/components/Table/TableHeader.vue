<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  headers: { type: Array as PropType<string[]>, default: () => [] },
});
</script>

<template>
  <thead class="bg-gray-50">
    <tr>
      <TableHeaderCell v-for="(header, index) in props.headers" :key="index">
        {{ header }}
      </TableHeaderCell>
    </tr>
  </thead>
</template>
