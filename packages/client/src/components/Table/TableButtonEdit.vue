<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps({
  to: { type: Object as PropType<RouteLocationRaw>, required: true },
});
</script>

<template>
  <n-button small @click="$router.push(props.to)">
    <template #icon>
      <n-icon>
        <heroicons-solid-pencil />
      </n-icon>
    </template>
    Edit
  </n-button>
</template>
