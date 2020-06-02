import Vue from 'vue';

import Router from 'vue-router';

import Home from './views/Home.vue';
import Business from './views/Business.vue';
// import NotFound from '@/components/NotFound.vue';

Vue.use(Router);


const router = new Router({
    mode: 'history',
    routes: [
    { 
      path: '/', 
      redirect: "/home"   
    },
    { 
      path: '/home', 
      component: Home,
      name: "home",
      props: true      
    },
    {
      path: "/search/:searchString",
      component: Home,
      name: "search",
      props: true
    },

    {
        path: '/business/:id',
        component: Business,
        props: true
    }]
});

export default router;