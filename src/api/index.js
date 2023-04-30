import request from "@/utils/request";

// 导航栏接口
export const getUser = () => {
  return request({
    url: "/users",
  });
};

// 关于自己接口
export const getAboutUs = () => {
  return request({
    url: "/aboutUs",
  });
};
// 最新文章接口
export const getNewArticle = () => {
  return request({
    url: "/newArticle",
  });
};
// 代码块接口
export const getCode = () => {
  return request({
    url: "/codemodule",
  });
};

// 奇思妙想屋子接口
export const getHouse = () => {
  return request({
    url: "/house",
  });
};

// 推荐接口
export const getRecommend = () => {
  return request({
    url: "/recommend",
  });
};
