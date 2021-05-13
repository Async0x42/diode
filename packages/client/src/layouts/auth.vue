<script setup lang="ts"></script>

<template>
  <div class="bg-white flex h-screen overflow-hidden">
    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <main class="flex-1 relative overflow-y-auto focus:outline-none">
        <router-view />
      </main>
    </div>
  </div>
</template>
