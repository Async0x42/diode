<script setup lang="ts">
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  rfcs: { type: Object as PropType<IRfc[]>, default: () => [] },
});
</script>

<template>
  <n-td class="whitespace-nowrap">
    <router-link v-for="rfc in props.rfcs" :key="rfc.id" :to="{ name: 'rfc-view', params: { rfcId: rfc.id } }">
      <n-text tag="div" depth="1" class="cursor-pointer hover:text-teal-300">
        <template v-if="rfc?.rfcNumber"> [{{ rfc?.rfcNumber }}] </template>
        {{ rfc.title }}
      </n-text>
    </router-link>
  </n-td>
</template>
