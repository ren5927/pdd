import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

import {
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Lazyload,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Card,
  Search,
  Sticky,
  TreeSelect,
  SwipeCell,
  Toast,
  Button,
  Cell,
  Image,
  Icon,
  Form,
  Field,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  SubmitBar,
  NavBar,
  Tag,
} from 'vant';



Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(Card)
  .use(Search)
  .use(TreeSelect)
  .use(Sticky)
  .use(SwipeCell)
  .use(Toast)
  .use(Button)
  .use(Cell)
  .use(Image)
  .use(Icon)
  .use(Form)
  .use(Field)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(SubmitBar)
  .use(NavBar)
  .use(Tag)




import "amfe-flexible";
import "./assets/public.css";
Vue.config.productionTip = false

import shopcard from '@/components/hot/card.vue'
Vue.component("shopcard", shopcard);

import foot from '@/components/foot.vue'
Vue.component("foot", foot);

import contend from './views/home/homedress.vue'
Vue.component("contend", contend);


// router.beforeEach(
//   (to, from, next) => {

//     // let token = Cookies.get("token")
//     // if (token) {
//     //   next();
//     //   if (to.name == "user") {
//     //     return next()
//     //   } else {
//     //     return next({
//     //       path: "/user"
//     //     })
//     //   }
//     // }
//   }
// )

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')