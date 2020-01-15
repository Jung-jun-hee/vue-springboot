<template>
  <div class="submitform">
    <div class="sidelist">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
	<router-link class="nav-link" to="/bbs">Board</router-link>
          </li>
          <li class="nav-item">
	<router-link class="nav-link" to="/bbs/add">Add</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bbs/search">Search</router-link>
          </li>
        </ul>
    </div>

    <div v-if="!submitted">
        <div class="form-group">
          <label for="subject">subject</label>
          <input type="text" class="form-control" id="subject" required v-model="board.subject" name="subject">
        </div>
    
        <div class="form-group">
          <label for="content">content</label>
          <input type="text" class="form-control" id="content" required v-model="board.content" name="content">
        </div>
<!--        <div class="form-group">-->
<!--            <label for="exampleTextarea">Example textarea</label>-->
<!--            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>-->
<!--        </div>-->


        <div class="form-group">
          <label for="user_name">user_name</label>
          <input type="text" class="form-control" id="user_name" required v-model="board.user_name" name="user_name">
        </div>
    
        <button v-on:click="saveBoard" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newBoard">Add</button>
    </div>
  </div>
</template>

<script>
import http from "../../http-common";

export default {
  name: "add-board",
  data() {
    return {
      board: {
       subject: "",
       content: "",
        user_name: ""
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveBoard() {
      var data = {
        subject: this.board.subject,
        content: this.board.content,
        user_name:this.board.user_name
      };

      http
        .post("/bbs/board", data)
        .then(response => {
          this.board.b_id = response.data.b_id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    newCustomer() {
      this.submitted = false;
      this.customer = {};
    }
    /* eslint-enable no-console */
  }
};
</script>

<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
.sidelist{
  position: fixed;
  left: 0;
}
</style>
