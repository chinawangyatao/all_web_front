<template>
  <div class="py-2 h-[80vh] flex flex-col">
    <h2 class="text-xl text-zinc-900 font-bold mb-2 px-1">
      <ul class="overflow-y-scroll">
        <li>全部分类</li>
        <li
          v-for="(item, index) in dataList"
          :key="index"
          class="text-lg text-zinc-800 px-1 py-1.5 duration-100 active:bg-zinc-100"
          @click="$emit('onClick', index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </h2>
  </div>
</template>

<script setup>
defineProps({
  dataList: {
    type: Array,
    required: true,
  },
});
defineEmits(["onClick"]);
</script>

<style scoped lang="scss"></style>
