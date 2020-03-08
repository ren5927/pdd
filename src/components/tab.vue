<template>
  <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
    <van-tabbar-item
      v-for="item in tab"
      :key="item.id"
      :name="item.name"
      :icon="item.icon"
      :to="'/'+item.name"
    >{{item.msg}}</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: "home",
      tab: [
        { id: 1, name: "home", icon: "home-o", msg: "首页" },
        { id: 2, name: "hot", icon: "hot-o", msg: "推荐" },
        { id: 3, name: "search", icon: "shopping-cart-o", msg: "购物车" },
        { id: 4, name: "chat", icon: "chat-o", msg: "聊天" },
        { id: 5, name: "person", icon: "friends-o", msg: "个人中心" }
      ]
    };
  }
};
</script>