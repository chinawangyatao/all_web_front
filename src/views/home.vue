<template>
  <!--    say Hi-->
  <div class="h-72 color flex flex-col items-center">
    <div
      class="w-24 h-24  mt-5 animate__animated animate__slideInUp"
    >
      <img class="w-24 h-24 ml-1 mt-1 rounded-full" :src="head_portrait" />
    </div>
    <div class="mt-5">
      <p
        class="text-white font-bold text-3xl hStyle animate__animated animate__slideInUp"
      >
        Hi, I'm Kim
      </p>
    </div>
    <div
      class="w-5/6 animate__animated animate__slideInUp flex flex-col items-center text-white font-bold mt-10"
    >
      <p class="my-1">这是基于vue3搭建的个人网站，</p>
      <p>一个用来记录自己<span class="text-lg mx-1">奇思妙想</span>的地方</p>
    </div>
  </div>
  <!--    关于自己-->
  <div class="my-10 container px-[1rem] lg:mx-auto xl:mx-auto 2xl:mx-auto">
    <h2 class="text-white font-bold text-2xl">
      关于自己 <span class="ml-2">👋</span>
    </h2>
    <div class="my-2 animate__animated animate__slideInLeft">
      <p class="text-white font-bold text-md text-center">
        {{ titleText }}
      </p>
    </div>
  </div>

  <!--   最新文章 -->
  <div class="my-10 px-[1rem] container lg:mx-auto xl:mx-auto 2xl:mx-auto">
    <h2 class="text-white font-bold text-2xl">
      最新文章<span class="ml-2">📖</span>
    </h2>
    <div class="container lg:flex lg:flex-nowrap lg:overflow-x-auto">
      <template v-for="(item, index) in home.newArticleList" :key="index">
        <div
          class="my-5 flex animate__animated animate__slideInLeft group"
          @click="isOpenClickArticle"
        >
          <div class="container md:w-[15rem] lg:w-[25rem] flex justify-center">
            <img class="rounded-lg" :src="item.coverUrl" />
          </div>
          <div
            class="px-5 mt-3 text-white animate__animated animate__slideInRight"
          >
            <div class="text-md w-40">
              {{ item.title }}
            </div>
              <div class="font-bold text-zinc-600 text-xs w-40">
                  {{ item.summary }}
              </div>
            <div
              class="flex items-center mt-10 text-zinc-600 group-hover:text-white duration-500"
            >
              查看更多<ArrowLongRightIcon
                class="w-10 h-7 group-hover:transform group-hover:translate-x-5 duration-500"
              />
            </div>
          </div>
        </div>
      </template>
    </div>
    <!--    查看更多-->
    <div class="flex justify-end cursor-default group">
      <div class="text-white text-xl underLine">更多的奇思妙想</div>
      <div class="flex items-center">
        <ArrowLongRightIcon
          class="mx-5 h-7 text-white group-hover:transform group-hover:translate-x-5 duration-500"
        />
      </div>
    </div>
  </div>

  <!--  代码块  -->
  <div class="my-10 px-[1rem] container lg:mx-auto xl:mx-auto 2xl:mx-auto">
    <h2 class="text-white font-bold text-2xl">
      代码块<span class="ml-2">🧱</span>
    </h2>
    <div class="container lg:flex lg:flex-nowrap lg:overflow-x-auto">
      <template v-for="(item, index) in codeText" :key="index">
        <div
          class="container lg:mr-5 my-5 flex flex-wrap justify-between wow animate__slideInUp"
        >
          <div class="group mb-5">
            <div class="relative">
              <div
                class="w-7 h-7 bg-yellow-500 rounded-lg drop-shadow absolute mt-2 right-2"
              >
                <p class="text-center text-ms font-bold mt-0.5">
                  {{ item.type }}
                </p>
              </div>
              <img class="rounded-t-lg w-50" :src="oneImage" />
            </div>

            <div class="w-auto h-16 bg-black-blackhbg rounded-b-lg flex">
              <div class="w-4/5 flex items-center">
                <p class="text-white font-bold text-xl m-5">
                  {{ item.title }}
                </p>
              </div>
              <div class="flex items-center">
                <ArrowLongRightIcon
                  class="h-7 text-white group-hover:transform group-hover:translate-x-5 duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!--      查看更多-->
    <div class="flex justify-end cursor-default group">
      <div class="text-white text-xl underLine">更多的奇思妙想</div>
      <div class="flex items-center">
        <ArrowLongRightIcon
          class="mx-5 h-7 text-white group-hover:transform group-hover:translate-x-5 duration-500"
        />
      </div>
    </div>
  </div>

  <!--   奇思妙想屋 -->
  <div class="my-10 px-[1rem] container lg:mx-auto xl:mx-auto 2xl:mx-auto">
    <h2 class="text-white font-bold text-2xl">
      奇思妙想屋<span class="ml-2">🏠</span>(哲学思考)
    </h2>
    <template v-for="(item, index) in houseText" :key="index">
      <div class="container w-full bg-black-blackhbg rounded-lg my-5">
        <div
          class="h-6 rounded-br-lg rounded-tl-lg text-white font-bold w-auto"
          :class="
            item.type === ('HTML' || 'JavaScript' || 'CSS')
              ? 'bg-amber-500'
              : 'bg-orange-500'
          "
        >
          <p class="mx-5">{{ item.type }}</p>
        </div>
        <div class="text-white">
          <p class="text-white text-lg font-bold my-3 mx-5">
            {{ item.title }}
          </p>
          <p class="text-zinc-400 text-ms my-3 mx-5">
            {{ item.Text }}
          </p>
        </div>
        <div class="h-3"></div>
      </div>
    </template>

    <div class="flex justify-end cursor-default group">
      <div class="text-white text-xl underLine">快来奇思妙想屋</div>
      <div class="flex items-center">
        <ArrowLongRightIcon
          class="mx-5 h-7 text-white group-hover:transform group-hover:translate-x-5 duration-500"
        />
      </div>
    </div>
  </div>
  <!--    推荐-->
  <div class="my-10 px-[1rem] container lg:mx-auto xl:mx-auto 2xl:mx-auto">
    <h2 class="text-white font-bold text-2xl">
      推荐<span class="ml-2">❤️</span>
    </h2>
    <div class="flex overflow-x-auto">
      <template v-for="(item, index) in recommendData" :key="index">
        <div class="mx-5 my-10" @click="isOpenClick">
          <img
            class="w-full rounded-t-lg"
            :src="`https://picsum.photos/800/400/?random=${index + 1}`"
          />
          <div class="w-[400px] bg-black-blackhbg text-center rounded-b-lg">
            <p class="text-white px-5 py-3">
              {{ item.title }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
  <popup-video v-model="isOpen">
    <div>
      <my-video></my-video>
    </div>
  </popup-video>
  <popup-video v-model="isOpenArticle">
    <article-details></article-details>
  </popup-video>
</template>

<script setup>
//引入静态资源
import head_portrait from "../assets/image/head_portrait.jpg";
import oneImage from "../assets/image/3-1.png";
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid";
import useStore from "@/stores";
import { onMounted, ref } from "vue";
import { getAboutUs, getCode, getHouse, getRecommend } from "@/api";
import MyVideo from "@/components/myvideo/myVideo.vue";
import PopupVideo from "@/components/myvideo/popupVideo.vue";
import ArticleDetails from "@/views/detailsPage/articleDetails.vue";
const { home } = useStore();
onMounted(() => {
  home.getNewArticleData();
  // getAboutUsData();
  // getcodeData();
  // gethouseData();
  // getRecommendData();
});











// 获取关于自己数据
let titleText = ref("");
const getAboutUsData = async () => {
  const res = await getAboutUs();
  titleText.value = res.content;
};

// 获取代码块数据
let codeText = ref("");
const getcodeData = async () => {
  const res = await getCode();
    console.log(res)
  codeText.value = res;
};
// 获取奇妙屋的数据
let houseText = ref("");
const gethouseData = async () => {
  const res = await getHouse();
  houseText.value = res;
};
// 获取推荐的数据
let recommendData = ref([]);
const getRecommendData = async () => {
  const res = await getRecommend();
  // console.log(res)
  recommendData.value = res;
};
// 弹出框
const isOpen = ref(false);
const isOpenClick = () => {
  isOpen.value = !isOpen.value;
};

// 文本弹出框
const isOpenArticle = ref(false);
const isOpenClickArticle = () => {
  isOpenArticle.value = !isOpenArticle.value;
};
</script>

<style scoped lang="scss">
.color {
  background: radial-gradient(
    20rem circle at 50% 120%,
    rgba(140, 38, 140, 0.6),
    #190e23
  );
}
.head_color {
  background: linear-gradient(90deg, #e73b50, #d430d4);
}
.hStyle {
  -webkit-box-reflect: below 2px -webkit-gradient(linear, center top, center
        bottom, from(transparent), color-stop(0.2, transparent), to(rgba(255, 255, 255, 0.3)));
}
/* css样式 */
.underLine {
  position: relative;
  text-decoration: none;
  font-size: 20px;
}
.underLine:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: linear-gradient(
    43.5deg,
    #ff0 -9.3%,
    #fb7c00 23.22%,
    #e73b50 46.1%,
    #d430d4 84.13%
  );
  transition: all 0.3s;
}
.underLine:hover:before {
  width: 100%;
  left: 0;
  right: 0;
}
</style>
