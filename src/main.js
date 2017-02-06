
require('materialize-css/dist/js/materialize.js')

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Dashboard from './Dashboard.vue';
import Sales from './Sales.vue';
import Items from './Items.vue';

Vue.use(VueRouter);

const routes = [
  {
    name:'sales',
    path:'/sales',
    component:Sales
  },{
    name:'items',
    path:'/items',
    component:Items
  },{
    name:'dashboard',
    path:'/dashboard',
    component:Dashboard
  },{
    path:'/',
    redirect:{'name':'dashboard'}
  }
]

const router = new VueRouter({
  routes,
  mode:'history' // default is # strategy, 'history' will remove #
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
