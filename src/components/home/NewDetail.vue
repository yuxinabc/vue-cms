<template>
    <div>
        <title-time-click :info="newInfo"></title-time-click>
        <div class="content" v-html="newInfo.content">
        </div>
        <comment-box :id="$route.params.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/Comment.vue'
    import TitleForTimeClick from '../subcomponents/TitleForTimeClick.vue'
    export default {
        components:{
            'comment-box':comment,
            'title-time-click':TitleForTimeClick,
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

</style>