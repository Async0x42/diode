<script setup lang="ts">
import type { IApplication } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  applications: { type: Object as PropType<IApplication[]>, default: () => [] },
});
</script>

<template>
  <td class="py-4 px-6 whitespace-nowrap">
    <router-link
      is="a"
      v-for="application in props.applications"
      :key="application.id"
      :to="{ name: 'application-view', params: { applicationId: application.id } }"
      class="text-sm text-gray-900"
    >
      <template v-if="application?.shortName"> [{{ application?.shortName }}] </template>
      {{ application?.name }}
    </router-link>
  </td>
</template>
