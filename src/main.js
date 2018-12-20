import Vue from 'vue';
import Vuex from 'vuex';
import qs from 'qs';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import './plugins/element.js';
import routes from './config/routes';
import states from './config/state';
import axiosConfig from './config/axios';
import mock from './mock/mock.config.js';
// 加载mock功能,此功能在正式环境不会使用届时会移除
mock.init();

Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
let router = new VueRouter({
  routes
});
Vue.prototype.$toast = function(text = '系统异常', options) {
  const option = {
    showClose: true,
    message: text || '系统异常',
    type: 'error',
    ...options
  };
  this.$message(option);
};

Vue.prototype.$handleResponse = function(status, msg,callback) {
  if (status === 0) {
    callback && callback();
  } else {
    this.$toast(msg)
  }
};
let store = new Vuex.Store(states);

let vm = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

axiosConfig(vm);