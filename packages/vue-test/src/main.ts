import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { ComponentLibrary } from "vue-wrapper";

createApp(App).use(ComponentLibrary).mount("#app");
