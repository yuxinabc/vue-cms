<template>
    <div class="new-detail">
       <h3 class="title">{{newInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newInfo.add_time|timeFormat}}</span>
            <span>点击:{{newInfo.click}}次</span>
        </p>
        <hr />
        <div class="content" v-html="newInfo.content">
        </div>
        <comment-box :id="$route.params.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/Comment.vue'
    export default {
        components:{
            'comment-box':comment,
        },
        data() {
            return {
                newInfo:{}
            }
        },
        methods: {
            getNewDetail(id,success, fail) {
                this.axios.get(`/getnew/${id}`)
                    .then(success)
                    .catch(fail)
            }
        },
        created() {
            this.getNewDetail(this.$route.params.id,response=>{
                if(response.data.message.length>0){
                    this.newInfo=response.data.message[0]
                }
            },error=>{

            });
        },
    }
</script>

<style lang="less" scoped>
.new-detail{
    padding: 4px;
    .title{
        margin: 15px 0;
        font-size: 15px;
        color: red;
        text-align: center;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        span{
           color: #0069d9;
            font-size: 13px;
        }
    }
    .content{

    }

}
</style>