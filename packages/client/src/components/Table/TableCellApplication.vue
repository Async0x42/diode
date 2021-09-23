<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication> },
});
</script>

<template>
  <td>
    <router-link v-if="props.application" :to="{ name: 'application-view', params: { applicationId: props.application.id } }">
      <ApplicationTooltip :application="props.application">
        <div class="text-grey-300 hover:cursor-pointer hover:text-teal-300">
          <span v-if="props.application?.shortName" class="whitespace-nowrap"> [{{ props.application?.shortName }}] </span>
          {{ props.application?.name }}
        </div>
      </ApplicationTooltip>
    </router-link>
  </td>
</template>
