<script setup lang="ts">
import { replaceLinebreakWithHtml } from '~/utils';

const props = defineProps({
  details: { type: String },
});

const htmlDetails = computed(() => replaceLinebreakWithHtml(props.details))
</script>

<template>
  <n-td class="min-w-11 max-w-50vw">
    <n-text depth="1" class="max-h-16 overflow-ellipsis" v-html="htmlDetails"></n-text>
  </n-td>
</template>