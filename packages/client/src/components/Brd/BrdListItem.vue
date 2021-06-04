<script setup lang="ts">
import { defineProps } from 'vue';
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
const { n } = useI18n();

const props = defineProps({
  brd: { type: Object as PropType<IBrd>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="`${$route.fullPath}/${props.brd.id}/view`">
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.brd.title }}
            </div>
            <div class="text-sm text-gray-500">
              {{ props.brd.brdNumber }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <TableCell>{{ props.brd.priority }}</TableCell>
    <TableCell>{{ props.brd.status }}</TableCell>
    <TableCell>{{ n(props.brd.initialCost || 0, 'currency') }}</TableCell>
    <TableCell>{{ n(props.brd.upkeepCost || 0, 'currency') }}</TableCell>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ path: `${$route.fullPath}/${props.brd.id}/edit` }" />
    </td>
  </tr>
</template>
