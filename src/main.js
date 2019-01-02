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
//导入vuex数据对象
import store from './data.js'

//全局过滤器，必须定义在Vue对象生成之前，在多个Vue对象通用,过滤器调用采用就近原则
Vue.filter('timeFormat', function (time, pattern) {
    return moment(time).format(pattern || 'YYYY-MM-DD HH:mm:ss')
})
Vue.prototype.moneyFormat= (money,pattern)=> {
    if(pattern==='$'){
        return '$'+money
    }else{
        return '&yen'+money
    }

}
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
Vue.prototype.phoneList=[
    'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg','https://img12.360buyimg.com/n7/jfs/t21415/332/642302956/189613/778f2021/5b13cd6cN8e12d4aa.jpg',
    'https://img12.360buyimg.com/n7/jfs/t21043/186/220467895/46630/3417464c/5b0517ccN295c6fdb.jpg','https://img10.360buyimg.com/n7/jfs/t20569/241/521943946/338336/409b289f/5b0fcb56N90ae22f0.jpg',
    'https://img14.360buyimg.com/n7/jfs/t1/6425/40/3887/217009/5bd716e9E4886d5d8/b3da975f4047ded3.jpg', 'https://img14.360buyimg.com/n7/jfs/t13441/73/1250191369/239632/8b94bbc6/5a1d1e2dN6ba9aac4.jpg',
    'https://img13.360buyimg.com/n7/jfs/t27112/273/1423275096/265013/d92b3181/5be3cb5bN334c8048.jpg', 'https://img10.360buyimg.com/n7/jfs/t18157/222/1822300674/231514/6c179af8/5ad87390N086a3c91.jpg',
    'https://img14.360buyimg.com/n7/jfs/t18052/318/2334327001/256076/23da5f45/5af13917Naca6cb3d.jpg', 'https://img10.360buyimg.com/n7/jfs/t1/4612/28/6223/298257/5ba22d66Ef665222f/d97ed0b25cbe8c6e.jpg',
    'https://img12.360buyimg.com/n7/jfs/t26257/277/1057746984/473535/e50fe16b/5bbf1b0dN865b6899.jpg', 'https://img11.360buyimg.com/n7/jfs/t24202/21/1240414017/266807/216c76b7/5b5705a1N6a12c28c.jpg',
    'https://img14.360buyimg.com/n7/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg','https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg',
    'https://img13.360buyimg.com/n7/jfs/t22921/120/2385170149/233112/2ade64f5/5b7d77ffN9b878622.jpg','https://img13.360buyimg.com/n7/jfs/t8284/363/1326459580/71585/6d3e8013/59b857f2N6ca75622.jpg']
new Vue({
    el: '#app',
    router,
    render: c => c(Main),
    store,
})