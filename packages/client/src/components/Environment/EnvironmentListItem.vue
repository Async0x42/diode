<script setup lang="ts">
import { defineProps } from 'vue';
import type { IEnvironment } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  environment: { type: Object as PropType<IEnvironment>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'environment-view', params: { environmentId: environment.id } }">
        <div>
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.environment.name }}</n-text>
          <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.environment.shortName }}</n-text>
        </div>
      </router-link>
    </n-td>
    <n-td>
      <TableButtonEdit :to="{ name: 'environment-edit', params: { environmentId: environment.id } }" />
    </n-td>
  </n-tr>
</template>
