<script setup lang="ts">
import type { IFqdn } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  fqdn: { type: Object as PropType<IFqdn>, required: true },
});
</script>

<template>
  <n-popover trigger="hover" raw :show-arrow="false">
    <template #trigger><slot></slot></template>
    <n-descriptions bordered>
      <n-descriptions-item>
        <FqdnsWidget :fqdns="props.fqdn" />
      </n-descriptions-item>
    </n-descriptions>
  </n-popover>
</template>
