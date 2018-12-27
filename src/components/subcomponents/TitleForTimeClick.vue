<template>
    <div class="title-container">
        <h3 class="title" :style="{ color: titleColor,}">{{info.title}}</h3>
        <p class="subtitle">
            <span  :style="{color:subTitleColor}">发表时间:{{info.add_time|timeFormat}}</span>
            <span  :style="{color:subTitleColor}">点击:{{info.click}}次</span>
        </p>
        <hr/>
    </div>
</template>

<script>
    export default {
        props: ['info','titleColor','subTitleColor'],
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .title-container {
        padding: 4px 4px 0;
        .title {
            margin: 15px 0;
            font-size: 15px;
            color: red;
            text-align: center;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            span {
                color: #0069d9;
                font-size: 13px;
            }
        }
    }
</style>