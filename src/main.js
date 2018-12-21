import  Vue from 'vue'
import Main from './Main.vue'
import router from './router.js'
/*------导入mui相关开始---------*/
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'
import  mui from './libs/mui/js/mui.min.js'
Vue.prototype.mui = mui
/*------导入mui相关结束---------*/
new Vue({
    el:'#app',
    router,
    render:c=>c(Main),

})