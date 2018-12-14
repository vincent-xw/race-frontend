<template lang="pug">
    el-col(
    :span="24"
      :md="8"
    )
        el-date-picker(
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        )
</template>
<script>
  export default {
    data() {
      return {
        raceData: [],
        leagueName: '',
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
          item['race_name'] = `${name}${item.race_id}`;
          return item;
        });
      }
    },
    created() {
      const name = this.$route.params.leagueName;
      this.leagueName = name;
      this.$axios.get('/api/front/race/list').then(res => {
        this.raceData = this.initRaceData(name, res.data.data.race_list)
      });
      console.log(this.leagueName);
    }
  };
</script>
