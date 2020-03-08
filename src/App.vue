<template>
  <div id="app">
    <router-view />
    <tab />
  </div>
</template>

<script>
import tab from "./components/tab.vue";
export default {
  components: {
    tab
  },
  watch: {
    $route(to, from) {
      let index = -1;
      switch (to.path) {
        case "/home":
          index = 0;
          break;
        case "/hot":
          index = 1;
          break;

        case "/search":
          index = 2;
          break;

        case "/chat":
          index = 3;
          break;

        case "/person":
          index = 4;
          break;
      }
      if (index != -1) this.changcla(index);
    }
  },
  methods: {
    changcla(i) {
      let ele = document.getElementsByClassName("van-tabbar-item");
      ele[i].classList.add("van-tabbar-item--active");
      ele[i].style.color = "#07c160";

      ele.forEach((el, index) => {
        if (index !== i) {
          ele[index].classList = "van-tabbar-item";
          ele[index].style.color = "#000";
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
#app {
  user-select: none;
}
</style>