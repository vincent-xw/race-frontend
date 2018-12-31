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
                            el-col(:span="2")
                                span() 马匹
                            el-col(:span="6")
                                span() {{item.horse_name}}
                            el-col(:span="2")
                                span() 头
                            el-col(:span="6")
                                el-input(
                                v-model="item.bet_head",
                                :placeholder="item.head_limit",
                                type="number"
                                )
                            el-col(:span="2")
                                span() 脚
                            el-col(:span="6")
                                el-input(
                                v-model="item.bet_foot",
                                :placeholder="item.foot_limit",
                                type="number"
                                )
        el-button(
        @click="doBet"
        type='primary'
        v-show='showButton'
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
        showButton: false,
      };
    },
    created() {
      if (typeof (this.$route.params.id) === undefined) {
        this.$router.replace({name: 'race'})
      }
      this.raceId = this.$route.params.id;
      this.leagueName = this.$route.params.leagueName;
      this.getRaceDetail();
    },
    methods: {
      getRaceDetail() {
        this.loading = true;
        this.showButton = false;
        this.$axios.get('/api/front/race/info' + '?' + this.$qs.stringify({
            race_id: this.raceId,
          })).then(res => {
          console.log('res: ', res);
          this.$handleResponse(res.data.status, res.data.msg, () => {
            const raceInfo = res.data.data.race_info;
            this.formData.raceData = raceInfo.horseInfo.map(item => {
              item.foot_limit = `限额${item.foot_limit}`;
              item.head_limit = `限额${item.head_limit}`;
              return item;
            });
//            this.raceId = raceInfo.league_id;
            this.showButton = true
          });
          this.loading = false;
        }).catch(err => {
          console.log(err);
          this.loading = false;
        });
      },
      /**
       * 提交投注
       * */
      doBet() {
        const horseInfoArr = this.formData.raceData.filter(item => item.bet_head && item.bet_head < item.head_limit
            || item.bet_foot && item.bet_foot < item.foot_limit);
        const bet_info = horseInfoArr.map(item => ({
          horse_id: item.horse_id,
          bet_head: item.bet_head,
          bet_foot: item.bet_foot,
        }));
        if (bet_info && bet_info.length === 0 || this.raceId === '' && !this.raceId) {
            return;
        }
        this.commitLoading = true;
        let agent_id = undefined;
        try {
          agent_id = JSON.parse(localStorage.getItem('user')).id;
        } catch (err) {
          console.log(err);
        }
        const params = {
          bet_info,
          race_id: this.raceId,
          agent_id
        };
        this.$axios.post('/api/front/race/bet', params).then(res => {
          this.$handleResponse(res.data.status, res.data.msg, () => {
            this.$router.push({name: 'betDetail', params: { id: res.data.data.bet_id }});
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