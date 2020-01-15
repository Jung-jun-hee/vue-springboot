<template>
  <div class="searchform">
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
    <h4>Find by Age</h4>
    <div class="form-group">
      <input type="number" class="form-control" id="age" required v-model="age" name="age">
    </div>
 
    <div class="btn-group">
      <button v-on:click="searchCustomers" class="btn btn-success">Search</button>
    </div>

    <ul class="search-result">
      <li v-for="(customer, index) in customers" :key="index">
        <h6>{{customer.name}} ({{customer.age}})</h6>
      </li>
    </ul>
  </div>
</template>

<script>
import http from "../../http-common";

export default {
  name: "search-customer",
  data() {
    return {
      age: 0,
      customers: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    searchCustomers() {
      http
        .get("/customer/customers/age/" + this.age)
        .then(response => {
          this.customers = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>

<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
.sidelist{
  position: fixed;
  left: 0;
}
</style>