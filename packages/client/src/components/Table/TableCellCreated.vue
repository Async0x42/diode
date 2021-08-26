<script setup lang="ts">
import type { PropType } from '@vue/runtime-core';
import { formatTableDate } from '~/utils';

const props = defineProps({
  date: { type: [Date, Number, String] as PropType<Date | number | string> },
});
</script>

<template>
  <n-td class="whitespace-nowrap">{{ formatTableDate(props.date) }}</n-td>
</template>
