import { defineStore } from "pinia";
import { getAboutUs, getNewArticle, getUser } from "@/api";
const useHomeStore = defineStore("home", {
  state: () => {
    return {
      categoryList: [],
      aboutUsTitle: [],
      newArticleList: [],
    };
  },
  actions: {
    // 获取列表数据
    async getUserData() {
      const res = await getUser();
      this.categoryList = res;
    },
    // 获取关于自己数据
    async getAboutUsData() {
      const res = await getAboutUs();
      this.aboutUsTitle = res;
    },
    // 获取最近文章数据
    async getNewArticleData() {
      const res = await getNewArticle();
      this.newArticleList = res;
    },
  },
  getters: {},
});

export default useHomeStore;
