<template>
  <div class="contend">
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(value,index) in list"
        :key="index"
        :icon="value.img"
        :text="value.text"
      ></van-grid-item>
    </van-grid>
    <img
      src="http://t00img.yangkeduo.com/goods/images/2019-08-01/5ba3dd3862a2e28f1f4b1393be5c6619.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
    />
    <shopcard :msg="msg" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          text: "女士内衣",
          img:
            "//t14img.yangkeduo.com/images/2019-02-15/80c4e3183f10ccd0e75a2c91c8f128a4.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          text: "袜子",
          img:
            "//t14img.yangkeduo.com/images/2019-04-05/27e8aefed8590b54ea9762505e936ff2.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          text: "男士内裤",
          img:
            "//t14img.yangkeduo.com/images/2019-04-10/8f7ab10495a04f4317266f4ad32065da.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          text: "男士内衣",
          img:
            "//t14img.yangkeduo.com/images/2019-04-05/a833644dfaaa7d3b272f86ad7f57fded.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          text: "女士内裤",
          img:
            "//t14img.yangkeduo.com/images/2019-04-13/a1f597eb535606b10a15e0e77f8ccb23.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          text: "文胸",
          img:
            "//t14img.yangkeduo.com/images/2019-04-04/baaf38c33865dd58fdbc000e766afe98.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          text: "睡衣家居",
          img:
            "//t14img.yangkeduo.com/images/2019-02-24/03d3fd93336c3f2df8a45faf9ba86d5c.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          text: "塑身美体",
          img:
            "//t14img.yangkeduo.com/images/2019-03-17/3a6d1fedf0ac81ba2843b8f641e26786.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          text: "吊带背心",
          img:
            "//t14img.yangkeduo.com/images/2019-04-11/1cc60be937ead68f5a706559640b9b55.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          text: "查看全部",
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURQAAAODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4P7+/u/v73koT0EAAAAIdFJOUwBO8rKJ1CMLoiR1VwAAANtJREFUKM91kz0OwjAMhYNAsFaIgRUxkBEhIXWErTtLR46AuAFpKxlOQHoCekvitI2a1u8NkfUl8k9sK9VqtTlrc7s+VKTZibz2SURz6lQN+DKloOIe8JoG2vV0QZEuHc5iXIqP++fbMX75NPQYG05mThMdJR+tl3yKK1c3CUok1+z8KeGDFJFjZhIuVSrhQsqPM+TSP/bnzqYOplF82diaARNvOqwlTDI2PuTbft1pbTArlCAoBxQPvgp8LGgDaBpqMRgIMD5g2NBogkFGYw+WBK0UWEC0rpPl/gMSMZBtc0a6EQAAAABJRU5ErkJggg=="
        }
      ]
    };
  },
  props: ["msg"],
};
</script>
<style  scoped lang="less" >
.contend {
  img {
    width: 100%;
    border-radius: 5px;
    margin: 40px auto;
    text-align: center;
  }
}
</style>






