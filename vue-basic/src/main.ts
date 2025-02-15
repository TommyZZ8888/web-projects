import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from './router';
import * as Icons from "@ant-design/icons-vue";
import Antd from "ant-design-vue";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(Antd);
app.use(Icons);
app.mount("#app");
