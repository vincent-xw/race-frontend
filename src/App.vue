<template lang='pug'>
    el-container#app
        el-header.header-nav
            el-row
                el-col(:span='16')
                    p(@click='gotohome') 欢迎使用在线投注系统
                el-col(
                :span='8',
                align='right'
                )
                    p(
                    @click="goPersonal"
                    ) {{getText}}
        el-main.content
            router-view
        el-footer.footer-nav
            el-row
                el-col(:span='24')
                    p 版权所有
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'app',
    data() {
      return {
        userNameLocal: '',
      }
    },
    computed: {
      ...mapState([
        'isLoginPage',
        'userName',
      ]),
      getText() {
        return this.isLoginPage ? '' : `欢迎:${this.userName || this.userNameLocal || ''}`;
      }
    },
    mounted() {
      this.userNameLocal = localStorage.getItem('userName')
    },
    methods: {
      goPersonal() {
        this.$router.push({ name: 'personal' })
      },
      gotohome() {
          this.$router.push({
              name: 'league'
          });
      }
    }
  };
</script>

<style lang='less'>
    html {
        body {
            margin: 0;
            .header-nav {
                background: #ffffff;
                box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
            }
            .content {
                margin-bottom: 60px;
            }
            .footer-nav {
                text-align: center;
                background: #ffffff;
                box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
            }
        }
    }
</style>
