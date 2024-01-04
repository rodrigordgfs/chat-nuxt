<template>
  <div class="flex-1 overflow-y-auto custom-scrollbar mt-4">
    <form @submit.prevent="performSearch" class="pr-2">
      <div class="bg-zinc-800 rounded-lg p-3 flex flex-row items-center">
        <MagnifyingGlassIcon class="w-6 h-6 text-white" />
        <input
          v-model="searchQuery"
          @input="handleInput"
          placeholder="Pesquisar conversas ..."
          class="bg-transparent w-full text-white placeholder-white focus:outline-none"
        />
      </div>
    </form>
    <div class="grid grid-cols-1 gap-4 mt-4 pr-2">
      <ChatPerson
        v-for="chat in chats"
        :key="chat.id"
        :name="chat.user.name"
        :image="chat.user.image"
        :message="chat.messages[0]?.message"
        :time="chat.createdAt"
        @click="handleOpenChat(chat.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

const chatStore = useChatStore();
const router = useRouter();

const chats = ref([]);

chatStore.listChats().then((data) => (chats.value = data));

const searchQuery = ref("");

const handleInput = () => {};

const performSearch = () => {
  if (searchQuery.value.length >= 3) {
    console.log("Realizando busca para:", searchQuery.value);
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
