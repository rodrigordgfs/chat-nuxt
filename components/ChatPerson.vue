<template>
  <div
    class="flex flex-row gap-3 border border-white border-opacity-10 rounded-lg p-2 cursor-pointer max-w-full w-full hover:bg-zinc-800 transition-all"
  >
    <img
      v-if="image"
      class="w-16 h-16 rounded-lg shadow-sm"
      :src="image"
      :alt="name"
    />
    <div v-else></div>
    <div class="flex flex-col flex-1 justify-center overflow-hidden">
      <p class="text-white text-xl font-medium truncate whitespace-nowrap">
        {{ name }}
      </p>
      <p v-if="message" class="text-gray-400 truncate whitespace-nowrap">
        {{ message }}
      </p>
    </div>
    <div v-if="time" class="flex flex-col items-center justify-center">
      <p class="text-gray-400 text-sm font-medium">12:00</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["image", "name", "message", "time"]);
</script>

<style></style>
