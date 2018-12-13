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
                div(@click='jumpRace')
                    h2.league-card-title 联赛赛区:{{item.name}}
                    p.league-card-remark {{item.remark}}

</template>
<script>
export default {
    data() {
        return {
            leagues: [
                {
                    id: 0,
                    name: '马来西亚',
                    remark: '超高赔率，超多机会'
                },
                {
                    id: 1,
                    name: '马来西亚',
                    remark: '超高赔率，超多机会'
                },
                {
                    id: 2,
                    name: '马来西亚',
                    remark: '超高赔率，超多机会'
                },
                {
                    id: 3,
                    name: '马来西亚',
                    remark: '超高赔率，超多机会'
                }
            ]
        };
    },
  methods: {

    jumpRace() {
      console.log('jumpRace');
      this.$router.push('race')
    }

  },
  created() {
      this.$axios.get('/api/front/league/list').then(res => {
        console.log(res);
        console.log(res.data.data);
        this.leagues = res.data.data;
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
