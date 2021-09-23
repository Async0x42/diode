<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  applications: { type: Array as PropType<IApplication[]>, default: () => [] },
  useShortName: { type: Boolean, default: () => true },
});
</script>

<template>
  <td>
    <router-link
      v-for="application in props.applications"
      :key="application.id"
      :to="{ name: 'application-view', params: { applicationId: application.id } }"
    >
      <ApplicationTooltip :application="application">
        <Tag
          v-if="useShortName && application?.shortName"
          severity="info"
          class="mr-1 text-grey-300 whitespace-nowrap hover:cursor-pointer hover:text-teal-300"
          :value="application?.shortName"
        />
        <Tag v-else severity="info" class="mr-1 hover:cursor-pointer" :value="application?.name" />
      </ApplicationTooltip>
    </router-link>
  </td>
</template>
