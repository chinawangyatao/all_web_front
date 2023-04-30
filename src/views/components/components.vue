<template>
  <div class="container px-[1rem] lg:mx-auto xl:mx-auto 2xl:mx-auto">
    <h1
      class="text-3xl text-white my-10 animate__animated animate__slideInLeft"
    >
      A place to store front-end experience
    </h1>
  </div>

  <div
    class="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 px-5 overflow-x-auto animate__animated animate__slideInUp"
  >
    <div class="row-span-2 bg-red-800 rounded-lg"></div>
    <template v-for="item in 10">
      <div>
        <img class="rounded-lg" :src="bg" />
      </div>
    </template>
  </div>

  <div class="container px-[1rem] lg:mx-auto xl:mx-auto 2xl:mx-auto">
    <h1
      class="text-3xl text-white my-10 animate__animated animate__slideInLeft"
    >
      A place to store front-end experience
    </h1>
  </div>

  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-5">
    <template v-for="item in 4">
      <div class="bg-black-blackhbg py-10 flex flex-col m-5">
        <h1 class="text-2xl font-bold text-white px-10">这是一个测试组件</h1>
        <h2 class="text-white px-10 my-3">你可能不知道，我只是一个测试组件</h2>
        <h3 class="text-white px-10 text-xs">
          你可能不知道，我只是一个测试组件
        </h3>
      </div>
    </template>
  </div>
</template>

<script setup>
import bg from "@/assets/image/store-card-25-genius-202108.jpeg";
import {
  ChevronDownIcon,
  ChevronDoubleDownIcon,
  LinkIcon,
} from "@heroicons/vue/24/solid";
</script>

<style scoped lang="scss"></style>
