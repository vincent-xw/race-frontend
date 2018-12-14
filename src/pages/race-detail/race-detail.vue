<template lang="pug">
    el-row()
        el-col(:span='24')
            el-breadcrumb(separator='/')
                el-breadcrumb-item(
                    :to='{path: '/' }'
                ) {{leagueName}}
                el-breadcrumb-item(
                    :to='{path: '/' }'
                ) 2018年12月02日比赛编号{{raceId}}
        el-col(:span='24')
            h3 比赛信息
            p 当前比赛编号{{raceId}} 时间2018年12月02日
            el-table(
                :data='raceData',
                width='100%'
            )
                el-table-column(
                    prop='horse_id',
                    label='#'
                )
                el-table-column(
                    prop='horse_name',
                    label='马匹'
                )
                el-table-column(
                    prop='head_limit',
                    label='头'
                )
                el-table-column(
                    prop='foot_limit',
                    label='脚'
                )
                el-table-column(
                    prop='head_limit',
                    label='头限额'
                )
                el-table-column(
                    prop='foot_limit',
                    label='脚限额'
                )
            el-button(
                type='primary'
            ) 提交
</template>
<script>
export default {
    data() {
        return {
            raceData: [],
            raceId: '',
          leagueName: '',
        };
    },
    created() {
      this.raceId = this.$route.params.id;
      this.leagueName = this.$route.params.leagueName;
      this.$axios.get('/api/front/race/info').then(res => {
        const raceInfo = res.data.data.race_info;
        this.raceData = raceInfo.horse_info;
        this.raceId = raceInfo.league_id;
      });
    },
    methods: {
      /**
       * 提交投注
       * */
      doBet() {
        //todo 目前的想法是通过操作数据来判定是否参与下注 将 bet_head bet_foot haveBet 加入对象
        const horseInfoArr = this.raceData.filter(item => item.haveBet);
        const bet_info = horseInfoArr.map(item => ({
          horse_id: item.horse_id,
          bet_head: item.bet_head,
          bet_foot: item.bet_foot,
        }));
        const params = {
          bet_info,
          race_id: this.raceId,
        };
        this.$axios.post('/api/front/race/info').then(res => {
          const raceInfo = res.data.data.race_info;
          this.raceData = raceInfo.horse_info;
          this.raceId = raceInfo.league_id;
        });
      },
    }
};
</script>
