import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
let http=axios.create({
    baseURL:'http://47.89.21.179:8080/api',
    timeout: 1000,
})
/*http.interceptors.request.use(config=>{
    config.headers={'Content-Type':'application/x-www-form-urlencoded'}
})*/
Vue.use(VueAxios, http)