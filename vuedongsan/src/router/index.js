import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import InputTag from '../components/first-view.vue';
import NotFound from "../views/NotFound.vue";
import Login from "../views/login-Home.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    
    {
        path: "/1",
        name: "InputTag",
        component: InputTag,
     },
    
    {
        path: "/404",
        name: "notFound",
        component: NotFound,
    },

    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
  ];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export {router}