<template>
  <div
    class="container py-10 h-screen color fixed overflow-y-scroll flex flex-col items-center z-60"
  >
    <div class="mt-20">
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
    <div class="">
      <p class="relative text-9xl font-bold text-zinc-500">Article</p>
    </div>
    <p class="text-white md:px-[10rem] sm:px-10 leading-10 mt-10">
      本文研究了计算机科学技术在校园博客中的应用。校园博客作为一种新兴的交流和分享平台，已经在大学校园中广泛应用。本文主要从三个方面探讨了计算机科学技术在校园博客中的应用。
      首先，本文讨论了计算机科学技术在校园博客中的文章推荐系统。在校园博客中，文章推荐系统是非常重要的，它可以为用户提供有价值的文章，提高用户体验。本文分析了目前常用的文章推荐算法，并提出了基于用户行为和文章内容的混合推荐算法。该算法结合了用户的历史行为和文章的内容特征，可以更准确地推荐有价值的文章。
      其次，本文研究了计算机科学技术在校园博客中的评论情感分析。在校园博客中，评论是用户交流和互动的重要方式。本文提出了一种基于深度学习的评论情感分析模型。该模型可以自动识别评论中的情感极性，为用户提供更好的交流和互动体验。
      最后，本文探讨了计算机科学技术在校园博客中的安全性问题。在校园博客中，用户的隐私和数据安全是非常重要的。本文介绍了一些常见的安全攻击方式，并提出了一些相应的安全防护措施。这些措施包括密码加密、访问控制、数据备份等，可以有效保护用户的隐私和数据安全。
      综上所述，本文研究了计算机科学技术在校园博客中的应用，并提出了文章推荐系统、评论情感分析和安全防护措施三个方面的解决方案。这些方案可以有效提高校园博客的用户体验和安全性，为校园博客的发展做出贡献。同时，本文的研究结果也可以为其他类似的交流和分享平台提供参考。
    </p>
    <img class="rounded-lg my-10" :src="bgimage" />
    <p class="text-white md:px-[10rem] sm:px-10 leading-10 mt-10">
      本文研究了计算机科学技术在校园博客中的应用。校园博客作为一种新兴的交流和分享平台，已经在大学校园中广泛应用。本文主要从三个方面探讨了计算机科学技术在校园博客中的应用。
      首先，本文讨论了计算机科学技术在校园博客中的文章推荐系统。在校园博客中，文章推荐系统是非常重要的，它可以为用户提供有价值的文章，提高用户体验。本文分析了目前常用的文章推荐算法，并提出了基于用户行为和文章内容的混合推荐算法。该算法结合了用户的历史行为和文章的内容特征，可以更准确地推荐有价值的文章。
      其次，本文研究了计算机科学技术在校园博客中的评论情感分析。在校园博客中，评论是用户交流和互动的重要方式。本文提出了一种基于深度学习的评论情感分析模型。该模型可以自动识别评论中的情感极性，为用户提供更好的交流和互动体验。
      最后，本文探讨了计算机科学技术在校园博客中的安全性问题。在校园博客中，用户的隐私和数据安全是非常重要的。本文介绍了一些常见的安全攻击方式，并提出了一些相应的安全防护措施。这些措施包括密码加密、访问控制、数据备份等，可以有效保护用户的隐私和数据安全。
      综上所述，本文研究了计算机科学技术在校园博客中的应用，并提出了文章推荐系统、评论情感分析和安全防护措施三个方面的解决方案。这些方案可以有效提高校园博客的用户体验和安全性，为校园博客的发展做出贡献。同时，本文的研究结果也可以为其他类似的交流和分享平台提供参考。
    </p>
    <img class="rounded-lg my-10" :src="bgimage1" />
  </div>
</template>

<script setup>
import bgimage from "@/assets/image/gifr.gif";
import bgimage1 from "@/assets/image/gift2.gif";
defineProps({
  tableList: {
    type: Array,
  },
});
</script>

<style scoped>
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
