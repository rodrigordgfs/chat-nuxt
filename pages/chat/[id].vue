<template>
  <HeaderChat :id="chatId" :name="userName" :image="userImage" />
  <MessageList />
  <ChatInput :id="chatId" :userId="userId" />
</template>

<script setup>
definePageMeta({
  layout: "chat",
});

const chatStore = useChatStore();
const route = useRoute();

const chat = ref({});

const chatId = route.params.id;

chatStore.getChatById(chatId).then((data) => (chat.value = data));

const userName = computed(() => chat.value?.user?.name);
const userImage = computed(() => chat.value?.user?.image);
const userId = computed(() => chat.value?.user?.id);
</script>

<style></style>
