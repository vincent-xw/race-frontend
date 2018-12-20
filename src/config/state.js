/**
 * @file state初始化
 * @author Vincent
 */
export default {
  state: {
    test: 1,
    userName: '',
    isLoginPage: false,
  },
  mutations: {
    updateTest(state, payload) {
      state.test = payload.test;
    },
    updateUserName(state, payload) {
      state.userName = payload.userName;
    },
    updateIsLogin(state, payload) {
      state.isLoginPage = payload.isLoginPage;
    }
  }
};
