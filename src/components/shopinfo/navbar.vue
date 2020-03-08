<template>
  <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    }
  }
};
</script>