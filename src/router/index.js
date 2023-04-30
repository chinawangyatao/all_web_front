import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/front",
      name: "front",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/front/front.vue"),
      meta: {
        title: "前端",
      },
    },
    {
      path: "/back",
      name: "back",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/back/back.vue"),
      meta: {
        title: "后端",
      },
    },
    {
      path: "/components",
      name: "components",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/components/components.vue"),
      meta: {
        title: "组件库",
      },
    },
    {
      path: "/project",
      name: "project",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/project/project.vue"),
      meta: {
        title: "项目经验",
      },
    },
    {
      path: "/interest",
      name: "interest",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/interest/interest.vue"),
      meta: {
        title: "兴趣",
      },
    },
    {
      path: "/articleDetails",
      name: "articleDetails",
      component: () => import("@/views/detailsPage/articleDetails.vue"),
    },
    {
      path: "/codeDetails",
      name: "codeDetails",
      component: () => import("@/views/detailsPage/codeDetails.vue"),
    },
    {
      path: "/fantasticIdeasDetailsPage",
      name: "fantasticIdeasDetailsPage",
      component: () =>
        import("@/views/detailsPage/fantasticIdeasDetailsPage.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/resume/resume.vue"),
      meta: {
        title: "简历",
      },
    },
  ],
});

export default router;
