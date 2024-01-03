<template>
  <div class="flex-1">
    <form @submit.prevent="performSearch" class="mt-4">
    <div class="bg-zinc-800 rounded-lg p-3 flex flex-row items-center gap-2">
      <MagnifyingGlassIcon class="w-6 h-6 text-white" />
      <input
        v-model="searchQuery"
        @input="handleInput"
        placeholder="Pesquisar conversas ..."
        class="bg-transparent w-full text-white placeholder-white focus:outline-none"
      />
    </div>
  </form>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

const searchQuery = ref("");

const handleInput = () => {};

const performSearch = () => {
  if (searchQuery.value.length >= 3) {
    console.log("Realizando busca para:", searchQuery.value);
  }
};
</script>

<style></style>
