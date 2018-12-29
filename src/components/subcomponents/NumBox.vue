<template>
    <div class="mui-numbox my-num-box" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="box" class="mui-input-numbox" type="number" value="1" ref="input" @change="$emit('getNum',$refs.input.value)"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    export default {
       props:['maxNum'],
        data(){
           return{
           }
        },
        mounted() {
            this.mui('.mui-numbox').numbox()
        },
       watch:{
           maxNum(newValue,oldValue){
               this.mui('.mui-numbox').numbox().setOption('max',newValue)
           },
       },
    }
</script>

<style scoped>

</style>