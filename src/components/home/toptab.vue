<template>
  <div>
    <van-tabs animated lazy-render sticky title-active-color="#ee0a24">
      <van-tab v-for="(item,index) in list2" :title="item.optName">
        <homehot />
      </van-tab>
      <van-tab v-for="(item,index) in list" :title="item.optName">
        <contend :msg="item.shopUrl" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import homehot from "../../views/home/homehot.vue";
export default {
  data() {
    return {
      list: [
        { optName: "苏宁易购", shopUrl: "https://suning.tmall.com/" },
        { optName: "英雄联盟", shopUrl: "https://leagueoflegends.tmall.com/" },
        { optName: "上汽大众", shopUrl: "https://svw.tmall.com/" },
        { optName: "黑人牙膏", shopUrl: "https://darlie.tmall.com/" }
      ],
      list2: [{ optName: "热门", shopUrl: "https://enfinitas.tmall.com/" }],
      info: "",
      mark: true
    };
  },
  components: {
    homehot
  }
};
</script>