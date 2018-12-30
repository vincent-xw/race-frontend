<template lang="pug">
    el-row(class='login-form')
        el-col(
        :span='24',
        :md="8"
        )
            span &nbsp;
        el-col(
        class='login-form-content'
          :span='24',
        :md="8"
        )
            h3.login-form-title 欢迎使用在线投注系统
            el-form(
            ref='form',
            :model='form',
            :rules='rules'
            class="demo-ruleForm"
            )
                el-form-item(prop="username")
                    el-input(
                    v-model='form.username',
                    placeholder='请输入用户名'
                    )
                el-form-item(prop="password")
                    el-input(
                    v-model='form.password',
                    placeholder='请输入密码',
                    type='password'
                    )
                el-form-item(align='center')
                    el-button(
                    type='primary',
                    @click='login("form")',
                    :loading="loading"
                    ) 登录
        el-col(
        :span='24',
        :md="8"
        )
            span &nbsp;
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        loading: false,
        rules: {
          username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        }
      };
    },
    computed: {
      ...mapState([
        'isLogin'
      ])
    },
    created() {
        let {needLogin} = this.$route.query;
        if (+needLogin === 1) {
            this.$message.error('登录状态已过期，您需要重新登录继续操作');
        }
    },
    mounted() {
      this.$store.commit('updateIsLogin', {
        isLoginPage: true,
      });
      if (this.$route.params.needLogin) {
        this.$toast('请重新登录');
      }
    },
    destroyed() {
      this.$store.commit('updateIsLogin', {
        isLoginPage: false,
      });
    },
    methods: {
      login(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
            const form = this.form;
            let data = {
              username: form.username,
              password: form.password,
              loading: false,
            };
            this.loading = true;
            this.$axios.post('/api/front/login', data).then(res => {
              this.$handleResponse(res.data.status, res.data.msg, () => {
                localStorage.setItem('userName', form.username);
                localStorage.setItem('user', JSON.stringify(res.data.data));
                this.$store.commit('updateUserName', {
                  userName: form.username,
                });
                this.$router.push('league');
              });
              this.loading = false;
            }).catch(err => {
              console.log(err);
              this.loading = false;
            });
          } else {
            return false;
          }
        });
      }
    },
  };
</script>
<style lang="less">
    .login-form {
        margin: 0 auto;
        margin-top: 100px;
        padding: 50px 10px;
        box-sizing: 0;
        background: #ffffff;
        .login-form-content {
            margin: 0 auto;
        }
        .login-form-title {
            text-align: center;
        }
    }
</style>
