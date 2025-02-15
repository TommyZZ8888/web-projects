<template>
  <div>{{title}}</div>
  <button @click="send"></button>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});

const emit = defineEmits(["send"]);

const send = () => {
  emit("send","send from C")
};
</script>

<style lang="scss" scoped></style>
