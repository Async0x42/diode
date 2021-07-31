<script setup lang="ts">
import type { IContactGroup } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contactGroups: { type: Object as PropType<IContactGroup[]>, required: true },
});
</script>

<template>
  <n-text v-for="contactGroup in props.contactGroups" :key="contactGroup.id" tag="div" depth="1" class="mb-2 hover:text-teal-300">
    {{ contactGroup.name }}
  </n-text>
</template>
