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
//图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview,{
    barsSize: {top: 0, bottom: 0},
    fullscreenEl: false,
    shareEl: false,
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
Vue.prototype.picThumbnailList=[
    'http://img14.360buyimg.com/n4/jfs/t20251/95/1073671906/120380/e33d18b2/5b1f43f0N9ffa53b7.jpg','http://img0.imgtn.bdimg.com/it/u=1257113412,4098223246&fm=15&gp=0.jpg',
    'http://img3.imgtn.bdimg.com/it/u=1876350413,2024419282&fm=15&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=2618918882,2193647875&fm=15&gp=0.jpg',
    'http://img4.imgtn.bdimg.com/it/u=4171074786,3333273266&fm=15&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=2618918882,2193647875&fm=15&gp=0.jpg',
    'http://img4.imgtn.bdimg.com/it/u=1825781421,4173129089&fm=26&gp=0.jpg','http://img1.imgtn.bdimg.com/it/u=1368100893,2238243928&fm=15&gp=0.jpg',
    'http://img4.imgtn.bdimg.com/it/u=1549423193,4165809315&fm=26&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=365823524,2830219834&fm=26&gp=0.jpg',
    'http://img5.imgtn.bdimg.com/it/u=1806153627,314489312&fm=26&gp=0.jpg','http://image.thepaper.cn/publish/interaction/image/0/874/702.jpg',
    'http://img2.imgtn.bdimg.com/it/u=3587212184,2574333052&fm=26&gp=0.jpg','http://img1.imgtn.bdimg.com/it/u=4109597945,2043831774&fm=26&gp=0.jpg',
    'http://img0.imgtn.bdimg.com/it/u=949818001,1285325183&fm=15&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=1965848099,2252930227&fm=15&gp=0.jpg',
    'http://img0.imgtn.bdimg.com/it/u=2900232183,3944425525&fm=15&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=3547553144,2651227318&fm=15&gp=0.jpg',
    'http://img0.imgtn.bdimg.com/it/u=3351350563,651554009&fm=15&gp=0.jpg','http://img4.imgtn.bdimg.com/it/u=642625747,4100644561&fm=15&gp=0.jpg',
    'http://img0.imgtn.bdimg.com/it/u=1915563320,1495307080&fm=15&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=412430176,990584846&fm=15&gp=0.jpg']
new Vue({
    el: '#app',
    router,
    render: c => c(Main),
})