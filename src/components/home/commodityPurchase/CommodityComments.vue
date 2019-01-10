<template>
    <comment-box :id="this.$route.params.id"></comment-box>
</template>

<script>
    import  Comment from '../../subcomponents/Comment.vue'
    export default {
        components:{
            'comment-box':Comment
        },
    }
</script>

<style scoped>

</style>