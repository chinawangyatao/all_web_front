<template>
  <div id="msg"></div>
</template>

<script setup>
import Player from "xgplayer";
import { onMounted, ref, watch, watchEffect } from "vue";
import { useWindowSize } from "@vueuse/core";

onMounted(() => {
  playVodeo();
});

// 获取屏幕尺寸
const { width, height } = useWindowSize();
const videoWidth = ref(1280);
const videHeight = ref(720);

watchEffect((width) => {
  if (width > 1920) {
    videoWidth.value = 1920;
    videHeight.value = 1080;
  } else if (width > 1280 && width < 1920) {
    videoWidth.value = 1280;
    videHeight.value = 720;
  } else if (width < 1280) {
    videoWidth.value = 854;
    videHeight.value = 480;
  }
});
const playVodeo = () => {
  new Player({
    width: videoWidth.value,
    height: videHeight.value,
    id: "msg",
    url: "https://player.vimeo.com/external/365471710.sd.mp4?s=f8837829290e3dcd617ea3f6d33cf7a20f753694&profile_id=164&oauth2_token_id=57447761", //视频url
    poster: "https://picsum.photos/1280/720?random=3", //封面图
  });
};
</script>

<style scoped></style>
