<template lang="pug">
    el-row(
    v-loading="loading"
    )
        el-col(:span='24')
            el-breadcrumb(separator='/')
                el-breadcrumb-item(
                :to='{path: ' / ' }'
                ) {{this.leagueName}}
                    span.change-league(
                    @click="changeLeague"
                    )  点击更换
        el-col(:span='24')
            h3 请选择比赛然后进行投注-{{now}}
            el-table(
            :data='raceData'
              @row-click='chooseRace'
            )
                el-table-column(
                prop='race_id',
                label='#'
                )
                el-table-column(
                prop='race_name',
                label='比赛名称'
                )
                el-table-column(
                prop='race_time',
                label='比赛时间'
                )
</template>
<script>
  export default {
    data() {
      return {
        raceData: [],
        leagueName: '',
        leagueId: '',
        now: new Date().toLocaleDateString(),
        loading: false,
      };
    },
    methods: {
      /**
       * 选择赛事，查看详情
       * */
      chooseRace(itemData) {
        this.$router.push({name: 'raceDetail', params: {id: itemData.race_id, leagueName: this.leagueName}})
      },
      /**
       * 获取赛事名称
       * */
      initRaceData(name, dataArr = []) {

        return dataArr.map(item => {
          item.race_name = `${name}${item.race_id}`;
          item.race_time = new Date(item.race_time).toLocaleString();
          return item;
        });
      },
      /**
       * 更换赛区
       * */
      changeLeague() {
        this.$router.go(-1);
      }
    },
    created() {
      if (typeof (this.$route.params.leagueId) === undefined) {
        this.$router.replace({name: 'league'});
        return;
      }
      this.loading = true;
      const name = this.$route.params.leagueName;
      const id = this.$route.params.leagueId;
      this.leagueName = name;
      this.leagueId = id;
      this.$axios.get('/api/front/race/list' + '?' + this.$qs.stringify({
          league_id: this.leagueId
        })).then(res => {
        this.$handleResponse(res.data.status, res.data.msg, () => {
          this.raceData = this.initRaceData(name, res.data.data.race_list)
        });
        this.loading = false
      }).catch(err => {
        console.log(err);
        this.loading = false;
      });
      console.log(this.leagueName);
    }
  };
</script>

<style lang="less">
    .change-league {
        color: #368EFF;
    }
</style>