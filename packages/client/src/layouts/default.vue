<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMemo } from 'vooks';
import { navigation, isMobile, isTablet } from '~/logic';

const route = useRoute();
const router = useRouter();
const activeRouteNameOrPath = computed(() => (route.name?.valueOf() as string) || route.path);
const showSider = useMemo(() => !isMobile.value && !isTablet.value);

const handleMenuUpdateValue = (key: any) => router.push(key);
</script>

<template>
  <n-layout :position="isMobile ? 'static' : 'absolute'" class="root-layout">
    <SiteHeader />
    <!-- <SidebarMobile />
    <SidebarDesktop /> -->
    <n-layout
      id="doc-layout"
      :has-sider="showSider"
      :position="isMobile ? 'static' : 'absolute'"
      :style="{
        top: isMobile ? '' : 'var(--header-height)',
      }"
    >
      <n-layout-sider
        v-if="showSider"
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
        :position="isMobile || showSider ? 'static' : 'absolute'"
        content-style="min-height: calc(100vh - var(--header-height)); display: flex; flex-direction: column;"
      >
        <router-view />
        <site-footer />
      </n-layout>
    </n-layout>
  </n-layout>
</template>
