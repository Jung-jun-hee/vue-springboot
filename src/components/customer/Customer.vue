<template>
  <div v-if="this.customer">
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
    <h4>Customer</h4>
    <div>
      <label>Name: </label> {{this.customer.name}}
    </div>
    <div>
      <label>Age: </label> {{this.customer.age}}
    </div>
    <div>
      <label>Active: </label> {{this.customer.active}}
    </div>
  
    <span v-if="this.customer.active"
      v-on:click="updateActive(false)"
      class="button is-small btn-primary">Inactive</span>
    <span v-else
      v-on:click="updateActive(true)"
      class="button is-small btn-primary">Active</span>
  
    <span class="button is-small btn-danger" v-on:click="deleteCustomer()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Customer...</p>
  </div>
</template>

<script>
import http from "../../http-common";

export default {
  name: "customer",
  props: ["customer"],
  methods: {
    /* eslint-disable no-console */
    updateActive(status) {
      var data = {
        id: this.customer.id,
        name: this.customer.name,
        age: this.customer.age,
        active: status
      };

      http
        .put("/customer/customer/" + this.customer.id, data)
        .then(response => {
          this.customer.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCustomer() {
      http
        .delete("/customer/customer/" + this.customer.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
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
.sidelist{
  position: fixed;
  left: 0;
}
</style>
