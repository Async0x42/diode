<script setup lang="ts">
import { darkTheme, enUS, dateEnUS } from 'naive-ui';
import { isDark } from './logic';

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'DIODE',
  meta: [{ name: 'description', content: 'Dynamic Information Organizer Dashboard for EPIC - Keeping the lights on' }],
});

const theme = computed(() => (isDark ? darkTheme : null));
</script>

<template>
  <n-config-provider :theme="theme" :locale="enUS" :date-locale="dateEnUS">
    <n-theme-editor>
      <n-loading-bar-provider>
        <n-message-provider>
          <n-notification-provider>
            <n-dialog-provider>
              <router-view />
            </n-dialog-provider>
          </n-notification-provider>
        </n-message-provider>
      </n-loading-bar-provider>
      <n-global-style />
    </n-theme-editor>
  </n-config-provider>
</template>
