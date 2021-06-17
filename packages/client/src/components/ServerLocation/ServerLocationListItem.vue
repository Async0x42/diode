<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServerLocation } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  serverLocation: { type: Object as PropType<IServerLocation>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'serverLocation-view', params: { serverLocationId: serverLocation.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.serverLocation.name }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.serverLocation.shortName }}</n-text>
      </router-link>
    </n-td>
    <n-td>
      <TableButtonEdit :to="{ name: 'serverLocation-edit', params: { serverLocationId: serverLocation.id } }" />
    </n-td>
  </n-tr>
</template>
