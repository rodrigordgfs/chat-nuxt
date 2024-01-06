<template>
  <div class="bg-zinc-800 w-full h-screen flex flex-col items-center">
    <div
      class="max-w-full w-96 h-screen flex flex-col p-4 bg-zinc-900 shadow-lg"
    >
      <Header />
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style></style>
