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
            h3.login-form-title 修改密码
            el-form(
            ref='form',
            v-model='form'
            )
                el-form-item()
                    el-input(
                    v-model='form.oldPwd',
                    placeholder='请输入原密码'
                    type='password'
                    )
                el-form-item()
                    el-input(
                    v-model='form.newPwd',
                    placeholder='请输入新密码',
                    type='password'
                    )
                el-form-item(align='center')
                    el-button(
                    type='primary',
                    @click='changePwd'
                    :loading="updateLoading"
                    ) 修改
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
        form: {},
        updateLoading: false,
      };
    },
    methods: {
      changePwd() {
        let data = {
          oldPassword: this.form.oldPwd,
          newPassword: this.form.newPwd
        };
        this.updateLoading = true;
        this.$axios.post('/api/front/resetpwd', data).then(res => {
          this.$handleResponse(res.data.status, res.data.msg, () => {
            this.tableData = res.data.data.bet_list.map(item => {
              this.$router.go(-1);
            });
          });
          this.updateLoading = false;
        }).catch(err => {
          console.log(err);
          this.updateLoading = false;
        });
      }
    }
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
