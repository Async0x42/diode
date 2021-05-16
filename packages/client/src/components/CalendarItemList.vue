<script setup lang="ts">
import { defineProps } from 'vue';
import { CalendarItem } from '@daiod/common';
import type { PropType } from 'vue';

const props = defineProps({
  items: { type: Array as PropType<CalendarItem[]>, required: true },
});
</script>

<template>
  <div v-for="item in props.items" :key="item.id">
    {{ item.title }}
  </div>
</template>
