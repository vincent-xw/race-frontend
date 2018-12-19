<template lang="pug">
    el-row()
        el-col(
        :span='24',
        :md='8'
        )
            el-card.league-card(
            :span='24',
            :md='12',
            v-for="item in leagues",
            :key="item.id",

            )
                div(@click='jumpRace(item.league_name, item.league_id)')
                    h2.league-card-title 联赛赛区:{{item.league_name}}
                    p.league-card-remark {{item.league_remark}}

</template>
<script>
  export default {
    data() {
      return {
        leagues: []
      };
    },
    methods: {
      /**
       * 跳转赛事
       * */
      jumpRace(leagueName, leagueId) {
        this.$router.push({name: 'race', params: {leagueName: leagueName, leagueId: leagueId}})
      }

    },
    created() {
      this.$axios.get('/api/front/league/list').then(res => {
        console.log(res);
        console.log(res.data.data);
        this.leagues = res.data.data.league_list;
      });
    }
  };
</script>
<style lang="less">
    .league-card {
        margin-bottom: 10px;
        text-align: center;
    }
</style>
