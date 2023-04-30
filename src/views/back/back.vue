<template>
  <div class="container px-[1rem] lg:mx-auto xl:mx-auto 2xl:mx-auto">
    <h1
      class="text-3xl text-white my-10 animate__animated animate__slideInLeft"
    >
      A place to store front-end experience
    </h1>
    <div class="flex flex-col group">
      <p
        class="flex justify-center cursor-pointer text_bg_color font-bold text-xl animate__animated animate__slideInLeft"
      >
        你可以选择标签来看到你想看到的内容
      </p>

      <div
        class="flex justify-center mt-2 group-hover:transform group-hover:translate-y-2 duration-500"
      >
        <chevron-double-down-icon
          class="text-white w-5 animate__animated animate__slideInUp"
        />
      </div>
      <div class="mt-7 flex flex-wrap cursor-pointer justify-center">
        <template v-for="(item, index) in titkeDate" :key="index">
          <div
            class="bg-white w-fit rounded-full mt-10 mx-7 hover:text-white hover:bg-gradient-to-r from-green-400 to-blue-500 duration-500 animate__animated animate__slideInUp"
          >
            <p class="px-8 text-lg">{{ item.title }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto grid pt-10 md:grid-cols-3 lg:grid-cols-3 animate__animated animate__slideInUp"
  >
    <template v-for="i in 10">
      <div class="h-[15rem] mx-3 my-4 h-auto bg-white rounded-lg">
        <div class="flex justify-center">
          <link-icon class="mt-5 w-5 text-blue-500" />
          <h1 class="mt-5 text-blue-500 ml-2">Hello Wold</h1>
        </div>
        <div class="w-24 h-24 rounded-full bg-red-700 container mx-auto">
          <img
            class="rounded-full"
            :src="`https://picsum.photos/200/200?random=${i}`"
          />
        </div>
        <div class="mx-5 my-3">
          <h1 class="text-center text-ms text-zinc-900">
            Vue的响应式原理是什么？
          </h1>
          <h2 class="text-xs mt-3 text-zinc-400 pb-5">
            vue的响应式原理分为vue2和vue3，vue2是使用Object.definitely进行的劫持
          </h2>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import {
  ChevronDownIcon,
  ChevronDoubleDownIcon,
  LinkIcon,
} from "@heroicons/vue/24/solid";
import { ref } from "vue";
const titkeDate = ref([
  { title: "ALL" },
  { title: "NodeJs" },
  { title: "MySql" },
  { title: "NestJs" },
  { title: "EXpress" },
]);
</script>

<style scoped lang="scss"></style>
