<template>
    <div class="app-container">
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">{{title}}</h1>
        </header>
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/home" >
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shoppingCart" >
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
              <!--  <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>-->
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search" >
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'首页',
        }
    },
    methods:{

    },
    watch:{
        $route( to , from ) {
           this.title=to.name
        }
    },

}
</script>

<style lang="less" scoped>

</style>
<style lang="less">
    .app-container{
        padding-top: 44px;
    }
</style>