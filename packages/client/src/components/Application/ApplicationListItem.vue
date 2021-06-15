<script setup lang="ts">
import { defineProps } from 'vue';
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link :to="{ name: 'application-view', params: { applicationId: application.id } }">
        <div>
          <n-text depth="1">{{ props.application.name }}</n-text>
          <br />
          <n-text depth="2" class="whitespace-nowrap">{{ props.application.shortName }}</n-text>
          <br />
          <template v-for="fqdn in props.application.fqdns" :key="fqdn.id">
            <n-text depth="3" class="whitespace-nowrap">{{ fqdn.name }}</n-text>
            <br />
          </template>
        </div>
      </router-link>
    </n-td>
    <TableCellServers :servers="props.application.servers" />
    <n-td>{{ props.application.description }}</n-td>
    <n-td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ name: 'application-edit', params: { applicationId: application.id } }" />
    </n-td>
  </n-tr>
</template>
