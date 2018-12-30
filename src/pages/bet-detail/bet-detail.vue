<template lang="pug">
    el-row(class='bet-detail' v-loading="loading")
        el-col(:span='24')
            el-breadcrumb(separator='/')
                el-breadcrumb-item(
                :to='{path: ' / ' }'
                ) {{leagueName}}
                el-breadcrumb-item(
                :to='{path: ' / ' }'
                ) {{raceTime}}比赛编号{{raceId}}
                el-breadcrumb-item(
                :to='{path: ' / ' }'
                ) 投注详情
        el-col(:span='24')
            h3 比赛信息
                el-button(type='text', size='mini' @click="print") 打印详单
            p 当前比赛编号{{raceId}} 时间{{raceTime}} {{getRaceStatus}}
            .bet-list
                el-card(v-for="item in raceData.betData" :body-style={padding: '10px'} :key="item.id" )
                    span 马匹: {{item.horse_name}}
                    span 头: {{item.bet_head || 0}}
                    span 脚: {{item.bet_foot || 0}}
                    span 成绩: {{item.horse_score || '暂无'}}
                    span 盈利: {{item.win_count / 10 || '暂无'}}

</template>
<script>
  export default {
    data() {
      return {
        raceData: {
          betData: [{}]
        },
        raceTime: '',
        leagueName: '',
        raceId: '',
        raceStatus: 0,
//        playerWin: 0,
        loading: false,
      };
    },
    created() {
      if (typeof (this.$route.params.id) === undefined) {
        this.$router.go(-1); // 由于这个页面有2个入口  因此 回退历史。
      }
      this.loading = true;
      this.raceId = this.$route.params.id;
      const params = { bet_id: this.raceId };
//      const params = { bet_id: 1545329623483 };
      this.$axios.post('/api/front/race/bet/detail', params).then(res => {
        this.$handleResponse(res.data.status, res.data.msg, () => {
          const { bet_detail = {}} = res.data.data;
          if (bet_detail instanceof Array) {
            this.raceData.betData = bet_detail.map(item => {
              item.horse_score = +item.horse_score / 10;
              return item;
            });
            this.leagueName = bet_detail[0].league_name;
            this.raceTime = new Date(+bet_detail[0].race_info.race_time).toLocaleDateString();
            this.raceStatus = +bet_detail[0].race_info.race_status;
          } else {
            this.raceData.betData = [bet_detail];
            this.leagueName = bet_detail.league_name;
            this.raceTime = new Date(+bet_detail.race_info.race_time).toLocaleDateString();
            this.raceStatus = +bet_detail.race_info.race_status;
          }
//          this.playerWin = +bet_detail.player_win / 10;
        });
        this.loading = false;
      }).catch(err => {
        console.log(err);
        this.loading = false;
      })
    },
    computed: {
      getRaceStatus() {
        let status = {
          1: '已发布',
          2: '已结束',
          3: '已结束',
          4: '已结束'
        };
        return status[this.raceStatus] || '状态未知';
      }
    },
    methods: {
      /**
       * 点击打印详情
       * */
      print() {
        window.print();
      }
    }
  };
</script>
<style lang="less">
    .bet-detail {
        h3 {
            .el-button {
                float: right;
            }
        }
    }
    .el-card {
        /*margin-bottom: 10px;*/
        /*&:last-child {*/
            /*margin-bottom: 0;*/
        /*}*/
    }
</style>
