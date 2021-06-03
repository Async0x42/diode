<script setup lang="ts">
import type { IRfc } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  rfcs: { type: Object as PropType<IRfc[]>, default: () => [] },
});
</script>

<template>
  <TableCell class="whitespace-nowrap">
    <router-link v-for="rfc in props.rfcs" :key="rfc.id" v-slot="{ navigate }" :to="{ name: 'rfc-view', params: { rfcId: rfc.id } }" custom>
      <div
        role="link"
        class="cursor-pointer text-sm text-gray-900 hover:border-l-1 hover:border-blue-300"
        @click="navigate"
        @keypress.enter="navigate"
      >
        <template v-if="rfc?.rfcNumber"> [{{ rfc?.rfcNumber }}] </template>
        {{ rfc.title }}
      </div>
    </router-link>
  </TableCell>
</template>
