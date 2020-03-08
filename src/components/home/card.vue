<template>
  <div>
    <div class="card" v-if="havedata">
      <van-card
        v-for="(item,index) in goodlist"
        :key="index"
        :price="item.price"
        :title="item.title"
        :thumb="item.imageUrls[0]"
        :origin-price="item.market_price"
        @click="buy(item.id)"
      />
    </div>
    <foot />
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      goodlist: [],
      havedata: false
    };
  },
  created() {
    this.$nextTick(function() {
      if (this.$store.state.goodlist.length == 0) {
        this.getdata();
      } else {
        this.goodlist = this.$store.state.goodlist;
        this.havedata = true;
      }
    });
  },
  methods: {
    getdata() {
      let api =
        "https://api03.6bqb.com/tmall/shop?apikey=6C31B7F6018698139A1C0C49AD18A7C3&shopUrl=https://pg.tmall.com/&page=1&orderType=defaultSort";
      axios
        .get(api)
        .then(res => {
          this.goodlist = res.data.data;
          this.$store.state.goodlist = this.goodlist;
          this.havedata = true;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    buy(id) {
      this.$store.state.id = id;
      this.$router.push({ path: "/shopinfo" });
    }
  }
};
</script>
<style scoped lang="less" >
.van-card {
  margin-top: 1px;
}
</style>