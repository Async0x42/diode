<script setup lang="ts">
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  rfcs: { type: Array as PropType<IRfc[]>, default: () => [] },
});
</script>

<template>
  <td class="whitespace-nowrap">
    <router-link v-for="rfc in props.rfcs" :key="rfc.id" :to="{ name: 'rfc-view', params: { rfcId: rfc.id } }">
      <div class="cursor-pointer text-grey-300 hover:text-teal-300">
        <template v-if="rfc?.rfcNumber"> [{{ rfc?.rfcNumber }}] </template>
        {{ rfc.title }}
      </div>
    </router-link>
  </td>
</template>
