<script setup lang="ts">
import type { IApplication } from '@diode/common';
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  application: { type: Object as PropType<IApplication> },
});
</script>

<template>
  <td class="py-4 px-6 whitespace-nowrap">
    <router-link v-if="application" class="group" :to="{ name: 'application-view', params: { serverId: props.application.id } }">
      <div class="text-sm text-gray-900 group-hover:border-l-1 group-hover:border-blue-300">
        <template v-if="props.application?.shortName"> [{{ props.application?.shortName }}] </template>
        {{ props.application?.name }}
      </div>
    </router-link>
  </td>
</template>
