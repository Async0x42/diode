<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
name: 404

meta:
  layout: 404
</route>
