<template>
  <div class="submitform">
    <div class="sidelist">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
	<router-link class="nav-link" to="/customer">customer</router-link>
          </li>
          <li class="nav-item">
	<router-link class="nav-link" to="/customer/add">Add</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/customer/search">Search</router-link>
          </li>
        </ul>
    </div>
    <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required v-model="customer.name" name="name">
        </div>
    
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age" required v-model="customer.age" name="age">
        </div>
    
        <button v-on:click="saveCustomer" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newCustomer">Add</button>
    </div>
  </div>
</template>

<script>
import http from "../../http-common";

export default {
  name: "add-customer",
  data() {
    return {
      customer: {
        id: 0,
        name: "",
        age: 0,
        active: false
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveCustomer() {
      var data = {
        name: this.customer.name,
        age: this.customer.age
      };

      http
        .post("/customer/customer", data)
        .then(response => {
          this.customer.id = response.data.id;
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
