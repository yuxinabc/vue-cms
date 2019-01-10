//导入Vuex开始
import Vue from  'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
     car:JSON.parse(localStorage.getItem('car')||'[]')
    },
    mutations: {
      addCommodityToCar(state,commodity){
          let flag=state.car.some(item=>{
              if(item.id==commodity.id){
                  item.count+=parseInt(commodity.count)
                  return true
              }
              return false
          })
          if(!flag){
              state.car.push(commodity)
          }
       localStorage.setItem('car',JSON.stringify(state.car))
      },
    },
    getters:{
       getAllCount(state){
           let count=0
           state.car.forEach(item=>{
               count+=parseInt(item.count)
           })
           return count;
        },
        getAllIds(state){
           let ids=''
            state.car.forEach(item=>{
                ids+=item.id+','
            })
            return ids.substring(0,ids.length-1);
        },
    }
})
export default store
//导入Vuex结束