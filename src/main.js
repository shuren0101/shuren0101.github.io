import Vue from "vue";
import store from "./store/index";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from "./App.vue";

import router from "@/router";

// 引入全局icon
import '@/assets/icon'

import bus from "@/assets/js/Bus";
import VueQuillEditor from 'vue-quill-editor';
// require styles 引入样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.prototype.$bus = bus;
Vue.config.productionTip = false;
Vue.use(Antd)

// 将富文本编辑器 注册为全局可用的组件
Vue.use(VueQuillEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')