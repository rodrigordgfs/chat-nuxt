<template>
  <div class="flex justify-end" v-if="isUserMessage">
    <div
      class="flex flex-col min-w-20 max-w-96 w-fit py-3 px-6 items-end bg-zinc-800 text-white rounded-t-3xl rounded-bl-3xl"
    >
      <p>
        {{ message }}
      </p>
      <p class="opacity-40 font-medium">{{ messageDate }}</p>
    </div>
  </div>
  <div v-else>
    <div
      class="flex flex-col min-w-20 max-w-96 w-fit py-3 px-6 bg-blue-600 text-white rounded-t-3xl rounded-br-3xl"
    >
      <p>
        {{ message }}
      </p>
      <p class="opacity-40 font-medium">{{ messageDate }}</p>
    </div>
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
