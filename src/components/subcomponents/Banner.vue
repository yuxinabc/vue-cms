<template>
    <div id="slider" class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
            <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate" v-for="item in lastImg">
                <a href="#">
                    <img :src="item.img" :style="{width:banner.width,height:banner.height}">
                </a>
            </div>
            <!--遍历-->
            <div class="mui-slider-item" v-for="item in picList">
                <a href="#">
                    <img :src="item.img"  :style="{width:banner.width,height:banner.height}">
                </a>
            </div>

            <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate" v-for="item in firstImg">
                <a href="#">
                    <img :src="item.img"  :style="{width:banner.width,height:banner.height}">
                </a>
            </div>
        </div>
        <div class="mui-slider-indicator">
            <div class="mui-indicator" :class="{ 'mui-active': index==0 }" v-for="(item, index) in picList"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['picList','banner'],
        data() {
            return {
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
        },
        mounted() {
            this.initScroll()
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
.mui-slider{
    .mui-slider-item{
        text-align: center;
        img{

        }
    }
}
</style>