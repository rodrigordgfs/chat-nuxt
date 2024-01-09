<template>
  <div class="flex flex-row items-center justify-between">
    <NuxtLink
      to="/"
      class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-zinc-800 transition-all"
    >
      <HomeIcon
        class="w-7 h-7 text-white transition-all"
        :class="{
          'opacity-10 cursor-not-allowed': isHomeRoute,
          'opacity-100 cursor-pointer': !isHomeRoute,
        }"
      />
    </NuxtLink>
    <div class="flex flex-col justify-center items-center">
      <span class="text-white text-2xl font-medium">Chat Nuxt</span>
      <span class="text-gray-400 font-medium -m-1">{{ route.meta.name }}</span>
    </div>
    <NuxtLink
      to="/settings"
      class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-zinc-800 transition-all"
    >
      <Cog6ToothIcon
        class="w-7 h-7 text-white"
        :class="{
          'opacity-10 cursor-not-allowed': isSettingsRoute,
          'opacity-100 cursor-pointer': !isSettingsRoute,
        }"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
import { HomeIcon, Cog6ToothIcon } from "@heroicons/vue/24/solid";

const route = useRoute();

const isHomeRoute = computed(() =>
  route.matched.some(({ name }) => name === "Home")
);

const isSettingsRoute = computed(() =>
  route.matched.some(({ name }) => name === "Settings")
);
</script>

<style></style>
