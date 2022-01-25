<script setup lang="ts"></script>

<template>
  <n-button small>
    <template #icon>
      <n-icon class="pl-0.75">
        <slot name="icon"></slot>
      </n-icon>
    </template>
    <slot></slot>
  </n-button>
</template>
