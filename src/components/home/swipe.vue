<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="135">
    <van-swipe-item v-for="(item,index) in listimg" :key="index">
      <img :src="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "swipe",
  data() {
    return {
      listimg: [
        "https://t14img.yangkeduo.com/images/2020-02-25/adde53dbba41a9d3dfdb8b40661f4920.jpg?imageMogr2/strip%7CimageView2/2/w/750/q/80",
        "https://t14img.yangkeduo.com/images/2020-02-25/81d63222706c040ecdab3cf03019bbd2.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp",
        "https://t16img.yangkeduo.com/pdd_oms/2020-02-24/cdcd0e9b3a153794deaa15b283c76a3e.jfif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp",
        "https://t00img.yangkeduo.com/goods/2019-11-20/0c7cbcf6a07241f8ac9feea5002a498e.jpeg?imageMogr2/strip%7CimageView2/2/w/750/q/80"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
img {
  width: 100%;
  height: 100%;
}
</style>