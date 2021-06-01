<script setup lang="ts">
import type { IFqdn } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  fqdns: { type: Object as PropType<IFqdn[]>, default: () => [] },
});
</script>

<template>
  <td class="py-4 px-6 whitespace-nowrap">
    <router-link
      v-for="fqdn in props.fqdns"
      :key="fqdn.id"
      v-slot="{ navigate }"
      :to="{ name: 'fqdn-view', params: { fqdnId: fqdn.id } }"
      custom
      class="text-sm text-gray-900"
    >
      <div role="link" class="cursor-pointer hover:border-l-1 hover:border-blue-300" @click="navigate" @keypress.enter="navigate">
        {{ fqdn.name }}
      </div>
    </router-link>
  </td>
</template>
