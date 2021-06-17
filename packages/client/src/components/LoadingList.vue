<script setup lang="ts"></script>

<template>
  <n-space vertical>
    <n-spin>
      <n-alert title="Loading" type="default">
        <template #icon>
          <n-icon>
            <ic-baseline-downloading />
          </n-icon>
        </template>
        Data is loading, please wait...
      </n-alert>
    </n-spin>
  </n-space>
</template>
