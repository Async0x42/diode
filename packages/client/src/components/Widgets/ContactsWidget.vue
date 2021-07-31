<script setup lang="ts">
import type { IContact } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  contacts: { type: Object as PropType<IContact[]>, required: true },
});
</script>

<template>
  <n-text v-for="contact in props.contacts" :key="contact.id" tag="div" depth="1" class="mb-2 hover:text-teal-300">
    {{ contact.name }}
  </n-text>
</template>
