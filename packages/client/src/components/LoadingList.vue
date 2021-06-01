<script setup lang="ts"></script>

<template>
  <div class="rounded-t bg-red-300 p-10 text-gray-600 leading-6 overflow-hidden">
    <div class="flex text-gray-600 justify-around">
      <span class="rounded-md shadow-xs inline-flex">
        <button
          type="button"
          class="bg-none border border-transparent border-solid rounded-md cursor-not-allowed font-medium bg-red-600 m-0 text-base text-center text-white py-2 px-4 ease-in-out duration-150 inline-flex items-center normal-case box-border hover:bg-red-600 focus:border-red-700"
          disabled
          control-id="ControlID-6"
          style="
            transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter,
              -webkit-backdrop-filter;
          "
        >
          <svg class="h-5 mr-3 animate-spin w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing
        </button>
      </span>
    </div>
  </div>
</template>
