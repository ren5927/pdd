<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in  cagtegroys.page" :key="index">
        <van-grid clickable >
          <van-grid-item
            v-for="(item) in  cagtegroys[cagtegroys.page[index]]"
            :key="item.id"
            :icon="item.icon"
            :text="item.text"
          />
        </van-grid>
      </div>
    </div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cagtegroys: {
        page: ["page1", "page2"],
        page1: [
          {
            id: 1,
            text: "限时秒杀",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/2019-10-24/9c511fafac04f30eaa86721de738cfa1.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 2,
            text: "断码清仓",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/images/2018-12-22/b9851773573d1d682aa46d896de7f4fa.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 3,
            text: "新衣馆",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/images/2019-08-25/6c9660932b94227f1a937d191aeacdf5.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 4,
            text: "多多果园",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/images/2019-01-30/5667b3f1eaa8bb379303afb3934d1bc8.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 5,
            text: "充值中心",
            linkto: "",
            icon:
              "https://t05img.yangkeduo.com/images/2018-05-16/801ae189938526cdaf40935d07034c5e.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 6,
            text: "品牌特卖",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/2019-10-16/3112fa31581efa603edaa0d8748139f0.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 7,
            text: "现金签到",
            linkto: "",
            icon:
              "https://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 8,
            text: "多多赚大钱",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/2020-01-02/b1e85f595a23526be3bae0233b3fa360.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          }
        ],
        page2: [
          {
            id: 9,
            text: "9块9特卖",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/images/2018-10-07/c671f2c49805658697cc0f72fff87eb3.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 10,
            text: "一键免单",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/images/2019-02-15/b329c4673337e18030f1211df38a543b.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 11,
            text: "天天领现金",
            linkto: "",
            icon:
              "https://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 12,
            text: "一键抽奖",
            linkto: "",
            icon:
              "https://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 13,
            text: "电器城",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/images/2018-10-28/27e48ad452991eeb8fd0559a0d3b60ff.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 14,
            text: "爱逛街",
            linkto: "",
            icon:
              "https://t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 15,
            text: "砍价免费拿",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/images/2019-02-15/1ddd6e21a8281e794dec6ef736867290.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          },
          {
            id: 16,
            text: "多多爱消除",
            linkto: "",
            icon:
              "https://t00img.yangkeduo.com/goods/images/2019-04-12/80f3af132fae04453792464bb837ca02.png?imageMogr2/strip%7CimageView2/2/w/117/q/80"
          }
        ]
      }
    };
  },
  mounted() {
    let ele = this.$refs.swiperContainer;

    var mySwiper = new Swiper(ele, {
      freeMode: true,
      freeModeMomentum: false,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        snapOnRelease: false,
        dragSize: 40
      }
    });
    mySwiper.scrollbar.$dragEl.css("background", "#ff6600");
    mySwiper.scrollbar.$el.css("width", "100px");
    mySwiper.scrollbar.updateSize();
  }
};
</script>
<style lang="less">
.swiper-container {
  background-color: #fff;
  text-align: center;
  .swiper-scrollbar {
    left: 38%;
  }
}
</style>




