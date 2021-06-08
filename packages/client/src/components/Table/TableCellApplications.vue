<script setup lang="ts">
import type { IApplication } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  applications: { type: Object as PropType<IApplication[]>, default: () => [] },
});
</script>

<template>
  <TableCell>
    <router-link
      v-for="application in props.applications"
      :key="application.id"
      v-slot="{ navigate }"
      :to="{ name: 'application-view', params: { applicationId: application.id } }"
      custom
    >
      <div role="link" class="cursor-pointer text-sm text-gray-900 hover:bg-gray-200" @click="navigate" @keypress.enter="navigate">
        <span v-if="application?.shortName" class="whitespace-nowrap"> [{{ application?.shortName }}] </span>
        {{ application?.name }}
      </div>
    </router-link>
  </TableCell>
</template>
