<script>
import { defineComponent } from "vue";
import PublicHeader from "@/components/publicHeader/publicHeader.vue";

export default defineComponent({
  components: { PublicHeader },
});
</script>

<template>
  <div class="w-full h-10 bg-white text-2xl"><span>后端部署中</span></div>
  <public-header />
  <RouterView />
</template>

<style scoped></style>
