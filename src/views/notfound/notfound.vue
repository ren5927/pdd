<template>
  <div class="notfound">
    <div class="img">
      <img src="@/assets/404.png" />
    </div>
    <div class="btn">
      <van-button plain hairline type="primary" @click="ret">返回上一级</van-button>
      <van-button plain hairline type="info" to="/home">返回主页</van-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    ret() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.notfound {
  text-align: center;
  .img {
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 500px;
      height: 500px;
    }
  }
  .btn {
    button {
      margin: 0 20px;
    }
  }
}
</style>