import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home/Home.vue'
import NewList from './components/home/NewList.vue'
import PictureSharing from './components/home/PictureSharing.vue'
import PictureDetail from './components/home/PictureDetail.vue'
import NewDetail from './components/home/NewDetail.vue'
import Member from './components/Member.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import Search from './components/Search.vue'
Vue.use(VueRouter)
let router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home,name:'首页'},
        {path:'/home/newList',component:NewList,name:'新闻资讯'},
        {path:'/home/newList/newDetail/:id',component:NewDetail,name:'新闻详情'},
        {path:'/home/pictureSharing',component:PictureSharing,name:'图片分享'},
        {path:'/home/pictureSharing/pictureDetail/:id',component:PictureDetail,name:'图片详情'},
        {path:'/member',component:Member,name:'会员'},
        {path:'/shoppingCart',component:ShoppingCart,name:'购物车'},
        {path:'/search',component:Search,name:'搜索'},
    ],
    //设置路由选中的样式
    linkActiveClass:'mui-active'
})
export  default  router;