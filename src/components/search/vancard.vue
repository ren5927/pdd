<template>
  <div>
    <van-card
      v-for="(item,index) in list"
      :num="item.num"
      :price="item.priceRange+'.00'"
      :desc="item.subTitle"
      :title="item.title"
      :thumb="item.images[0]"
      :key="index"
    >
      <div slot="tags">
        <van-tag plain type="danger">极速退款</van-tag>
      </div>
    </van-card>
    <foot />
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$nextTick(function() {
      this.list = this.$store.state.info;
      let money = 0;
      this.list.forEach(ele => {
        money += ele.num * ele.priceRange * 100;
      });
      this.$store.state.money = money;
      this.havedata = true;
    });
  }
};
</script>