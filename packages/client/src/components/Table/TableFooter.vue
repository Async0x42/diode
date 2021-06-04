<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  headers: { type: Array as PropType<string[]>, default: () => [] },
});
</script>

<template>
  <tfoot class="bg-gray-50">
    <tr>
      <TableHeaderCell v-for="(header, index) in props.headers" :key="index">
        {{ header }}
      </TableHeaderCell>
    </tr>
  </tfoot>
</template>
