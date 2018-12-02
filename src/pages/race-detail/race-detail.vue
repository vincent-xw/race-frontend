<template lang="pug">
    el-row()
        el-col(:span='24')
            el-breadcrumb(separator='/')
                el-breadcrumb-item(
                    :to='{path: '/' }'
                ) 马来西亚
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
                    prop='',
                    label='#'
                )
                el-table-column(
                    prop='id',
                    label='场次'
                )
                el-table-column(
                    prop='horseId',
                    label='马匹'
                )
                el-table-column(
                    prop='horceHead',
                    label='头'
                )
                el-table-column(
                    prop='horceFoot',
                    label='脚'
                )
                el-table-column(
                    prop='headBetLimit',
                    label='头限额'
                )
                el-table-column(
                    prop='footBetLimit',
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
            raceId: ''
        };
    },
    created() {
        this.raceId = this.$route.params.id;
    }
};
</script>
