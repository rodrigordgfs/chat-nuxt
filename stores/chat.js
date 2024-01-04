import { defineStore } from "pinia";
import { onMounted, nextTick } from "vue";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const useChatStore = defineStore("chat", () => {
  const persons = usePersons();

  const chat = ref([]);

  const initChat = async () => {
    if (process.client && localStorage.getItem("chat")) {
      await nextTick();
      chat.value = JSON.parse(localStorage.getItem("chat"));
    }
  };

  onMounted(initChat);

  const saveToLocalStorage = async () => {
    if (process.client) {
      await nextTick();
      localStorage.setItem("chat", JSON.stringify(chat.value));
    }
  };

  const findChatByUserId = (userId) => {
    return chat.value.find((c) => c.userId === userId);
  };

  const newChat = async (userId) => {
    if (!chat.value) {
      chat.value = [];
    }

    const existingChat = findChatByUserId(userId);

    if (existingChat) {
      return existingChat.id;
    }

    const newChat = {
      id: uuidv4(),
      userId: userId,
      messages: [],
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    chat.value.push(newChat);

    await saveToLocalStorage();

    return newChat.id;
  };

  const listChats = async () => {
    await initChat();

    const chatData = chat.value
      .map((c) => ({
        id: c.id,
        user: persons.value.find((p) => p.id === c.userId),
        messages: [],
        createdAt: moment(c.createdAt).format("HH:mm"),
      }))
      .sort((a, b) =>
        moment(b.createdAt, "HH:mm").diff(moment(a.createdAt, "HH:mm"))
      );

    return chatData;
  };

  const getChatById = async (id) => {
    const chatData = chat.value
      .filter((c) => c.id === id)
      .map((c) => {
        return {
          id: c.id,
          user: persons.value.find((p) => p.id === c.userId),
          messages: [],
          // createdAt: moment(c.createdAt).startOf("hour").fromNow(),
          createdAt: moment(c.createdAt).format("HH:mm"),
        };
      });
    return chatData[0];
  };

  const deleteChat = async (id) => {
    chat.value = await chat.value.filter((c) => c.id !== id);
    saveToLocalStorage();
  };

  const newMessage = async (id, userId, text) => {
    const chatIndex = chat.value.findIndex((c) => c.id === id);
    if (chatIndex !== -1) {
      const newMessage = {
        id: uuidv4(),
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        userId,
        text,
      };
      chat.value[chatIndex].messages = [
        ...chat.value[chatIndex].messages,
        newMessage,
      ];
      await saveToLocalStorage();
      return newMessage.id;
    }
    return null;
  };

  return {
    chat,
    newChat,
    listChats,
    getChatById,
    deleteChat,
    newMessage,
  };
});
