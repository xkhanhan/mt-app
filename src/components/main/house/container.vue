<template>
  <div class="m-istyle">
    <my-navbar @over="hanleHover($event)" :navBar="navBar"></my-navbar>
    <ul class="ibody">
      <li v-for="item in cardList" :key="item.id">
        <el-card>
          <img class="image" :src="item.url" />
          <div class="cbody">
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subTitle }}</div>
            <div class="price-info">
              <span class="price-symbol"> ￥ </span>
              <span class="current-price">
                {{ item.price }}
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import myNavbar from "../navbar";
export default {
  components: {
    myNavbar,
  },
  data() {
    return {
      ajaxData: [
        {
          title: "nc",
          data: [
            {
              id: 1,
              url: require("@/assets/img/6c7afd9173809e32f3bfa08b554ea70a227697.jpg"),
              title: "大连浪漫情侣海边度假公寓民宿亲子房",
              subTitle: "整套1居室·可住2人 | 香炉礁",
              price: "128",
            },
            {
              id: 2,
              url: require("@/assets/img/6ddeaa8a6682bfcf7111687cffa68d00104044.jpg"),
              title:
                "天津西青区豪华轰趴馆.独栋别墅•同学聚会/朋友小聚/生日派对/公司团建/年会场地/求婚表白",
              subTitle: "整套3居室·可住32人 | 滨江道",
              price: "50",
            },
            {
              id: 3,
              url: require("@/assets/img/93b1203b6a6cd2769a08b7671d7c44f7116471.jpg"),
              title: "大连浪漫情侣海边度假公寓民宿亲子房",
              subTitle: "整套1居室·可住2人 | 香炉礁",
              price: "355",
            },
            {
              id: 4,
              url: require("@/assets/img/3281e75dee91c41904cd7739c66cca17351749.jpg"),
              title: "【九月●美宿】NO.4/浓浓北欧情/鼓楼/古文化街/100寸投影",
              subTitle: "整套1居室·可住2人 | 老城厢/鼓楼",
              price: "235",
            },
            {
              id: 5,
              url: require("@/assets/img/bbac03b51f853341a9d095e94f73af0d479711.jpg"),
              title:
                "《清庭，蜗居公寓》津南咸水沽大学城学生公寓，博雅时尚三期，新小区，新房装修温馨，舒适，干净，整洁，电子密码锁，自行入住。",
              subTitle: "整套1居室·可住2人 | 香炉礁",
              price: "134",
            },
            {
              id: 6,
              url: require("@/assets/img/ec332673bb34ee293dd4e5c8becd21d3274797.jpg"),
              title: "实验中学波西米亚风公寓",
              subTitle: "整套1居室·可住2人 | 杆石桥",
              price: "669",
            },
          ],
        },
        {
          title: "jj",
          data: [
            {
              id: 1,
              url: require("@/assets/img/3153dddecc9a14532d28c1d8ee4ee61b125532.jpg"),
              title: "龙城之恋舒适大床房",
              subTitle: "整套1居室·可住2人 | 柳巷商业区",
              price: "128",
            },
            {
              id: 2,
              url: require("@/assets/img/d4f26f601f70178b06141dde3bf842c01221378.jpg"),
              title: "长风商务区、义井街附近民宿",
              subTitle: "整套3居室·可住32人 | 长风商务区",
              price: "80",
            },
            {
              id: 3,
              url: require("@/assets/img/babd2a9e80cb9da5b28255354b80f67c2584304.jpg"),
              title: "蓝焰小居，简约精致",
              subTitle: "整套1居室·可住2人 | 蒙山大佛景区",
              price: "108",
            },
            {
              id: 4,
              url: require("@/assets/img/e364c8e400d88fccaf530a622928222a2791959.jpg"),
              title: "舒适度假~让您体验住家的感觉（智能门锁，24h自助入住）",
              subTitle: "整套1居室·可住2人 | 长风商务区、义井街附近民宿",
              price: "168",
            },
            {
              id: 5,
              url: require("@/assets/img/28a395f93a2f3389d299cf0f219304901947662.jpg"),
              title: "【艾·莫】小栈 太原迎新街店",
              subTitle: "整套1居室·可住2人 | 迎新街",
              price: "168",
            },
            {
              id: 6,
              url: require("@/assets/img/c634c5d47c991d9d6f7640884d9a38cd396932.jpg"),
              title: "恒大影城高级大床房",
              subTitle: "整套1居室·可住2人 | 坞城路",
              price: "98",
            },
          ],
        },
      ],
      cardList: [],
      navBar: {
        title: "推荐民宿",
        defaultSelect: "nc", // 当前点击的导航
        itemList: [
          {
            title: "南昌",
            tab: "nc",
          },
          {
            title: "九江",
            tab: "jj",
          },
        ],
      },
    };
  },
  created() {
    this.cardList = this.ajaxData[0].data;
  },
  methods: {
    hanleHover(name) {
      if (name == "nc") {
        this.cardList = this.ajaxData[0].data;
      } else {
        this.cardList = this.ajaxData[1].data;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>