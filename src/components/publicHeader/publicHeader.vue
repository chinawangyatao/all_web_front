<template>
  <div class="bg-black-blackhbg sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-auto p-2 pr-10 text-md text-white font-bold"
    >
      <li
        :style="sliderStyle"
        class="h-[24px] top-2 rounded-3xl transition absolute duration-400 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400"
      ></li>
      <li
        :ref="sliderTarget"
        v-for="(item, index) in home.categoryList"
        :key="index"
        class="shrink-0 px-2 pb-0.5 z-10 mx-2 cursor-default"
        @click="changeAction(index)"
        :class="action === index ? 'text-white duration-500' : ' '"
      >
        {{ item.name }}
      </li>
    </ul>

    <div
      class="w-8 h-7 z-20 bg-black-blackhbg absolute top-1 right-0 shadow-l-white"
    >
      <Bars3Icon
        class="stroke-current h-7 w-6 text-zinc-500 ml-2 absolute right-2"
        @click="showClick"
      />
    </div>
  </div>
  <popup v-model="isShow">
    <home_menu
      :data-list="home.categoryList"
      @onClick="changeAction"
      @click="showClick"
    />
  </popup>
</template>

<script setup>
import { isMobileTerminal } from "@/utils/flexable";
import useStore from "@/stores";
import { onBeforeUpdate, onMounted, ref, toRefs, watch } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { useScroll } from "@vueuse/core";
import Home_menu from "@/views/home_menu.vue";
import Popup from "@/components/popup.vue";
import { useRouter } from "vue-router";

const { home } = useStore();
// 进入页面执行一下这个函数
onMounted(() => {
  home.getUserData();
});

const router = useRouter();
let action = ref(0);
const changeAction = (index) => {
  action.value = index;
  //   切换陆游
  switch (index) {
    case 0:
      router.push({ path: "/" });
      break;
    case 1:
      router.push({ path: "/front" });
      break;
    case 2:
      router.push({ path: "/back" });
      break;
    case 3:
      router.push({ path: "/components" });
      break;
    case 4:
      router.push({ path: "/project" });
      break;
    case 5:
      router.push({ path: "/interest" });
      break;
    case 6:
      router.push({ path: "/resume" });
      break;
  }
};

const sliderStyle = ref({
  transform: "translateX(2px)",
  width: "60px",
});

let itemRef = [];
const sliderTarget = (el) => {
  if (el) {
    itemRef.push(el);
  }
};
onBeforeUpdate(() => {
  itemRef = [];
});

const ulTarget = ref(null);
const { x } = useScroll(ulTarget);

watch(action, (val) => {
  const { left, width } = itemRef[val].getBoundingClientRect();
  sliderStyle.value = {
    transform: `translateX(${x.value + left - 14}px)`,
    width: `${width + 12}px`,
  };
});

let isShow = ref(false);
const showClick = () => {
  isShow.value = !isShow.value;
};
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
