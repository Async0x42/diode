<script setup lang="ts"></script>

<template>
  <n-button small>
    <template #icon>
      <n-icon>
        <slot name="icon"></slot>
      </n-icon>
    </template>
    <slot></slot>
  </n-button>
</template>
