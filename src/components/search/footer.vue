<template>
  <div class="footer">
    <van-submit-bar
      disabled
      :price="money"
      button-text="提交订单"
      tip="很显然,即使您真的想买,我也卖不了"
      tip-icon="info-o"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      money: 0
    };
  },
  created() {
    this.$nextTick(function() {
      this.money = this.$store.state.money;
    });
  }
};
</script>