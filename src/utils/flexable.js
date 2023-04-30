// 判断当前设备是什么设备

import PC_DEVICE_WIDTH from "@/constants";
import { computed } from "vue";
// 用vueuse API动态获取页面宽高数据
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH;
});

//动态设置rem值
