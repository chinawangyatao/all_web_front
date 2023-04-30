<template>
  <div style="border-radius: 15px">
    <a-carousel autoplay class="mx-2">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
    </a-carousel>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
  border-radius: 15px;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
