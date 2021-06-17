<script setup lang="ts">
import { defineProps } from 'vue';
import type { IOperatingSystem } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  operatingSystem: { type: Object as PropType<IOperatingSystem>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'operatingSystem-view', params: { operatingSystemId: operatingSystem.id } }">
        <div>
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.operatingSystem.name }}</n-text>
          <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.operatingSystem.shortName }}</n-text>
        </div>
      </router-link>
    </n-td>
    <n-td>
      <TableButtonEdit :to="{ name: 'operatingSystem-edit', params: { operatingSystemId: operatingSystem.id } }" />
    </n-td>
  </n-tr>
</template>
