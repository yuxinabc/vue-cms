<template>
    <div class="pic-detail">
        <title-time-click :info="info" :titleColor="'#2F99E2'" :subTitleColor="'#737576'"></title-time-click>
        <vue-preview :slides="slideList" @close="handleClose" :class="'my-slide'"></vue-preview>
        <p class="pic-des">{{info.content}}</p>
        <comment-box :id="$route.params.id"></comment-box>
    </div>
</template>

<script>
    import TitleForTimeClick from '../../subcomponents/TitleForTimeClick.vue'
    import comment from '../../subcomponents/Comment.vue'

    export default {
        components: {
            'comment-box': comment,
            'title-time-click': TitleForTimeClick
        },
        data() {
            return {
                info: {},
                slideList: []
            }
        },
        methods: {
            handleClose() {

            },
            doGetPicDetail() {
                this.axios.get(`/getimageInfo/${this.$route.params.id}`)
                    .then(response => {
                        this.info = response.data.message[0]
                        console.log(response)
                    })
            },
            doGetThumbnails() {
                this.axios.get(`/getthumimages/${this.$route.params.id}`)
                    .then(response => {
                        for (let i = 0; i < response.data.message.length; i++) {
                            let slideObj = {}
                            slideObj.msrc = this.picThumbnailList[i]
                            slideObj.src = this.picList[i]
                            slideObj.w = 600
                            slideObj.h = 400
                            this.slideList.push(slideObj)
                        }
                    })
            },
        },
        created() {
            this.doGetPicDetail()
            this.doGetThumbnails()
        },
    }
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .pic-detail {
        .mui-table-view {
            &:before, &:after {
                height: 0;
            }
        }
        .pic-des {
            color: #171717;
            text-indent: 1em;
            font-size: 12px;
        }
        .my-slide{
            width: 100%;
            @{deep}.my-gallery{
                width: 100%;
                display: flex;
                display: -webkit-flex;
                flex-wrap: wrap;
                padding-left: 14px;
                figure{
                    width: 33.33%;
                    margin: 0;
                    img{
                        box-shadow: 0 0 9px #999;
                    }
                }
            }
        }
    }
</style>