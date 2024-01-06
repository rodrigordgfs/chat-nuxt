<template>
  <div
    class="flex flex-row gap-3 items-center justify-between border-b border-white border-opacity-10 pb-4"
  >
    <div class="flex flex-row items-center gap-3">
      <NuxtLink
        to="/"
        class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-zinc-800 transition-all"
      >
        <ChevronLeftIcon class="w-7 h-7 text-white rounded cursor-pointer" />
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
        <p
          class="font-medium text-sm"
          :class="{
            'typing-animation text-blue-600': typing,
            'text-green-500': !typing,
          }"
        >
          {{ typing ? "Typing" : "Online" }}
        </p>
      </div>
    </div>
    <div
      class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-zinc-800 transition-all"
    >
      <EllipsisVerticalIcon
        class="w-7 h-7 text-white cursor-pointer"
        @click="handleDeleteChat"
      />
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, EllipsisVerticalIcon } from "@heroicons/vue/24/solid";

const props = defineProps(["id", "name", "image", "typing"]);

const chatStore = useChatStore();
const router = useRouter();

const initialsName = computed(() => {
  if (props.name) {
    return `${props.name.split(" ")[0][0]}${props.name.split(" ")[1][0]}`;
  }
});

const handleDeleteChat = () => {
  // chatStore.deleteChat(props.id);
  // router.push("/");
};
</script>

<style lang="scss">
@keyframes typingAnimation {
  0% {
    content: ".";
  }
  33% {
    content: "..";
  }
  66% {
    content: "...";
  }
  100% {
    content: "";
  }
}

.typing-animation::after {
  content: "";
  animation: typingAnimation 1s infinite steps(1, end);
}
</style>
