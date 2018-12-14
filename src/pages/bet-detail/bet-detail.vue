<template lang="pug">
    el-row(class='bet-detail')
        el-col(:span='24')
            el-breadcrumb(separator='/')
                el-breadcrumb-item(
                :to='{path: ' / ' }'
                ) 马来西亚
                el-breadcrumb-item(
                :to='{path: ' / ' }'
                ) 2018年12月02日比赛编号{{raceId}}
                el-breadcrumb-item(
                :to='{path: ' / ' }'
                ) 投注详情
        el-col(:span='24')
            h3 比赛信息
                el-button(type='text', size='mini') 打印详单
            p 当前比赛编号{{raceId}} 时间2018年12月02日 {{getRaceStatus}}
            .bet-list
                el-card(v-for="item in raceData.betData" :key="item.id")
                    span 马匹: {{item.horseName || 'horse001'}} 
                    span 投注: {{item.betNumber || 100}}
                    span 成绩: {{item.raceScore || 1}}
                    span 盈利: {{item.winNumber || 100}}

</template>
<script>
  export default {
    data() {
      return {
        raceData: {
          betData: [{}]
        },
        raceId: '',
        raceStatus: 0
      };
    },
    created() {
      this.raceId = this.$route.params.id;
    },
    computed: {
      getRaceStatus() {
        let status = {
          0: '未开始',
          1: '已结束'
        };
        return status[this.raceStatus] || '状态未知';
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
</style>
