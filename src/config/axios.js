/**
 * @file axios 统一配置文件
 */
import axios from 'axios';
export default (vm) => {
  let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
  let cancelToken = axios.CancelToken;
  let removePending = (config) => {
      for (let p in pending) {
          if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
              pending[p].f(); //执行取消操作
              pending.splice(p, 1); //把这条记录从数组中移除
          }
      }
  }
  axios.interceptors.request.use(function (config) {
    if(config.method == "post"){
        var str = [];

        for (var p in config.data) {

            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(config.data[p]));

        } 
        config.data = str.join("&");
    }
    removePending(config); 
    //在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken(c => {
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({
          u: config.url + '&' + config.method,
          f: c
        });
    });

    return config;
  }, function (error) {
      // Do something with request error
      return Promise.reject(error);
  });
  axios.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.status === 401) {
      vm.router.replace({
        name: login,
        params: {
          needLogin: 1
        }
      });
    }
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
}
