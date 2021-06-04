<script setup lang="ts">
import { defineProps } from 'vue';
import type { IFqdn } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  fqdn: { type: Object as PropType<IFqdn>, required: true },
});
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="`${$route.fullPath}/${props.fqdn.id}/view`">
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.fqdn.name }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <TableCellServer :server="props.fqdn.server" />
    <TableCellApplications :applications="props.fqdn.applications" />
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="`${$route.fullPath}/${props.fqdn.id}/edit`" />
    </td>
  </tr>
</template>
