<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { logout } from '~/logic';

const router = useRouter();

onMounted(async () => {
  await logout();
  router.push({ name: 'login' });
});
</script>

<template>
  <div>Logging out.</div>
</template>

<route lang="yaml">
name: logout

meta:
  layout: auth
</route>
