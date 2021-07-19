<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  headers: { type: Array as PropType<string[]>, default: () => [] },
  footers: { type: Array as PropType<string[]>, default: () => [] },
});
</script>

<template>
  <n-table>
    <n-thead>
      <n-tr>
        <n-th v-for="(header, index) in props.headers" :key="index">
          {{ header }}
        </n-th>
      </n-tr>
    </n-thead>

    <n-tbody>
      <slot></slot>
    </n-tbody>

    <n-thead v-if="props.footers.length > 0">
      <n-tr>
        <n-th v-for="(footer, index) in props.footers" :key="index">
          {{ footer }}
        </n-th>
      </n-tr>
    </n-thead>
  </n-table>
</template>
