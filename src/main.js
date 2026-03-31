import { createApp } from "vue";
import "./styles/main.css";
import App from "./App.vue";
import { i18n } from "./data/i18n";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.use(i18n);
app.mount("#app");
