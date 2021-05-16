<script setup lang="ts">
import { defineProps } from 'vue';
import { Contact } from '@daiod/common';
import type { PropType } from 'vue';

const props = defineProps({
  items: { type: Array as PropType<Contact[]>, required: true },
});
</script>

<template>
  <div v-for="item in props.items" :key="item.id">
    {{ item.firstName }}
  </div>
</template>
