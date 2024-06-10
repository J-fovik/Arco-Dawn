import { createApp } from 'vue';
import { createPinia } from 'pinia';
import arcoVue from '@arco-design/web-vue';
import arcoVueIcon from '@arco-design/web-vue/es/icon';
import router from '@/router';
import App from '@/App.vue';
import '@/assets/style/iconfont.less';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/style/global.less';
import 'nprogress/nprogress.css';
// 创建实例
const app = createApp(App);
// 初始化pinia
const pinia = createPinia();
// 挂载
app.use(pinia);
app.use(router);
app.use(arcoVue, {});
app.use(arcoVueIcon);
// 挂载实例
app.mount('#app');
