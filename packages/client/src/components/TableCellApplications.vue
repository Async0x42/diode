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
      v-for="application in props.applications"
      :key="application.id"
      v-slot="{ navigate }"
      :to="{ name: 'application-view', params: { applicationId: application.id } }"
      custom
    >
      <div
        role="link"
        class="cursor-pointer text-sm text-gray-900 hover:border-l-1 hover:border-blue-300"
        @click="navigate"
        @keypress.enter="navigate"
      >
        <template v-if="application?.shortName"> [{{ application?.shortName }}] </template>
        {{ application?.name }}
      </div>
    </router-link>
  </td>
</template>
