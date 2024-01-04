<template>
  <div
    class="flex flex-row gap-3 items-center border-b border-white border-opacity-10 pb-4"
  >
    <NuxtLink to="/">
      <ChevronLeftIcon class="w-8 h-8 text-white rounded cursor-pointer" />
    </NuxtLink>
    <div class="flex flex-row gap-3">
      <img
        v-if="image"
        class="w-8 h-8 rounded-lg shadow-sm"
        :src="image"
        :alt="name"
      />
      <p class="text-white text-2xl font-medium">{{ name }}</p>
    </div>
  </div>
</template>

<script setup>
import {
  ChevronLeftIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps(["name", "image"]);
</script>

<style></style>
