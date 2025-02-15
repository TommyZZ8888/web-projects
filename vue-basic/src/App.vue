<template>
<!--<Day1Test></Day1Test>-->
  <div>123</div>
</template>

<script setup lang="ts">
import Day1Test from '@/element/Day1Test.vue'

import {getTest} from '@/api/testApi.ts'



const getTestRes = (id:string) => {
  getTest(id).then((data) => {
    console.log(data.userId);
  });
};

getTestRes('3')


</script>

