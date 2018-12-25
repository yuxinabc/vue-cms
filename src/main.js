import  Vue from 'vue'
import Main from './Main.vue'
import router from './router.js'
/*------导入mui相关开始---------*/
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'
import  mui from './libs/mui/js/mui.min.js'
Vue.prototype.mui = mui
/*------导入mui相关结束---------*/
/*全局导入网络网络访问*/
import './http/http.js'
//导入时间处理插件
import  moment from 'moment'
//全局过滤器，必须定义在Vue对象生成之前，在多个Vue对象通用,过滤器调用采用就近原则
Vue.filter('timeFormat',function (time,pattern) {
    return moment(time).format(pattern||'YYYY-MM-DD HH:mm:ss')
});
new Vue({
    el:'#app',
    router,
    render:c=>c(Main),

})