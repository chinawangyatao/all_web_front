import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import Heroicons from "@heroicons";

import "./assets/main.css";
import "swiper/css"; //swipecss
import "animate.css";
import "animate.css/animate.compat.css";
import vueMasonry from "vue-masonry/index";
import { VueMasonryPlugin } from "vue-masonry";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vueMasonry);

app.mount("#app");
