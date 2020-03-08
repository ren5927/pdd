
<template>
  <div class="login">
    <van-form>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名(最长11个字符串)"
        maxlength="11"
        required
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码(最长16个字符串)"
        maxlength="16"
        required
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
          @click="toper"
        >注册</van-button>
        <br />
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    toper() {
      if (this.username == "" || this.password == "") return;
      this.$router.push({ path: "/person" });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/bgc1.jpg") no-repeat center;
  background-size: 100% 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
