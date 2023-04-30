<template>
  <div class="container mx-auto">
    <div class="container px-[1rem] lg:mx-auto xl:mx-auto 2xl:mx-auto">
      <h1
        class="text-3xl text-white my-10 font-bold animate__animated animate__slideInLeft"
      >
        一个放自己照片的地方
      </h1>
    </div>
    <div class="flex justify-center cursor-pointer my-10">
      <div
        class="inline-block bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mx-2"
      >
        #人像
      </div>
      <div
        class="inline-block bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mx-2"
      >
        #风景
      </div>
      <div
        class="inline-block bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mx-2"
      >
        #构图
      </div>
    </div>
    <div class="container sm:pl-[10%] animate__animated animate__slideInUp">
      <div v-masonry transition-duration="0.3s" item-selector=".item">
        <div
          v-masonry-tile
          horizontal-order="true"
          class="item"
          v-for="i in 50"
        >
          <!-- item -->
          <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <img
              class="w-full"
              :src="`https://picsum.photos${whichPhoto(i)}?random=` + i"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">这是一张测试的图片</div>
              <p class="text-gray-700 text-base">
                他强任他强，清风拂山岗，十五六岁的那股清风，越过了重重山岗，
                吹到今天，他也还是最好的年纪，这就是上天对勇敢的女孩最好的奖励。
              </p>
            </div>
            <div class="px-6 py-4">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >#摄影</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >#旅行</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                >#构图</span
              >
            </div>
          </div>

          <!-- END item -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PublicHeader from "@/components/publicHeader/publicHeader.vue";
const whichPhoto = (val) => {
  // 判断是不是3的质数
  if (val % 3 == 0) {
    return "/300/400";
  } else if (val % 4 == 0) {
    return "/200/100";
  } else if (val % 5 == 0) {
    return "/300/600";
  } else {
    return "/800/400";
  }
};
</script>

<style scoped lang="scss"></style>
