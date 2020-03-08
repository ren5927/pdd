<template>
  <div class="shopinfo" v-if="havedata">
    <navbar />
    <div class="head">
      <img :src="info.images[0]" />
    </div>
    <div class="body">
      <img
        src="https://t13img.yangkeduo.com/cart/2020-02-28/85040af9e1b3e29eaa7b7a38f30799d7.png?imageMogr2/strip%7CimageView2/2/w/1300/q/80"
      />
      <p v-text="info.title"></p>
      <p class="money" v-text="'￥'+comp"></p>
      <div class="btn">
        <van-button size="mini" @click="down">-</van-button>
        <span>{{num}}</span>
        <van-button size="mini" @click="up">+</van-button>
      </div>
      <span>极速退款</span>
    </div>
    <div class="foot">
      <p>商品售完时未能拼单者视为抢购失败，将发起退款</p>
      <van-goods-action safe-area-inset-bottom>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import axios from "axios";
import navbar from "@/components/shopinfo/navbar.vue";

export default {
  data() {
    return {
      info: {
        priceRange: "***",
        images: [
          "//t16img.yangkeduo.com/pdd_ims/99a582e9a40d9b1466b04a916187d37f.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/150/format/webp/q/80"
        ],
        title: "***"
      },
      num: 1,
      havedata: false
    };
  },
  created() {
    this.$nextTick(function() {
      let id = this.$store.state.id;
      let api = `http://api01.99api.com/tmall/detail?apikey=6C31B7F6018698139A1C0C49AD18A7C3&itemid=${id}`;
      axios
        .get(api)
        .then(res => {
          this.info = res.data.data.item;
          this.havedata = true;
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  methods: {
    onClickIcon() {
      Toast("暂未开放");
    },
    onClickButton() {
      let arr = this.$store.state.info;
      let obj1 = this.filarr(this.info, arr);
      if (obj1.bol) {
        arr[obj1.index].num += this.num;
      } else {
        this.info.num = this.num;
        this.info.priceRange = this.comp;
        arr.push(this.info);
      }
      this.$router.push({ path: "/search" });
    },
    down() {
      if (this.num == 1) return;
      this.num--;
      this.$store.state.num = this.num;
    },
    up() {
      this.num++;
      this.$store.state.num = this.num;
    },

    filarr(obj, arr) {
      let bol, index;
      arr.forEach(ele => {
        bol = ele.categoryId == obj.categoryId;
        if (ele.categoryId == obj.categoryId) index = arr.indexOf(ele);
      });
      return { bol, index };
    }
  },
  components: {
    navbar
  },
  computed: {
    comp() {
      let str = this.info.priceRange;
      if (str.indexOf("-") != -1) {
        str = str.slice(0, str.indexOf("-"));
      }
      return str;
    }
  }
};
</script>
<style lang="less" scoped>
.shopinfo {
  position: relative;
  .head {
    width: 100%;
    height: 50vh;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .body {
    margin-bottom: 20px;
    img {
      width: 100%;
      border-radius: 5px;
    }
    p {
      font-size: 40px;
    }
    span {
      font-size: 30px;
      color: #f0f0f0;
      background-color: #25b513;
      border-radius: 5px;
    }
    .money {
      color: red;
      font-weight: bold;
      display: inline;
    }
    .btn {
      display: inline;
      margin: 0 90px;
      span {
        color: #000;
        background-color: #fff;
        font-weight: bold;
      }
      button {
        margin: 0 10px;
      }
    }
  }
  .foot {
    p {
      // margin-top: 10px;
      font-size: 30px;
      color: #58595b;
    }
    .van-goods-action {
      position: fixed;
      bottom: 90px;
    }
  }
}
</style>