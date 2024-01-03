<template>
  <div class="grid grid-cols-1 gap-4 mt-4 overflow-y-auto custom-scrollbar pr-2">
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
const persons = usePersons().value;

const handleNewChat = (id) => {};
</script>

<style lang="scss">
.custom-scrollbar {
  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4f46e5; /* Cor do "ponteiro" da barra de rolagem */
    border-radius: 6px; /* Raio do "ponteiro" da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background-color: #edf2f7; /* Cor de fundo da barra de rolagem */
    border-radius: 6px; /* Raio do fundo da barra de rolagem */
  }
}
</style>
