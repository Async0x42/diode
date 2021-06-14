<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { navigation, isMobile, isTablet } from '~/logic';

const route = useRoute();
const router = useRouter();
const activeRouteNameOrPath = computed(() => (route.name?.valueOf() as string) || route.path);

const handleMenuUpdateValue = (key: any) => router.push({ name: key });
</script>

<template>
  <n-layout :position="isMobile || isTablet ? 'static' : 'absolute'" class="root-layout">
    <SiteHeader />
    <!-- <SidebarMobile />
    <SidebarDesktop /> -->
    <n-layout
      id="doc-layout"
      :has-sider="true"
      :position="isMobile || isTablet ? 'static' : 'absolute'"
      :style="{
        top: isMobile || isTablet ? '' : 'var(--header-height)',
      }"
    >
      <n-layout-sider
        :native-scrollbar="false"
        :collapsed-width="0"
        collapse-mode="transform"
        bordered
        show-trigger="bar"
        trigger-style="top: calc(50% - var(--header-height));"
      >
        <n-menu :value="activeRouteNameOrPath" :options="navigation" @update:value="handleMenuUpdateValue" />
      </n-layout-sider>
      <n-layout
        :native-scrollbar="false"
        position="static"
        content-style="min-height: calc(100vh - var(--header-height)); display: flex; flex-direction: column;"
      >
        <router-view />
      </n-layout>
    </n-layout>
  </n-layout>
</template>
