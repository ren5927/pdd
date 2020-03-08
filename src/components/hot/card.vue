<template>
  <div class="goodsList" v-if="havedata">
    <ul v-if="phoneList.length">
      <li v-for="item in phoneList" :key="item.id" @click="buy(item.id)">
        <div class="pic">
          <img v-lazy="item.imageUrls[0]" width="100%" height="100%" />
        </div>
        <p class="title" v-text="item.title"></p>
        <div class="info">
          <p>
            <span class="symbol">￥</span>
            <span class="price" v-text="item.price"></span>
          </p>
          <span class="pay">点击购买</span>
        </div>
      </li>
    </ul>
    <foot />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      phoneList: [],
      havedata:false,
    };
  },
  props: ["msg"],
  methods: {
    buy(id) {
      this.$store.state.id = id;
      this.$router.push({ path: "/shopinfo" });
    }
  },
  created() {
    this.$nextTick(function() {
      let api = `https://api03.6bqb.com/tmall/shop?apikey=6C31B7F6018698139A1C0C49AD18A7C3&shopUrl=${this.msg}&page=1&orderType=defaultSort`;
      axios
        .get(api)
        .then(response => {
          this.phoneList = response.data.data;
          this.$store.state.phoneList = this.phoneList;
          this.havedata=true;
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  }
};
</script>

<style scoped lang="less">
.goodsList {
  position: relative;

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 372px;
      height: 500px;

      .pic {
        height: 370px;
      }
      .title {
        height: 54px;
        line-height: 54px;
        padding: 0 15px;
        color: #151516;
        font-size: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: orangered;
        line-height: 50px;
        padding: 0 15px;
        .symbol {
          font-size: 12px;
        }
        .price {
          font-size: 28px;
          font-weight: bold;
        }
        .pay {
          font-size: 24px;
          line-height: 50px;
        }
      }
    }
  }
}
</style>