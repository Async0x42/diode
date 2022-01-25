<script setup lang="ts">
import { replaceLinebreakWithHtml } from '~/utils';

const props = defineProps({
  details: { type: String },
});

const htmlDetails = computed(() => replaceLinebreakWithHtml(props.details))
</script>

<template>
  <n-text depth="1" v-html="htmlDetails"></n-text>
</template>
