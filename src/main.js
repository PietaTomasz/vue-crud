/* eslint-disable */

import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import About from './components/About'
import Crud from './components/Crud'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
{path: '/', component: Hello },
{path: '/about', component: About },
{path: '/crud', component: Crud }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const vue = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')




