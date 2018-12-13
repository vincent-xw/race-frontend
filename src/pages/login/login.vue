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
                :model='form'
            )
                el-form-item()
                    el-input(
                        v-model='form.username',
                        placeholder='请输入用户名' 
                    )
                el-form-item()
                    el-input(
                        v-model='form.password',
                        placeholder='请输入密码',
                        type='password'
                    )
                el-form-item(align='center')
                    el-button(
                        type='primary',
                        @click='login'
                    ) 登录
        el-col(
            :span='24',
            :md="8"
        )
            span &nbsp;
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            form: {}
        };
    },
    computed: {
        ...mapState([
            'test'
        ])
    },
    created() {
    },
    mounted() {
        console.log(this.test);
        this.$store.commit('updateTest', {
            test: 2
        });
        console.log(this.test); 
    },
    methods: {
        login() {
            let data = {
                username: this.form.username,
                password: this.form.password
            };
            this.$axios.post('/api/front/login', data).then(res => {
                console.log(res);
                
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
