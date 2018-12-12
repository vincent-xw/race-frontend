<template lang="pug">
    el-row()
        el-col(:span='24')
            el-breadcrumb(separator='/')
                el-breadcrumb-item(
                    :to='{path: '/' }'
                ) 马来西亚
        el-col(:span='24')
            h3 请选择比赛然后进行投注-2018年12月02日
            el-table(
                :data='raceData'
                @row-click='chooseRate'
            )
                el-table-column(
                    prop='id',
                    label='#'
                )
                el-table-column(
                    prop='raceName',
                    label='比赛名称'
                )
                el-table-column(
                    prop='raceTime',
                    label='比赛时间'
                )
</template>
<script>
export default {
    data() {
        return {
            raceData: []
        };
    },
  methods: {
    chooseRate(itemData) {
      this.$router.push({ name: 'raceDetail', params: { id: itemData.id }})
    }
  },
  created() {
      this.$axios.get('/api/front/race/info').then(res => {
        console.log(res);
        this.raceData = res.data.data;
      })
  }
};
</script>
