<template>
  <HeaderChat
    :id="chatId"
    :name="userName"
    :image="userImage"
    :typing="typing"
  />
  <MessageList :messages="messages" />
  <ChatInput :id="chatId" :userId="userId" @typing="userTyping" />
</template>

<script setup>
definePageMeta({
  layout: "chat",
});

const chatStore = useChatStore();
const route = useRoute();

const chatId = route.params.id;
const chat = ref({});
const typing = ref(false);

watchEffect(() => {
  chatStore.getChatById(chatId).then((data) => {
    chat.value = data;
  });
});

const userName = computed(() => chat.value?.user?.name);
const userImage = computed(() => chat.value?.user?.image);
const userId = computed(() => chat.value?.user?.id);
const messages = computed(() => chat.value?.messages || []);

const userTyping = (value) => {
  typing.value = value;
};
</script>

<style></style>
