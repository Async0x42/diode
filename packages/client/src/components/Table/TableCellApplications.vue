<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  applications: { type: Object as PropType<IApplication[]>, default: () => [] },
  useShortName: { type: Boolean, default: false },
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
        <n-text tag="div" depth="1" class="cursor-pointer hover:text-teal-300">
          <span v-if="application?.shortName" class="whitespace-nowrap"> [{{ application?.shortName }}] </span>
          <span v-if="!useShortName">{{ application?.name }}</span>
        </n-text>
      </ApplicationTooltip>
    </router-link>
  </n-td>
</template>
