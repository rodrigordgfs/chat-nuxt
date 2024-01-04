<template>
  <div
    class="grid grid-cols-1 gap-4 mt-4 overflow-y-auto custom-scrollbar pr-2"
  >
    <ChatPerson
      v-for="{ id, name, image } in persons"
      :key="id"
      :name="name"
      :image="image"
      @click="handleNewChat(id)"
    />
  </div>
</template>

<script setup>
import { useChatStore } from "@/stores/chat";

const router = useRouter();
const chatStore = useChatStore();
const persons = usePersons().value;

const handleNewChat = async (id) => {
  const chatId = await chatStore.newChat(id);
  router.push(`/chat/${chatId}`);
};
</script>

<style lang="scss">
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
