<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServerType } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  serverType: { type: Object as PropType<IServerType>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'serverType-view', params: { serverTypeId: serverType.id } }">
        <div>
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.serverType.name }}</n-text>
          <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.serverType.shortName }}</n-text>
        </div>
      </router-link>
    </n-td>
    <n-td>
      <TableButtonEdit :to="{ name: 'serverType-edit', params: { serverTypeId: serverType.id } }" />
    </n-td>
  </n-tr>
</template>
