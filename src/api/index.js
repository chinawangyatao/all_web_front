import request from "@/utils/request";

// 导航栏接口
export const getUser = () => {
  return request({
    url: "/router",
  });
};

// 关于自己接口
export const getAboutUs = () => {
  return request({
    url: "/blog-articles/about_us",
  });
};
// 最新文章接口
export const getNewArticle = () => {
  return request({
    url: "/blog-articles",
  });
};
// 代码块接口
export const getCode = () => {
  return request({
    url: "/blog-articles",
  });
};

// 奇思妙想屋子接口
export const getHouse = () => {
  return request({
    url: "/blog-comment/house",
  });
};

// 推荐接口
export const getRecommend = () => {
  return request({
    url: "/blog-articles/recommend",
  });
};
