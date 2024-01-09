<template>
  <form class="flex flex-row gap-2" @click.prevent="handleSendMessage">
    <div class="flex flex-row flex-1 gap-2 bg-gray-800 rounded-lg px-4 py-3">
      <input
        ref="refInputMessage"
        type="text"
        class="flex-1 bg-transparent text-white focus:outline-none"
        placeholder="Type a message"
        v-model="message"
      />
    </div>
    <button
      type="submit"
      :disabled="disabledSendButton"
      class="bg-blue-600 hover:bg-blue-900 disabled:bg-zinc-800 disabled:cursor-not-allowed rounded-lg px-4 py-2 text-white ml-2 focus:outline-none transition-all"
    >
      <PaperAirplaneIcon class="w-6 h-6" />
    </button>
  </form>
</template>

<script setup>
import { PaperAirplaneIcon, FaceSmileIcon } from "@heroicons/vue/24/solid";

const chatStore = useChatStore();
const userStore = useUserStore();
const loremIpsum = useLoremIpsum();

const props = defineProps(["id", "userId"]);
const emits = defineEmits(["typing"]);

const message = ref("");
const refInputMessage = ref(null);

const disabledSendButton = computed(() => !message.value);

const handleSendMessage = async () => {
  if (message.value) {
    await chatStore.newMessage(props.id, userStore.id, message.value);
    message.value = "";
    refInputMessage.value.focus();

    await nextTick();
    setTimeout(() => {
      emits("typing", true);
    }, 3000);

    setTimeout(async () => {
      const userMessage =
        loremIpsum.value[Math.floor(Math.random() * loremIpsum.value.length)];
      await chatStore.newMessage(props.id, props.userId, userMessage);
      emits("typing", false);
    }, 6000);
  }
};
</script>

<style></style>
