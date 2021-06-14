<script setup lang="ts">
import type { IFqdn } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  fqdns: { type: Object as PropType<IFqdn[]>, default: () => [] },
});
</script>

<template>
  <n-td class="whitespace-nowrap">
    <router-link v-for="fqdn in props.fqdns" :key="fqdn.id" v-slot="{ navigate }" :to="{ name: 'fqdn-view', params: { fqdnId: fqdn.id } }" custom>
      <div role="link" class="cursor-pointer text-sm text-gray-900 hover:bg-gray-200" @click="navigate" @keypress.enter="navigate">
        {{ fqdn.name }}
      </div>
    </router-link>
  </n-td>
</template>
