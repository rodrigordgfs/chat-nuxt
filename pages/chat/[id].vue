<template>
  <HeaderChat :name="userName" :image="userImage" />
  <div class="text-white text-2xl">
    {{ chatId }}
  </div>
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
</script>

<style></style>
