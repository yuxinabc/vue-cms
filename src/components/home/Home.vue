<template>
        <div class="my-scroll-view">
            <banner-box :picList="picList" :banner="{width:'100%',height:'auto'}"></banner-box>
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newList">
                        <img src="../../assets/images/menu1.png" alt="">
                        <div class="mui-media-body">新闻资讯</div></router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/pictureSharing">
                        <img src="../../assets/images/menu2.png" alt="">
                        <div class="mui-media-body">图片分享</div>
                       </router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/commodityPurchase">
                        <img src="../../assets/images/menu3.png" alt="">
                        <div class="mui-media-body">商品购买</div>
                    </router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../assets/images/menu4.png" alt="">
                        <div class="mui-media-body">留言板</div>
                    </a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../assets/images/menu5.png" alt="">
                        <div class="mui-media-body">视频专区</div>
                    </a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../assets/images/menu6.png" alt="">
                        <div class="mui-media-body">联系我们</div>
                    </a></li>
                </ul>
        </div>
</template>

<script>
    import Banner from '../subcomponents/Banner.vue'
    export default {
        components:{
           'banner-box' :Banner,
        },
        data() {
            return {
                picList: [],
            }
        },
        methods: {
            getBannerList() {
                this.axios.get('/getlunbo')
                    .then(response=>{
                        this.picList = response.data.message
                    })
                    .catch(error=>{

                    })
            },

        },
        created() {
            this.getBannerList()
        },
    }
</script>

<style lang="less" scoped>
    .my-scroll-view {
        top: 40px;
        bottom: 50px;
        overflow-x: hidden;
        .mui-grid-view {
            background: #fff;
            img {
                width: 60px;
                height: 59.5px;
            }
        }
    }
</style>