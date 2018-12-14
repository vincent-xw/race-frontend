<template lang="pug">
    el-row()
        el-col(:span='24')
            el-breadcrumb(separator='/')
                el-breadcrumb-item(
                    :to='{path: '/' }'
                ) {{this.leagueName}}
        el-col(:span='24')
            h3 请选择比赛然后进行投注-2018年12月02日
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
                    template
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
        };
    },
  methods: {
    /**
     * 选择赛事，查看详情
     * */
    chooseRace(itemData) {
      this.$router.push({ name: 'raceDetail', params: { id: itemData.race_id, leagueName: this.leagueName }})
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
