<template>
  <form class="flex flex-row gap-2" @click.prevent="handleSendMessage">
    <div class="flex flex-row flex-1 gap-2 bg-gray-800 rounded-lg px-4 py-3">
      <input
        type="text"
        class="flex-1 bg-transparent text-white focus:outline-none"
        placeholder="Type a message"
        v-model="message"
      />
      <FaceSmileIcon class="w-6 h-6 text-white cursor-pointer" />
    </div>
    <button
      type="submit"
      class="bg-blue-600 rounded-lg px-4 py-2 text-white ml-2 focus:outline-none"
    >
      <PaperAirplaneIcon class="w-6 h-6" />
    </button>
  </form>
</template>

<script setup>
import { PaperAirplaneIcon, FaceSmileIcon } from "@heroicons/vue/24/solid";

const chatStore = useChatStore();
const userStore = useUserStore();

const props = defineProps(["id", "userId"]);

const message = ref("");

const handleSendMessage = async () => {
  if (message.value) {
    await chatStore.newMessage(props.id, userStore.id, message.value);
    message.value = "";
  }
};
</script>

<style></style>
