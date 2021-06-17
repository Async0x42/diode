<template>
  <n-popconfirm @positive-click="$emit('delete')">
    <template #trigger>
      <n-button :attrs="$attrs" type="error">Delete</n-button>
    </template>
    Are you sure you want to DELETE?
  </n-popconfirm>
</template>
