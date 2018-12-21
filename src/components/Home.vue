<template>
    <div>
        <div id="slider" class="mui-slider" >
            <div class="mui-slider-group mui-slider-loop">
                <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="../../src/assets/images/l4.jpg">
                    </a>
                </div>
                <!-- 第一张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../../src/assets/images/l1.jpg">
                    </a>
                </div>
                <!-- 第二张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../../src/assets/images/l2.jpg">
                    </a>
                </div>
                <!-- 第三张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../../src/assets/images/l3.jpg">
                    </a>
                </div>
                <!-- 第四张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../../src/assets/images/l4.jpg">
                    </a>
                </div>
                <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="../../src/assets/images/l1.jpg">
                    </a>
                </div>
            </div>
            <div class="mui-slider-indicator">
                <div class="mui-indicator mui-active"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            //设置自动轮播
            autoPlay(){
                let gallery = this.mui('.mui-slider');
                gallery.slider({
                    interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
                })
            },
        },
        //内存界面已经挂载到DOM
        mounted(){
            this.autoPlay()
        }
    }
</script>

<style scoped>

</style>