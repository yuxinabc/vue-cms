<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/home/newList/newDetail/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time|timeFormat}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        methods: {
            getNewList(success, fail) {
                this.axios.get('/getnewslist')
                    .then(success)
                    .catch(fail)
            },
        },
        created() {
            this.getNewList(response => {
                this.list = response.data.message
            }, error => {

            })
        },
    }
</script>

<style lang="less" scoped>
    .mui-table-view {
        .mui-media-body {
            font-size: 14px;
            .mui-ellipsis {
                font-size: 12px;
                color: #0069d9;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>