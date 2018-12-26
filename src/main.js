import Vue from 'vue'
import Main from './Main.vue'
import router from './router.js'
/*------导入mui相关开始---------*/
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'
import mui from './libs/mui/js/mui.min.js'

Vue.prototype.mui = mui
/*------导入mui相关结束---------*/
/*全局导入网络网络访问*/
import './http/http.js'
//导入时间处理插件
import moment from 'moment'
//配置懒加载
import VueLazyload from 'vue-lazyload'
// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: '../src/assets/images/load.gif',
    attempt: 1
})
//全局过滤器，必须定义在Vue对象生成之前，在多个Vue对象通用,过滤器调用采用就近原则
Vue.filter('timeFormat', function (time, pattern) {
    return moment(time).format(pattern || 'YYYY-MM-DD HH:mm:ss')
})
Vue.prototype.picList = [
    'https://goss.veer.com/creative/vcg/veer/800water/veer-135261461.jpg', 'https://goss1.veer.com/creative/vcg/veer/612/veer-170524814.jpg',
    'https://goss2.veer.com/creative/vcg/veer/612/veer-170649743.jpg', 'https://goss3.veer.com/creative/vcg/veer/612/veer-134758095.jpg',
    'https://goss4.veer.com/creative/vcg/veer/612/veer-130189373.jpg', 'https://goss.veer.com/creative/vcg/veer/612/veer-142420193.jpg',
    'https://goss1.veer.com/creative/vcg/veer/612/veer-105516317.jpg','https://goss2.veer.com/creative/vcg/veer/612/veer-132789226.jpg',
'https://goss3.veer.com/creative/vcg/veer/612/veer-141902436.jpg','https://goss4.veer.com/creative/vcg/veer/612/veer-134762415.jpg',
'https://goss.veer.com/creative/vcg/veer/612/veer-303011770.jpg','https://goss1.veer.com/creative/vcg/veer/612/veer-141954967.jpg',
'https://goss3.veer.com/creative/vcg/veer/612/veer-134218992.jpg','https://goss4.veer.com/creative/vcg/veer/612/veer-130883963.jpg',
'https://goss.veer.com/creative/vcg/veer/612/veer-157769759.jpg','https://goss1.veer.com/creative/vcg/veer/612/veer-141996350.jpg',
'https://goss2.veer.com/creative/vcg/veer/612/veer-129655677.jpg','https://goss3.veer.com/creative/vcg/veer/612/veer-147079912.jpg',
'https://goss4.veer.com/creative/vcg/veer/612/veer-135666187.jpg','https://goss.veer.com/creative/vcg/veer/612/veer-133992894.jpg',
'https://goss1.veer.com/creative/vcg/veer/612/veer-133864850.jpg','https://goss2.veer.com/creative/vcg/veer/612/veer-134438092.jpg']
new Vue({
    el: '#app',
    router,
    render: c => c(Main),
})