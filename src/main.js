import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import './plugins/element.js';
import routes from './config/routes';
import mock from './mock/mock.config.js';

// 加载mock功能,此功能在正式环境不会使用届时会移除
// mock.init();

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$axios = axios;

let router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
