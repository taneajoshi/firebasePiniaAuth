import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
const pinia = createPinia();
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
