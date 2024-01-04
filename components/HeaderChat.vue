<template>
  <div
    class="flex flex-row gap-3 items-center border-b border-white border-opacity-10 pb-4"
  >
    <NuxtLink to="/">
      <ChevronLeftIcon class="w-8 h-8 text-white rounded cursor-pointer" />
    </NuxtLink>
    <img
      v-if="image"
      class="w-10 h-10 rounded-lg shadow-sm"
      :src="image"
      :alt="name"
    />
    <div
      v-else
      class="w-10 h-10 flex flex-row items-center justify-center text-white bg-blue-600 rounded-lg shadow-sm"
    >
      {{ initialsName }}
    </div>
    <div class="flex flex-col">
      <p class="text-white text-2xl font-medium">{{ name }}</p>
      <p class="font-medium text-green-500 text-sm">Online</p>
    </div>
  </div>
</template>

<script setup>
import {
  ChevronLeftIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps(["name", "image"]);

const initialsName = computed(() => {
  if (props.name) {
    return `${props.name.split(" ")[0][0]}${props.name.split(" ")[1][0]}`;
  }
});
</script>

<style></style>
