<script setup lang="ts">
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication> },
});
</script>

<template>
  <n-td>
    <router-link v-if="props.application" :to="{ name: 'application-view', params: { applicationId: props.application.id } }">
      <n-text tag="div" depth="1" class="hover:text-teal-300">
        <span v-if="props.application?.shortName" class="whitespace-nowrap"> [{{ props.application?.shortName }}] </span>
        {{ props.application?.name }}
      </n-text>
    </router-link>
  </n-td>
</template>
