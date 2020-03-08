<template>
  <van-nav-bar
    left-text="返回"
    right-text="清空"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/home" });
    },
    onClickRight() {
      this.$store.state.info = [];
      this.$router.go(0);
    }
  }
};
</script>