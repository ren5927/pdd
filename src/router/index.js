import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import search from '../views/search/search.vue'
import chat from '../views/chat/chat.vue'
import person from '../views/person/person.vue'
import hot from '../views/hot/hot.vue'
import notfound from '../views/notfound/notfound.vue'
import shopinfo from '../views/shopinfo/shopinfo.vue'
import reg from '../views/person/reg.vue'
Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/home"
  }, {
    path: '/home',
    component: Home,
  },
  {
    path: "/shopinfo",
    component: shopinfo,
  },
  {
    path: '/search',
    component: search,
  },
  {
    path: '/chat',
    component: chat,
  },
  {
    path: '/person',
    component: person,
  },
  {
    path: '/hot',
    component: hot,
  }, {
    path: "/reg",
    component: reg,
  },
  {
    path: "*",
    component: notfound,
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router