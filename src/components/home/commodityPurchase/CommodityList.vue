<template>
    <div id="refreshContainer" class="mui-content mui-scroll-wrapper commodity-container">
        <div class="mui-scroll">
            <!--数据列表-->
            <ul class="mui-table-view mui-table-view-chevron commodity-list">
                    <li class="commodity-item" v-for="(item,index) in commodityList" :key="index"
                                  @tap="routerTo(item.id)">
                        <img v-lazy="item.img_url" alt="">
                        <p class="commodity-title mui-ellipsis-2" style=" -webkit-line-clamp: 3;">{{item.title}}</p>
                        <div class="commodity-info">
                            <span class="new-price">&yen{{item.market_price}}</span>
                            <span class="old-price">&yen{{item.sell_price}}</span>
                            <div>
                                <span class="state">热卖中</span>
                                <span class="stock_quantity">剩余{{item.stock_quantity}}件</span>
                            </div>

                        </div>
                    </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                commodityList:[],
                currentPage:1,
            }
        },
        methods:{
            routerTo(id){
                this.$router.push(`/home/commodityPurchase/commodityDetail/${id}`)
            },
            doGetCommodityList(currentPage,pullToRefresh){
                this.axios.get('/getgoods',{
                    params:{pageindex:currentPage}
                })
                    .then(response=>{
                        if(pullToRefresh){
                            if(pullToRefresh.pulldown){
                                pullToRefresh.endPulldownToRefresh()
                                pullToRefresh.enablePullupToRefresh()
                            }else{
                                pullToRefresh.endPullupToRefresh(response.data.message.length>0)
                            }


                        }
                       for(let i=0;i<response.data.message.length;i++){
                           response.data.message[i].img_url=this.phoneList[i]
                       }
                        this.commodityList=this.commodityList.concat(response.data.message)
                        console.log(this.commodityList)
                    })
                    .catch(error=>{
                        if(pullToRefresh){
                            if(pullToRefresh.pulldown){
                                pullToRefresh.endPulldownToRefresh()
                                pullToRefresh.enablePullupToRefresh()
                            }else{
                                pullToRefresh.endPullupToRefresh(true);
                            }


                        }
                    })
            },
        },
        created(){
            this.currentPage=1
            this.commodityList.splice(0,this.commodityList.length)
            this.doGetCommodityList(this.currentPage)
        },
        updated(){
            let that=this;
            this.mui.init({
                pullRefresh : {
                    container:'#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
                    down : {
                        height:50,//可选,默认50.触发下拉刷新拖动距离,
                        auto: false,//可选,默认false.首次加载自动下拉刷新一次
                        contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
                        contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
                        contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
                        callback :function () {
                            that.currentPage=1;
                            that.commodityList.splice(0,that.commodityList.length)
                            that.doGetCommodityList(that.currentPage,this)
                        }//必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；

                    },
                    up : {
                        height:50,//可选.默认50.触发上拉加载拖动距离
                        auto:false,//可选,默认false.自动上拉加载一次
                        contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                        contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                        callback :function () {
                            that.currentPage++;
                            that.doGetCommodityList(that.currentPage,this)
                        }, //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                    }
                }
            });
        }
    }
</script>

<style lang="less" scoped>
.commodity-container{
    padding-top: 44px;
    padding-bottom: 50px;
    background: transparent;
    .mui-table-view:before,.mui-table-view:after{
        height: 0;
        top: 0;
    }
    .commodity-list{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        justify-content: space-between;
        margin-bottom:-10px;
        .commodity-item{
            margin-bottom:10px;
            .commodity-title{
                color: #080808;
                font-size: 12px;
                font-weight: bold;
                height: 63px;
            }
            .commodity-info{
                background: #DDDDDC;
                position: relative;
                padding: 5px;
                .new-price{
                    color: #F51500;
                    font-size: 15px;
                    margin-right: 15px;
                }
                .old-price{
                    color: #828484;
                    font-size: 13px;
                    text-decoration: line-through;
                }
                div{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-top: 10px;
                    .state{
                        font-size: 12px;
                        color: #828484;
                    }
                    .stock_quantity{
                        font-size: 12px;
                        color: #828484;
                    }
                }

            }
            img{
                border: 0;
                vertical-align: middle;
                width: 100%;
                height: auto;
                margin-top: 15px;
            }
            width: 49%;
            box-shadow: 0 0 9px #999;
        }
    }
}
</style>