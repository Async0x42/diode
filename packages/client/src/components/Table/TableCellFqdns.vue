<script setup lang="ts">
import type { IFqdn } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  fqdns: { type: Object as PropType<IFqdn[]>, default: () => [] },
});
</script>

<template>
  <n-td class="whitespace-nowrap">
    <router-link v-for="fqdn in props.fqdns" :key="fqdn.id" :to="{ name: 'fqdn-view', params: { fqdnId: fqdn.id } }">
      <FqdnTooltip :fqdn="fqdn">
        <n-text tag="div" depth="1" class="hover:text-teal-300">
          {{ fqdn.name }}
        </n-text>
      </FqdnTooltip>
    </router-link>
  </n-td>
</template>
