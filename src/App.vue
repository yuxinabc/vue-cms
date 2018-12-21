<template>
    <div class="app-container">
        <mt-header fixed :title="showTitle"></mt-header>
        <mt-tab-container v-model="selected" :swipeable="false">
            <mt-tab-container-item id="home">
                    <mt-swipe :auto="3000" class="my-swipe">
                        <mt-swipe-item><img src="../src/assets/images/l1.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
                        <mt-swipe-item><img src="../src/assets/images/l2.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
                        <mt-swipe-item><img src="../src/assets/images/l3.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
                        <mt-swipe-item><img src="../src/assets/images/l4.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
                        <mt-swipe-item><img src="../src/assets/images/l5.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
                    </mt-swipe>
            </mt-tab-container-item>
            <mt-tab-container-item id="person">
                <div>
                    会员内容
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="cart">
                <div>
                    购物车内容
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="search">
                <div>
                    搜索内容
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="home">
                <img slot="icon" src="../src/assets/images/icon-home.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="person">
                <img slot="icon" src="../src/assets/images/icon-person.png">
                会员
            </mt-tab-item>
            <mt-tab-item id="cart" class="my-cart">
                <span class="my-badge" >10</span>
                <img slot="icon" src="../src/assets/images/cart.png">
                购物车
            </mt-tab-item>
            <mt-tab-item id="search">
                <img slot="icon" src="../src/assets/images/search.png">
                搜索
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selected:'home',
        }
    },
    methods:{

    },
    computed:{
        showTitle(){
         if(this.selected==='home'){
             return '首页'
         }else if(this.selected==='person'){
             return '会员'
         }else if(this.selected==='cart'){
             return '购物车'
         }else if(this.selected==='search'){
             return '搜索'
         }
        }
    },
}
</script>

<style lang="less" scoped>
    .app-container{
        padding-top: 40px;
    }
</style>
<style lang="less">
    h1{
        margin: 0;
    }
    .my-swipe{
        height: 190px;
    }
    .my-cart{
        position: relative;
    }
    .my-badge{
        position: absolute;
        right:15px;
        top:5px;
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        background: red;
        color: white;
        border-radius: 50%;
    }
</style>