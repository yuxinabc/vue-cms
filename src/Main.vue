<template>
    <div class="app-container">
        <header class="mui-bar mui-bar-nav" :class="{'mui-action-back':isShow,'mui-icon':isShow,' mui-icon-left-nav':isShow,'mui-pull-left':isShow}">
            <h1 class="mui-title">{{title}}</h1>
        </header>
        <transition >
            <router-view></router-view>
        </transition>
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
            isShow:false,
        }
    },
    methods:{

    },
    watch:{
        $route( to , from ) {
           this.title=to.name
            this.isShow = to.name !== '首页';
        }
    },

}
</script>

<style lang="less" scoped>
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
    }
    .v-enter-active,.v-leave-active{
        transition: all .5s ease;
        position: absolute;
    }
</style>
<style lang="less">
    .app-container{
        width: 100%;
        padding-top: 44px;
        padding-bottom: 50px;
        overflow-x: hidden;
        .mui-bar-nav{
            height: 44px;
            line-height: 44px;
            background: #0D8EF6;
            color: white;
            .mui-title{
                color: white;
            }
        }
    }
</style>