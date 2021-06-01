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
      tag="div"
      :to="{ name: 'fqdn-view', params: { fqdnId: fqdn.id } }"
      class="text-sm text-gray-900"
    >
      {{ fqdn.name }}
    </router-link>
  </td>
</template>
