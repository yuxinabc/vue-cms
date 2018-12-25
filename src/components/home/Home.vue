<template>
    <div>
        <div class="mui-scroll-wrapper my-scroll-view">
            <div class="mui-scroll">
                <div id="slider" class="mui-slider">
                    <div class="mui-slider-group mui-slider-loop">
                        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
                        <div class="mui-slider-item mui-slider-item-duplicate" v-for="item in lastImg">
                            <a href="#">
                                <img :src="item.img">
                            </a>
                        </div>
                        <!--遍历-->
                        <div class="mui-slider-item" v-for="item in picList">
                            <a href="#">
                                <img :src="item.img">
                            </a>
                        </div>

                        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                        <div class="mui-slider-item mui-slider-item-duplicate" v-for="item in firstImg">
                            <a href="#">
                                <img :src="item.img">
                            </a>
                        </div>
                    </div>
                    <div class="mui-slider-indicator">
                        <div class="mui-indicator" :class="{ 'mui-active': index==0 }"
                             v-for="(item, index) in picList"></div>
                    </div>
                </div>
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newList">
                        <img src="../../assets/images/menu1.png" alt="">
                        <div class="mui-media-body">新闻资讯</div></router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../assets/images/menu2.png" alt="">
                        <div class="mui-media-body">图片分享</div>
                    </a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../assets/images/menu3.png" alt="">
                        <div class="mui-media-body">商品购买</div>
                    </a></li>
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
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                picList: [],
            }
        },
        computed: {
            firstImg() {
                if (this.picList != null && this.picList.length > 0) {
                    return [this.picList[0]]
                }
            },
            lastImg() {
                if (this.picList != null && this.picList.length > 0) {
                    return [this.picList[this.picList.length - 1]]
                }
            }
        },
        methods: {
            //设置自动轮播
            autoPlay() {
                let gallery = this.mui('.mui-slider')
                gallery.slider({
                    interval: 2000//自动轮播周期，若为0则不自动播放，默认为0；
                })
            },
            initScroll() {
                this.mui('.mui-scroll-wrapper').scroll({
                    scrollY: true, //是否竖向滚动
                    scrollX: false, //是否横向滚动
                    startX: 0, //初始化时滚动至x
                    startY: 0, //初始化时滚动至y
                    indicators: false, //是否显示滚动条
                    bounce: true, //是否启用回弹
                    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                })
            },
            getBannerList(success, fail) {
                this.axios.get('/getlunbo')
                    .then(success)
                    .catch(fail)
            },

        },
        mounted() {
            this.initScroll()
        },
        created() {
            this.getBannerList(response => {
                this.picList = response.data.message
            }, error => {
                console.log(error)
            })
        },
        //mui框架会默认初始化当前页面的图片轮播组件；
        // 若轮播组件内容为js动态生成时（比如通过ajax动态获取的营销信息），
        // 则需要在动态生成完整DOM (包含mui-slider下所有DOM结构) 后
        updated() {
            this.autoPlay()
        }
    }
</script>

<style lang="less" scoped>
    .my-scroll-view {
        top: 40px;
        bottom: 50px;
        overflow-x: hidden;
        .mui-grid-view {
            img {
                width: 60px;
                height: 59.5px;
            }
        }
    }
</style>