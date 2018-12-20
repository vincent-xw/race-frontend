<template lang="pug">
    el-row(
    :span="24"
      :md="8"
    align="bottom"
    )
        el-col(
        :span="24"
        :md="8"
        alig
        )
            el-col(
            :span="6"
            )
                h3 我的投注
            el-col(
            :span="6"
            )
                span.change-password(
                @click="changePwd"
                ) 修改密码
        el-col(
        :span="24"
        :md="8"
        )
            el-col(
            :span="6"
            )
                span(
                ) 投注时间
            el-col(
            :span="18"
            )
                el-date-picker(
                v-model="betStartTime"
                type="date"
                placeholder="选择投注开始日期"
                )
        el-col(
        :span="24"
          :md="8"
        )
            el-col(
            :span="6"
            )
            el-col(
            :span="18"
            :offset=6
            )
                el-date-picker(
                v-model="betEndTime"
                type="date"
                placeholder="选择投注结束日期"
                )
        el-col(
        :span="24"
        :md="8"
        )
            el-col(
            :span="6"
            )
                span(
                ) 比赛时间
            el-col(
            :span="18"
            )
                el-date-picker(
                v-model="raceStartTime"
                type="date"
                placeholder="选择比赛开始日期"
                )
        el-col(
        :span="24"
          :md="8"
        )
            el-col(
            :span="6"
            )
            el-col(
            :span="18"
            :offset=6
            )
                el-date-picker(
                v-model="raceEndTime"
                type="date"
                placeholder="选择比赛结束日期"
                )
        el-col(
        :span="24"
        :md="8"
        )
            el-button(
            type='primary'
            @click="search"
            :loading="searchLoading"
            ) 查询
        el-col.table(
        :span="24"
        )
            el-table(
            :data="tableData"
            style="width: 100%"
            @row-click="rwoClick"
            )
                el-table-column(
                prop="bet_id"
                label="#"
                )
                el-table-column(
                prop="race_name"
                label="赛事"
                )
                el-table-column(
                prop="bet_time"
                label="投注时间"
                )
                el-table-column(
                prop="lottery_time"
                label="开奖时间"
                )
        el-button(
        @click="logout"
        ) 退出登录
</template>
<script>
  // todo 响应式 布局 目前并没有适配
  export default {
    data() {
      return {
        tableData: [],
        betStartTime: '',
        betEndTime: '',
        raceStartTime: '',
        raceEndTime: '',
        searchLoading: false,
      };
    },
    methods: {
      logout() {
        this.$axios.get('/api/front/logout').then(res => {
          this.$handleResponse(res.data.status, res.data.msg, () => {
            this.$router.replace({name: 'login'})
          });
          console.log(res);
        })
      },
      rwoClick(row) {
        console.log(row);
        this.$router.push({name: 'betDetail', params: {id: row.bet_id, leagueName: ''}})
      },
      /**
       * 检查时间
       * @param start 开始时间 Date对象
       * @param end 开始时间 Date对象
       * @return bool 返回是否合规
       * */
      checkTime(start, end) {
        if (start && end && start.getTime && end.getTime) {
          if (end.getTime() > start.getTime()) {
            return true;
          }
        }
        return false;
      },
      /**
       * 搜索记录
       * */
      search() {
        let params = {};
        if (this.checkTime(this.betStartTime, this.betEndTime)) { // 如果合法 添加参数
          params = {
            ...params,
            bet_start_time: this.betStartTime.getTime(),
            bet_end_time: this.betEndTime.getTime(),
          }
        }
        if (this.checkTime(this.raceStartTime, this.raceEndTime)) { // 如果合法 添加参数
          params = {
            ...params,
            race_start_time: this.raceStartTime.getTime(),
            race_end_time: this.raceEndTime.getTime(),
          }
        }
        if (Object.keys(params).length <= 0) { //如果 params 键为0 代表 选择时间都不合法， 则返回
          console.log('填写填写有误');
          return;
        }
        this.searchLoading = true;
        this.$axios.post('/api/front/race/bet/history', params).then(res => {
          this.$handleResponse(res.data.status, res.data.msg, () => {
            this.tableData = res.data.data.bet_list.map(item => {
              item.bet_time = new Date(+item.bet_time).toLocaleDateString();
              item.lottery_time = new Date(+item.lottery_time).toLocaleDateString();
              return item;
            });
          });
          this.searchLoading = false;
        }).catch(err => {
          console.log(err);
          this.searchLoading = false;
        })
      },
      /**
       * 修改密码
       * */
      changePwd() {
        this.$router.push({name: 'resetPassword'});
      }
    },
    created() {

    }
  };
</script>

<style lang="less">
    .change-password {
        color: #368EFF;
    };
    .table {
      margin-top: 40px;
    };
</style>
