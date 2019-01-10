<template>
    <div class="shopping-cart-container">
        <ul class="cart-list">
            <li class="cart-item">
                <div class="mui-card">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <el-switch class="sw-button" @change="switchListener"
                                       v-model="isOpened"
                                       active-color="#13ce66"
                                       inactive-color="#ccc">
                            </el-switch>
                            <img class="img-commodity"
                                 src="https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg"
                                 alt="">
                            <div class="commodity-content">
                                <h2 class="commodity-title">小米16G,双网通版</h2>
                                <div class="commodity-price-num">
                                    <span>15</span>
                                    <num-box></num-box>
                                    <span>删除</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import NumBox from './subcomponents/NumBox.vue'

    export default {
        components: {
            'num-box': NumBox,
        },
        data() {
            return {
                isOpened: false
            }
        },
        created(){
            this.doGetShopCarList()
        },
        methods: {
            switchListener(isOpened) {

            },
            doGetShopCarList() {
                console.log(`/goods/getshopcarlist/${this.$store.getters.getAllIds}`)
                this.axios.get(`/goods/getshopcarlist/${this.$store.getters.getAllIds}`)
                    .then(response => {
                         console.log(response)
                    })
            },
        }
    }
</script>

<style lang="less" scoped>
    .shopping-cart-container {
        overflow: hidden;
        background: #CACAC9;
        .cart-list {
            .cart-item {
                .mui-card-content-inner {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    align-items: center;
                    .sw-button {
                       // width: 100%;
                    }
                    .img-commodity {
                        width: 60px;
                        height: 60px;
                    }
                    .commodity-content {
                       // width: 100%;
                        h2{
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
</style>