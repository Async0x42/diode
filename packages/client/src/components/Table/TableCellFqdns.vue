<script setup lang="ts">
import type { IFqdn } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  fqdns: { type: Array as PropType<IFqdn[]>, default: () => [] },
});
</script>

<template>
  <td class="whitespace-nowrap">
    <router-link v-for="fqdn in props.fqdns" :key="fqdn.id" :to="{ name: 'fqdn-view', params: { fqdnId: fqdn.id } }">
      <FqdnTooltip :fqdn="fqdn">
        <div class="text-grey-300 hover:text-teal-300">
          {{ fqdn.name }}
        </div>
      </FqdnTooltip>
    </router-link>
  </td>
</template>
