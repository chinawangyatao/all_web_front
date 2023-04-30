import axios from "axios";

const service = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 响应拦截器
// 服务端返回数据之后，前端then调用之前

service.interceptors.response.use((res) => {
  // 解构出返回的数据中data里面的数据
  const { status, statusText } = res;
  // 拿status进行判断
  if (status === 200) {
    return res.data.data;
  } else {
    return Promise.reject(new Error("请求出错，请稍后再试"));
  }
});

export default service;
