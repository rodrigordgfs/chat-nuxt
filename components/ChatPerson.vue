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
    <div
      v-else
      class="w-16 h-16 flex flex-row items-center justify-center text-white text-xl bg-blue-600 rounded-lg shadow-sm"
    >
      {{ initialsName }}
    </div>

    <div class="flex flex-col flex-1 justify-center overflow-hidden">
      <p class="text-white text-xl font-medium truncate whitespace-nowrap">
        {{ name }}
      </p>
      <p v-if="message" class="text-gray-400 truncate whitespace-nowrap">
        {{ message }}
      </p>
    </div>
    <div v-if="time" class="flex flex-col items-center justify-center">
      <p class="text-gray-400 text-sm font-medium">{{ time }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["image", "name", "message", "time"]);

const initialsName = computed(
  () => `${props.name.split(" ")[0][0]}${props.name.split(" ")[1][0]}`
);
</script>

<style></style>
