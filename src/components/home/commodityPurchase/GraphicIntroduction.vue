<template>
    <div class="graphic-introduction-container">
        <h3 class="title">{{info.title}}</h3>
        <hr/>
        <div class="content" v-html="info.content">

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
              info:{}
            }
        },
        methods:{
            doGetDes(){
                this.axios.get(`/goods/getdesc/${this.$route.params.id}`).then(response=>{
                    this.info=response.data.message[0]
                })
            }
        },
        created(){
           this.doGetDes()
        },
    }
</script>

<style lang="less" >
.graphic-introduction-container{
    .title{
        font-size: 14px;
        margin: 10px 5px;
    }
    .content{
        padding: 5px;
       p{
           img{
                width: 100%;
            }
        }
    }
}
</style>