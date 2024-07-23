import { ViteSSG } from "vite-ssg/single-page";
import "virtual:uno.css";
import "./style.css";
import App from "./App.vue";

export const createApp = ViteSSG(App);
