<script setup lang="ts">
import type { IRfc } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  rfcs: { type: Object as PropType<IRfc[]>, default: () => [] },
});
</script>

<template>
  <td class="py-4 px-6 whitespace-nowrap">
    <router-link
      v-for="rfc in props.rfcs"
      :key="rfc.id"
      v-slot="{ navigate }"
      :to="{ name: 'rfc-view', params: { rfcId: rfc.id } }"
      custom
      class="text-sm text-gray-900"
    >
      <div role="link" class="cursor-pointer hover:border-l-1 hover:border-blue-300" @click="navigate" @keypress.enter="navigate">
        <template v-if="rfc?.rfcNumber"> [{{ rfc?.rfcNumber }}] </template>
        {{ rfc.title }}
      </div>
    </router-link>
  </td>
</template>
