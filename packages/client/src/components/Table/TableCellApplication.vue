<script setup lang="ts">
import type { IApplication } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication> },
});
</script>

<template>
  <n-td>
    <router-link v-if="props.application" :to="{ name: 'application-view', params: { applicationId: props.application.id } }">
      <div class="text-sm text-gray-900 hover:bg-gray-200">
        <span v-if="props.application?.shortName" class="whitespace-nowrap"> [{{ props.application?.shortName }}] </span>
        {{ props.application?.name }}
      </div>
    </router-link>
  </n-td>
</template>
