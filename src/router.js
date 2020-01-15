import Vue from "vue";
import Router from "vue-router";
import mainView from "./components/mainView";
import BoardList from "./components/board/BoardList.vue";
import AddBorad from "./components/board/AddBorad.vue";
import SearchBoards from "./components/board/SearchBoards.vue";
import Board from "./components/board/Board.vue";
import CustomersList from "./components/customer/CustomersList.vue";
import AddCustomer from "./components/customer/AddCustomer.vue";
import SearchCustomers from "./components/customer/SearchCustomers.vue";
import Customer from "./components/customer/Customer.vue";
import Addposts from "./components/posts/Addposts";
import PostsList from "./components/posts/PostsList";
import Post from "./components/posts/Post";
import ModifyPosts from "./components/posts/ModifyPosts";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path:  "/",
      name: "mainView",
      component: mainView
    },
      {
          path:  "/bbs/board",
          name: "boards",
          alias: "/bbs",
          component: BoardList
      },
      {
          path: "/bbs/BoardList/:b_id",
          name: "board-details",
          component: Board,
          props: true
     },
    {
      path: "/bbs/add",
      name: "add",
      component: AddBorad
    },
    {
      path: "/bbs/search",
      name: "search",
      component: SearchBoards
    },
    {
      path: "/customer/customer",
      name: "customers",
       alias: "/customer",
      component: CustomersList
      },
      {
          path: "/customer/customer/:id",
          name: "customer-details",
          component: Customer,
          props: true
        },
     {
      path: "/customer/add",
      name: "add",
      component: AddCustomer
    },
    {
      path: "/customer/search",
      name: "search",
      component: SearchCustomers
    },
            {
          path:  "/jun/board",
          name: "boards",
          alias: "/jun",
          component: BoardList
      },
      {

          path: "/jun/BoardList/:b_id",
          name: "board-details",
          component: Board,
          props: true
      },
      {
          path: "/jun/add",
          name: "add",
          component: AddBorad
      },
      {
          path: "/jun/search",
          name: "search",
          component: SearchBoards
      },
      {
          path: "/pst/add",
          name: "add",
          component: Addposts
      },
      {
          path:  "/pst/posts",
          name: "post",
          alias: "/pst",
          component: PostsList


      },
       {
           path: "/pst/PostsList/:post_id",
           name: "post-details",
           component: Post,
           props : true

       },
      {
          path:"/pst/ModifyPosts/:post_id",
          name: "ModifyPosts",
          component: ModifyPosts,
          props : true

      }

  ]
});