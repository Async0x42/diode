<script setup lang="ts">
import { defineProps } from 'vue';
import type { IEnvironment } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  environment: { type: Object as PropType<IEnvironment>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="{ name: 'environment-view', params: { environmentId: environment.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.environment.name }}
            </div>
            <div class="text-sm text-gray-700">
              {{ props.environment.shortName }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ name: 'environment-edit', params: { environmentId: environment.id } }" />
    </td>
  </tr>
</template>
