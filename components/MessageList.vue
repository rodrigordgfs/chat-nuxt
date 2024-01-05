<template>
  <div
    ref="refMessageList"
    class="flex flex-col flex-1 gap-4 my-4 pr-2 overflow-y-auto custom-scrollbar"
  >
    <Message
      v-for="message in messages"
      :key="message.id"
      :userId="message.userId"
      :message="message.text"
      :time="message.createdAt"
    />
  </div>
</template>

<script setup>
const props = defineProps(["messages"]);
const refMessageList = ref(null);

watch(
  () => props.messages,
  async () => {
    await nextTick();
    scrollToBottom();
  }
);

onMounted(() => {
  scrollToBottom();
});

const scrollToBottom = () => {
  if (refMessageList.value) {
    refMessageList.value.scrollTop = refMessageList.value.scrollHeight;
  }
};
</script>

<style lang="scss">
.custom-scrollbar {
  scrollbar-width: thin; /* para navegadores Firefox */
  scrollbar-color: #2563eb #edf2f7; /* para navegadores Firefox */
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
