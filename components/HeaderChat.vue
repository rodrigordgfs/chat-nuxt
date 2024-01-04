<template>
  <div
    class="flex flex-row gap-3 items-center justify-between border-b border-white border-opacity-10 pb-4"
  >
    <div class="flex flex-row items-center gap-3">
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
    <TrashIcon
      class="w-8 h-8 text-red-500 cursor-pointer"
      @click="handleDeleteChat"
    />
  </div>
</template>

<script setup>
import { ChevronLeftIcon, TrashIcon } from "@heroicons/vue/24/solid";

const props = defineProps(["id", "name", "image"]);

const chatStore = useChatStore();
const router = useRouter();

const initialsName = computed(() => {
  if (props.name) {
    return `${props.name.split(" ")[0][0]}${props.name.split(" ")[1][0]}`;
  }
});

const handleDeleteChat = () => {
  chatStore.deleteChat(props.id);
  router.push("/");
};
</script>

<style></style>
