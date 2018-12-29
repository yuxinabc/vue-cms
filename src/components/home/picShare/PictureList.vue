<template>
    <div class="picture-sharing">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item" :class="{'mui-active':tabIndex===index}" v-for="(item,index) in titleList"
                       :key="index" @tap="doGetImages(item.id,index)">
                        {{item.title}}
                    </a>
                </div>
            </div>
            <ul class="img-container">
                <router-link tag="li" v-for="item in imgList" :key="item.id" :to="'/home/pictureSharing/pictureDetail/'+item.id">
                    <img v-lazy="item.img_url">
                    <div class="description">
                        <h3>{{item.title}}</h3>
                        <p class="mui-ellipsis-2" style="-webkit-line-clamp:3">{{item.zhaiyao}}</p>
                    </div>
                </router-link>
            </ul>
            <div class="no-data" v-if="imgList.length===0">
                <p>暂无数据</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                titleList: [],
                imgList: [],
                tabIndex:0
            }
        },
        methods: {
            initScroll() {
                this.mui('.mui-scroll-wrapper').scroll({
                    scrollY: false, //是否竖向滚动
                    scrollX: true, //是否横向滚动
                    startX: 0, //初始化时滚动至x
                    startY: 0, //初始化时滚动至y
                    indicators: false, //是否显示滚动条
                    bounce: false, //是否启用回弹
                    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                })
            },
            doGetTitleList() {
                this.axios.get('/getimgcategory')
                    .then(response => {
                        this.titleList = response.data.message
                        this.titleList.unshift({title: "全部", id: 0})
                    })
                    .catch(error => {

                    })
            },
            doGetImages(id,index) {
                //处理tab点击的切换效果
                this.tabIndex=index;
                this.axios.get(`/getimages/${id}`)
                    .then(response => {
                        for (let i = 0; i < response.data.message.length; i++) {
                            let imgObj = response.data.message[i]
                            imgObj.img_url = this.picList[i]
                        }
                        this.imgList = response.data.message
                    })
            }
        },
        created() {
            this.doGetTitleList()
            this.doGetImages(0,0)
        },
        mounted() {
            this.initScroll()
        },
    }
</script>

<style lang="less" scoped>
    *{
        touch-action: pan-y;
    }
    .picture-sharing {
        .img-container {
            list-style: none;
            margin: 0;
            padding: 10px;
            li {
                position: relative;
                margin-bottom: 15px;
                background: #ccc;
                img {
                    box-shadow: 0 0 9px #999;
                    width: 100%;
                    vertical-align: middle;
                }
                .description {
                    position: absolute;
                    bottom: 0;
                    overflow: hidden;
                    background-color: rgba(0, 0, 0, .5);
                    h3 {
                        font-size: 13px;
                        color: white;
                    }
                    p {
                        font-size: 11px;
                        color: white;
                        margin: 0;
                        padding: 3px;
                    }
                }
            }
        }
        .no-data{
            p{
                color: #c0c0c0;
                text-align: center;
                margin-top: 30px;
            }
        }
    }
</style>