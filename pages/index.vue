<template>
  <div class="flex-1 overflow-y-auto custom-scrollbar mt-4">
    <form @submit.prevent="performSearch" class="pr-4">
      <div class="bg-zinc-800 rounded-lg p-3 flex flex-row items-center gap-3">
        <MagnifyingGlassIcon class="w-6 h-6 text-white" />
        <input
          v-model="searchQuery"
          @input="handleInput"
          placeholder="Search conversations ..."
          class="bg-transparent w-full text-white placeholder-white focus:outline-none"
        />
        <NuxtLink to="/contacts" class="fixed bottom-4 right-4">
          <button
            class="p-4 bg-blue-600 hover:bg-blue-900 rounded-full shadow-md transition-all"
          >
            <PlusIcon class="w-6 h-6 text-white" />
          </button>
        </NuxtLink>
      </div>
    </form>
    <div class="grid grid-cols-1 gap-4 mt-4 pr-4">
      <ChatPerson
        v-for="chat in chats"
        :key="chat.id"
        :name="chat.user.name"
        :image="chat.user.image"
        :message="chat.messages[chat.messages.length - 1]?.text"
        :time="chat.createdAt"
        @click="handleOpenChat(chat.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/vue/24/solid";

definePageMeta({
  name: "Home",
});

const chatStore = useChatStore();
const router = useRouter();

const chats = ref([]);

chatStore.listChats().then((data) => (chats.value = data));

const searchQuery = ref("");

const handleInput = () => {};

const performSearch = () => {
  if (searchQuery.value.length >= 3) {
    console.log("Realizando busca para:", searchQuery.value, chats.value);
  }
};

const handleOpenChat = (chatId) => {
  router.push(`/chat/${chatId}`);
};
</script>

<style lang="scss" scoped>
.custom-scrollbar {
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2563eb;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #edf2f7;
    border-radius: 6px;
  }
}
</style>
