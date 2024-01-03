<template>
  <div class="flex flex-row items-center justify-between">
    <NuxtLink to="/">
      <HomeIcon
        class="w-8 h-8 text-white rounded transition-all"
        :class="{
          'opacity-10 cursor-not-allowed': isHomeRoute,
          'opacity-100 cursor-pointer': !isHomeRoute,
        }"
      />
    </NuxtLink>
    <p class="text-white text-2xl font-medium">Chat Nuxt</p>
    <NuxtLink to="/contacts">
      <ChatBubbleLeftEllipsisIcon
        class="w-8 h-8 text-white rounded cursor-pointer"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";

const route = useRoute();

const isHomeRoute = computed(() =>
  route.matched.some(({ name }) => name === "index")
);
</script>

<style></style>
