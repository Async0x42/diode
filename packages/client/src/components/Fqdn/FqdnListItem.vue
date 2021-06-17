<script setup lang="ts">
import { defineProps } from 'vue';
import type { IFqdn } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  fqdn: { type: Object as PropType<IFqdn>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'fqdn-view', params: { fqdnId: fqdn.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.fqdn.name }}</n-text>
      </router-link>
    </n-td>
    <TableCellServer :server="props.fqdn.server" />
    <TableCellApplications :applications="props.fqdn.applications" />
    <n-td>
      <TableButtonEdit :to="{ name: 'fqdn-edit', params: { fqdnId: fqdn.id } }" />
    </n-td>
  </n-tr>
</template>
