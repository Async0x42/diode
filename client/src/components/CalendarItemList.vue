<script setup lang="ts">
import { defineProps } from 'vue';
import type { ICalendarItem } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  items: { type: Array as PropType<ICalendarItem[]>, required: true },
});

const { results } = useRouteSearchWithData(props.items, ['title', 'category', 'description', 'start', 'end']);
</script>

<template>
  <div v-for="item in results" :key="item.id">
    {{ item.title }}
  </div>
</template>
