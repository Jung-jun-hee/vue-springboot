<template>
    <div>
       <h4>수정 페이지</h4>
    </div>

</template>


<script>
    import http from "../../http-common";

    export default {
        name: "ModifyPosts",
        data() {
            return {
               posts: []
            };
        },
        methods: {

        },
        mounted(){
            // let idx = location.href.lastIndexOf('/');
            //
            // this.post_id = location.href.substring(idx+1); // post_id만 url 주소에서 잘려서 나옴
            // console.log(this.post_id); // 잘려진 post_id 콘솔에 찍어보기

        }

    };

</script>

<style scoped>

</style>