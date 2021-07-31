<script setup lang="ts">
import type { IFqdn } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  fqdns: { type: [Object, Array] as PropType<IFqdn | IFqdn[]>, required: true },
});
</script>

<template>
  <template v-if="!Array.isArray(props.fqdns)">
    <n-text tag="div" depth="1" class="whitespace-nowrap group-hover:text-teal-300">{{ props.fqdns.name }}</n-text>
  </template>
  <template v-else>
    <div v-for="fqdn in props.fqdns" :key="fqdn.id" class="mb-2 group">
      <n-text tag="div" depth="1" class="whitespace-nowrap group-hover:text-teal-300">{{ fqdn.name }}</n-text>
    </div>
  </template>
</template>
