<template lang="pug">
    el-row(
    v-loading="loading"
    )
        el-col(:span='24')
            el-breadcrumb(separator='/')
                el-breadcrumb-item(
                :to='{path: ' / ' }'
                ) {{leagueName}}
                el-breadcrumb-item(
                :to='{path: ' / ' }'
                ) 2018年12月02日比赛编号{{raceId}}
        el-col(:span='24')
            h3 比赛信息
            p 当前比赛编号{{raceId}} 时间2018年12月02日
        el-col(:span='24')
            el-form(
            ref="form"
            )
                el-form-item(
                prop="email"
                v-for="item in formData.raceData",
                :key="item.id",
                )
                    el-card.league-card(
                    :span='24',
                    :md='12',
                    :body-style={padding: '10px'}
                    )
                        el-row()
                            el-col(:span="6")
                                span() 马匹
                            el-col(:span="18")
                                span() {{item.horse_name}}{{item.horse_id}}
                        el-row()
                            el-col(:span="6")
                                span() 头
                            el-col(:span="18")
                                el-input(
                                v-model="item.bet_head"
                                )
                        el-row()
                            el-col(:span="6")
                                span() 脚
                            el-col(:span="18")
                                el-input(
                                v-model="item.bet_foot"
                                )
        el-button(
        @click="doBet"
        type='primary'
        :loading="commitLoading"
        ) 提交
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          raceData: [],
        },
        raceId: '',
        leagueName: '',
        loading: false,
        commitLoading: false,
      };
    },
    created() {
      this.raceId = this.$route.params.id;
      this.leagueName = this.$route.params.leagueName;
      this.$axios.get('/api/front/race/info').then(res => {
        this.$handleResponse(res.data.status, res.data.msg, () => {
          const raceInfo = res.data.data.race_info;
          this.formData.raceData = raceInfo.horse_info;
          this.raceId = raceInfo.league_id;
        });
        this.loading = false;
      }).catch(err => {
        console.log(err);
        this.loading = false;
      });
    },
    methods: {
      /**
       * 提交投注
       * */
      doBet() {
        this.commitLoading = true;
        const horseInfoArr = this.formData.raceData.filter(item => item.bet_head || item.bet_foot);
        const bet_info = horseInfoArr.map(item => ({
          horse_id: item.horse_id,
          bet_head: item.bet_head,
          bet_foot: item.bet_foot,
        }));
        const params = {
          bet_info,
          race_id: this.raceId,
        };
        this.$axios.post('/api/front/race/bet', params).then(res => {
          this.$handleResponse(res.data.status, res.data.msg, () => {
            //todo 需要传递一个id
            this.$router.push({name: 'betDetail', params: { id: '1' }});
          });
          this.commitLoading = false;
        }).catch(err => {
          console.log(err);
          this.commitLoading = false;
        });
      },
    }
  };
</script>

<style lang="less">
    .el-row {
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .change-league {
        color: #368EFF;
    }
</style>