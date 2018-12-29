<template>
    <div class="commodity-container">
        <transition
                @beforeEnter="beforeEnter"
                @enter="enter"
                @afterEnter="afterEnter">
            <span class="boll" v-show="isShow"></span>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <banner-box :picList="picList" :banner="{width:'auto',height:'160px'}"></banner-box>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{commodityInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    市场价：<span v-html="moneyFormat(commodityInfo.market_price)" class="market_price"></span>
                    &nbsp;销售价：<span v-html="moneyFormat(commodityInfo.sell_price)" class="sell_price"></span>
                    <div class="num-box-container">
                        <span>购买数量：</span>
                        <num-box :maxNum="commodityInfo.stock_quantity" @getNum="getNum">
                        </num-box>
                    </div>
                    <div class="operator">
                        <button type="button" class="mui-btn mui-btn-primary my-purchase-btn">
                            立即购买
                        </button>
                        <button type="button" class="mui-btn mui-btn-danger my-add-car-btn" @click="addToShopCar">
                            加入购物车
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card my-commodity-parameter">
            <div class="mui-card-header">
                商品参数
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{commodityInfo.goods_no}}</p>
                    <p>库存情况：{{commodityInfo.stock_quantity}}件</p>
                    <p>上架时间：{{commodityInfo.add_time|timeFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <button type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined"
                        @click="goGraphicIntroduction()">图文介绍
                </button>
                <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined"
                        @click="goComment()">商品评论
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from '../../subcomponents/Banner.vue'
   import NumBox from '../../subcomponents/NumBox.vue'
    export default {
        components: {
            'banner-box': Banner,
            'num-box':NumBox,
        },
        data() {
            return {
                picList: [],
                commodityInfo: {},
                isShow: false,
                selectedNum:1,
            }
        },
        methods: {
            getNum(num){
               this.selectedNum=num
            },
            beforeEnter(el){
                el.style.transform='translate(0,0)'
            },
            enter(el,done){
                el.offsetWidth
                const bollBound=el.getBoundingClientRect()
                const badgeBound= document.getElementById("shopping-badge").getBoundingClientRect()
                const xDist=badgeBound.left-bollBound.left;
                const yDist=badgeBound.top-bollBound.top;
                el.style.transform=`translate(${xDist}px,${yDist}px)`
                el.style.transition='all 1s cubic-bezier(.25,.1,.25,1)'
                done()
            },
            afterEnter(el){
                this.isShow=!this.isShow
            },
            addToShopCar() {
                this.isShow = !this.isShow
                document.getElementById("shopping-badge").innerText=this.selectedNum
            },
            goGraphicIntroduction() {
                this.$router.push(`/home/commodityPurchase/commodityDetail/graphicIntroduction/${this.$route.params.id}`)
            },
            goComment() {

            },
            doGetThumbnails() {
                this.axios.get(`/getthumimages/${this.$route.params.id}`)
                    .then(response => {
                        for (let i = 0; i < response.data.message.length; i++) {
                            let imgObj = {}
                            imgObj.img = this.phoneList[i]
                            this.picList.push(imgObj)
                        }
                    })
            },
            doGetInfo() {
                this.axios.get(`/goods/getinfo/${this.$route.params.id}`)
                    .then(response => {
                        console.log(response.data.message)
                        this.commodityInfo = response.data.message[0]
                    })
            }
        },
        created() {
            this.doGetThumbnails()
            this.doGetInfo()
        },
    }
</script>

<style lang="less" scoped>
    .commodity-container {
        background: #eee;
        overflow: hidden;
        .market_price {
            font-size: 13px;
            text-decoration: line-through;
            color: #080808;
        }
        .sell_price {
            font-size: 15px;
            color: #D32A14;
        }
        .num-box-container {
            padding-top: 10px;
            .my-num-box {
                height: 30px;
                margin-bottom: 15px;
                position: relative;
            }
            .operator {
                .my-purchase-btn {
                }
                .my-add-car-btn {
                }
            }

        }
        .my-commodity-parameter {
            color: #8D8E8F;
            .mui-card-footer {
                display: block;
                button {
                    padding: 10px 0;
                }
            }
        }
        .boll {
            position: absolute;
            width: 17px;
            height: 17px;
            background: red;
            border-radius: 50%;
            top: 371px;
            left: 152px;
            z-index: 9999;
        }
    }
</style>