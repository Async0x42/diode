<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps({
  to: { type: Object as PropType<RouteLocationRaw>, required: true },
});
</script>

<template>
  <router-link :to="props.to">
    <TableButtonRound class="bg-indigo-600 inline-flex items-center hover:bg-indigo-700 focus:ring-indigo-500" :attrs="$attrs">
      <heroicons-solid-pencil class="h-5 w-5" aria-hidden="true" />
    </TableButtonRound>
  </router-link>
</template>
