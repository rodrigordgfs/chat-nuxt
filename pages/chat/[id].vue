<template>
  <HeaderChat :id="chatId" :name="userName" :image="userImage" />
  <MessageList :messages="messages" />
  <ChatInput :id="chatId" :userId="userId" />
</template>

<script setup>
definePageMeta({
  layout: "chat",
});

const chatStore = useChatStore();
const route = useRoute();

const chatId = route.params.id;
const chat = ref({});

watchEffect(() => {
  chatStore.getChatById(chatId).then((data) => {
    chat.value = data;
  });
});

const userName = computed(() => chat.value?.user?.name);
const userImage = computed(() => chat.value?.user?.image);
const userId = computed(() => chat.value?.user?.id);
const messages = computed(() => chat.value?.messages || []);
</script>

<style></style>
