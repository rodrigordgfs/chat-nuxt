<template>
  <div
    v-if="isUserMessage"
    class="flex flex-col p-3 items-end bg-zinc-800 text-white rounded-t-3xl rounded-bl-3xl"
  >
    <p>
      {{ message }}
    </p>
    <p class="opacity-40 font-medium">{{ messageDate }}</p>
  </div>

  <div
    v-else
    class="flex flex-col p-3 bg-blue-600 text-white rounded-t-3xl rounded-br-3xl"
  >
    <p>
      {{ message }}
    </p>
    <p class="opacity-40 font-medium">{{ messageDate }}</p>
  </div>
</template>

<script setup>
import moment from "moment";
const props = defineProps(["userId", "message", "time"]);

const userStore = useUserStore();

const isUserMessage = userStore.id === props.userId;

const messageDate = moment(props.time, "YYYY-MM-DD HH:mms:ss").fromNow();
</script>

<style></style>
