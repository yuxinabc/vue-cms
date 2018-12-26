import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
let httpClient=axios.create({
    baseURL:'http://47.89.21.179:8080/api',
    timeout: 10000,
})
// Add a request interceptor
httpClient.interceptors.request.use(config=>{
    if (config.method === 'post') {
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
        config.data = qs.stringify(config.data)
    }
    return config
})
// Add a response interceptor
httpClient.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
Vue.use(VueAxios, httpClient)