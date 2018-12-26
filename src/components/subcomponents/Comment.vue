<template>
    <div class="comment-container">
        <h3 class="title">发表评论</h3>
        <hr/>
        <div class="mui-input-row" style="margin: 0 5px;">
            <textarea id="textarea" rows="5" placeholder="请输入要BB的内容（最多BB120字）" maxlength="120"
                      v-model="comment"></textarea>
        </div>
        <button type="button" class="mui-btn mui-btn-primary mui-btn-block my-submit-button" @click="doComment">发表评论
        </button>
        <div class="comments">
            <div class="comment-title" v-for="(item,index) in commentList" :key="index">
                <p>第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|timeFormat}}</p>
                <p>{{item.content==='undefined'?'此用户很懒，没有留下评论':item.content}}</p>
            </div>
        </div>
        <p v-if="!isMore" class="load-finished">已加载全部</p>
        <button type="button" class="mui-btn mui-btn-royal mui-btn-block mui-btn-outlined my-submit-button"
                @click="getMore" v-if="isMore">加载更多
        </button>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                commentList: [],
                currentPage: 1,
                comment: '',
                isMore: true,
            }
        },
        methods: {
            getCommentList() {
                this.axios.get(`/getcomments/${this.id}`, {
                    params: {pageindex: this.currentPage}
                }).then(response => {
                    this.isMore = response.data.message.length > 0
                    this.commentList = this.commentList.concat(response.data.message)
                }).catch(error => {

                })
            },
            getMore() {
                this.currentPage++
                this.getCommentList()
            },
            doComment() {
               /* const params = new URLSearchParams()
                params.append('content', this.comment)*/
                this.axios.post(`/postcomment/${this.id}`, {
                    content:this.comment
                }).then(response => {
                    //先初始化
                    this.currentPage = 1
                    this.commentList.splice(0, this.commentList.length)
                    //在更新数据
                    this.getCommentList()
                }).catch(error => {

                })
            },
        },
        created() {
            this.commentList.splice(0, this.commentList.length)
            this.getCommentList()
        },
    }
</script>

<style lang="less" scoped>
    .comment-container {
        .title {
            font-size: 16px;
        }
        .mui-input-row {
            textarea {
                margin-bottom: 5px;
            }
        }
        .my-submit-button {
            padding: 7px 0;
        }
        .comment-title {
            p {
                &:first-child {
                    background: lightgray;
                    font-size: 13px;
                    color: black;
                }
                &:last-child {
                    text-indent: 2em;
                    font-size: 15px;
                    color: #1b1e21;
                }
            }
        }
        .load-finished {
            text-align: center;
            color: dimgray;
        }
    }
</style>