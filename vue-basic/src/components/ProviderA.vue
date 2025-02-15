<template>
  <div>
    {{ colorA }}
  </div>
</template>

<script setup lang="ts">
import {ref,inject}from 'vue'
const colorA = inject("vv")
</script>

<style lang="scss" scoped></style>
