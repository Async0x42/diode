<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  applications: { type: Array as PropType<IApplication[]>, default: () => [] },
  useShortName: { type: Boolean, default: () => true },
});
</script>

<template>
  <n-td>
    <router-link
      v-for="application in props.applications"
      :key="application.id"
      :to="{ name: 'application-view', params: { applicationId: application.id } }"
    >
      <ApplicationTooltip :application="application">
        <n-tag v-if="useShortName && application?.shortName" type="info" class="mr-1 whitespace-nowrap hover:cursor-pointer hover:text-teal-300">
          {{ application?.shortName }}
        </n-tag>
        <n-tag v-else type="info" class="mr-1 hover:cursor-pointer">{{ application?.name }}</n-tag>
      </ApplicationTooltip>
    </router-link>
  </n-td>
</template>
