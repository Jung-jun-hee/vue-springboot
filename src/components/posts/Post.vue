<template>

    <div v-if="this.post">
        <div class="sidelist">
            <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                    <router-link class="nav-link" to="/pst">Board</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/pst/add">Add</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/pst/search">Search</router-link>
                </li>
            </ul>
        </div>
            <h4>전사 게시판</h4>
        <!--여기부터-->
        <div v-if="flex">
            <div>
                <label>user_name: </label> {{this.post.post_writer}}
            </div>
            <div>
                <label>subject: </label> {{this.post.post_subject}}
            </div>
            <div>
                <label> view: </label> {{this.post.post_view}}
            </div>

            <div class="card border-dark mb-5" style="max-width: 40rem;">
                <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-text" >{{this.post.post_content}}</p>
                </div>
             </div>

            <button class="btn btn-success" type="button" @click="deletePost">게시물 삭제</button>
            <button class="btn btn-success" type="button" @click="modify">게시물 수정</button>
        </div>
        <!--여기까지 div로 묶고 검사-->

        <div v-else>
         <label>제목</label>
            <input type="text" class="form-control" id="subject"
                   required v-model="post.post_subject" name="subject">
            <label>내용</label>
            <textarea class="form-control textArea" rows="15" required v-model="post.post_content">{{post.post_content}}</textarea><br>

            <button class="btn btn-success" type="button" @click="updatePost">수정하기</button>
        </div>
    </div>

    <div v-else>
        <br/>
        <p>Please click on a Board...</p>
    </div>

</template>

<script>
    import http from "../../http-common";

    export default {
        name: "post",
        data() {
            return{
                 flex: true // 나중에 조건 검사하면 글 작성자==나 일때 false로 바꾸기
            }
        },
        props: ["post"],
        methods: {

            deletePost() {
                http
                    .delete("/pst/delete/" + this.post.post_id)
                    .then(response => {
                        console.log(response.data);
                        // this.$emit("refreshData");
                        this.$router.push('/pst');
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            // modify(){
            //     this.$router.push({
            //        name : 'ModifyPosts',
            //         param: {
            //            posts_id: this.posts_id
            //         }
            //     })
            // }
               modify() {
                    this.flex=false
               },
            updatePost() {
                let postData = {
                    post_subject : this.post.post_subject,
                    post_content : this.post.post_content,
                }
                http
                    .put("/pst/update/"+this.post.post_id, postData)
                    .then(response => {
                        console.log("수정완료");
                        this.$router.push("/pst/posts")
                    })
                    .catch(e => {
                        console.log(e);
                    });

            }


        },


    };
</script>
<style>
    .sidelist {
        position: fixed;
        left: 0;
    }
    .card {
        position: center;
        text-align: left;
        left: 400px;
        height: 400px;
    }
    .form-control {
        width: 60%;
        margin : auto;
    }

</style>