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
    <p class="text-white text-2xl font-medium">Chat Nuxt</p>
    <NuxtLink
      to="/contacts"
      class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-zinc-800 transition-all"
    >
      <PencilSquareIcon
        class="w-7 h-7 text-white"
        :class="{
          'opacity-10 cursor-not-allowed': isContactRoute,
          'opacity-100 cursor-pointer': !isContactRoute,
        }"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
import { HomeIcon, PencilSquareIcon } from "@heroicons/vue/24/solid";

const route = useRoute();

const isHomeRoute = computed(() =>
  route.matched.some(({ name }) => name === "index")
);

const isContactRoute = computed(() =>
  route.matched.some(({ name }) => name === "contacts")
);
</script>

<style></style>
