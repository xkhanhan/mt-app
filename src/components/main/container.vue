<template>
  <!-- 猫眼电影组件 -->
  <div class="m-movie">
    <dl @mouseover="hanleHover">
      <dt>猫眼电影</dt>
      <dd :class="{ active: kind == 'isMovie' }" data-type="isMovie">
        正在热映
      </dd>
      <dd :class="{ active: kind == 'theMovie' }" data-type="theMovie">
        即将热映
      </dd>
      <span>
        全部
        <i class="arrow"></i>
      </span>
    </dl>
    <el-row>
      <transition mode="out-in" name="slider">
        <div class="slider" ref="slider" :style="{ left: leftNum + 'px' }">
          <my-slider
            v-for="item in sliderList"
            :item="item"
            :key="item.id"
          ></my-slider>
        </div>
      </transition>
      <div class="btn-next" @click="handleNext">
        <i class="arrow"></i>
      </div>
      <div class="btn-pre" @click="handlePre">
        <i class="arrow"></i>
      </div>
    </el-row>
  </div>
</template>
<script>
import mySlider from "@/components/main/sliderItem.vue";

export default {
  components: {
    mySlider,
  },
  data() {
    return {
      leftNum: 0, //内容偏移量
      kind: "isMovie", // 当前点击的导航
      sliderList: [], // 展示数据的数组
      sliderWidth: 0, // 内容父级盒子的宽度
      ajaxData: [
        {
          title: "home",
          data: [
            [
              {
                id: 6,
                url: require("@/assets/img/5cbf9a626b7ed27c96ca3c748655b3ec2550103.jpg"),
                title: "金刚川",
                isRelease: true,
                number: 7.9,
              },
              {
                id: 1,
                url: require("@/assets/img/6f1b3f4b8439e077b09b357f733a4c7e2101280.jpg"),
                title: "末日逃生",
                isRelease: true,
                number: 9.4,
              },
              {
                id: 2,
                url: require("@/assets/img/6fb1855f663f9856bfc47b7d013e0474651230.jpg"),
                title: "疯狂原始人2",
                isRelease: false,
                number: 44182,
              },
              {
                id: 3,
                url: require("@/assets/img/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg"),
                title: "除暴",
                isRelease: true,
                number: 8.6,
              },
              {
                id: 4,
                url: require("@/assets/img/202ea88abd2abf2aa1964487d61edab64556414.jpg"),
                title: "我和我的家乡",
                isRelease: true,
                number: 9.2,
              },
              {
                id: 5,
                url: require("@/assets/img/4638e9d10d35520042ff5885693643944796607.jpg"),
                title: "如果声音不记得",
                isRelease: false,
                number: 178813,
              },
              {
                id: 7,
                url: require("@/assets/img/b52b48d495405a86cdeeedcfed13a206267343.jpg"),
                title: "怪物猎人",
                isRelease: false,
                number: 31286,
              },
              {
                id: 8,
                url: require("@/assets/img/c985eeb2a24359d3730c55cf54c2b0a94783004.jpg"),
                title: "一秒钟",
                isRelease: false,
                number: 53095,
              },
              {
                id: 9,
                url: require("@/assets/img/cf7d6942f2aa9189cce20519b490b6b1879487.jpg"),
                title: "野性的呼唤",
                isRelease: true,
                number: 9.2,
              },
              {
                id: 10,
                url: require("@/assets/img/d33858dbfc207da3b36c0dc7fff7a8bb2028677.jpg"),
                title: "汪汪队立大功之超能救援",
                isRelease: true,
                number: 8.3,
              },
            ],
            [
              {
                id: 1,
                url: require("@/assets/img/8cdd180fa60679902df929ef69e222c514580380.jpg"),
                title: "吕建江",
                isRelease: false,
                number: 76,
              },
              {
                id: 2,
                url: require("@/assets/img/303c2e671cc4df875c151d688ecbd8962085989.jpg"),
                title: "赤狐书生",
                isRelease: false,
                number: 147063,
              },
              {
                id: 3,
                url: require("@/assets/img/8279a937c0f8249129bccce6529277c1743067.jpg"),
                title: "日光之下",
                isRelease: false,
                number: 528,
              },
              {
                id: 4,
                url: require("@/assets/img/a0c6d6e130abe399e4cba58be2b1f871840268.jpg"),
                title: "宝可梦：超梦的逆袭 进化",
                isRelease: false,
                number: 46924,
              },
              {
                id: 5,
                url: require("@/assets/img/a589dc97ade400ed0a2d24ac9dd7ef685004722.jpg"),
                title: "闺蜜心窍",
                isRelease: false,
                number: 76,
              },
              {
                id: 6,
                url: require("@/assets/img/a796fd5753687e48b41513285c6afaf4164140.jpg"),
                title: "星溪的三次奇遇",
                isRelease: false,
                number: 270,
              },
              {
                id: 7,
                url: require("@/assets/img/ef54d3042ca9beae5a5dbebddedc09952623932.jpg"),
                title: "灰犀牛",
                isRelease: false,
                number: 200,
              },
              {
                id: 8,
                url: require("@/assets/img/4638e9d10d35520042ff5885693643944796607.jpg"),
                title: "吕建江",
                isRelease: false,
                number: 76,
              },
              {
                id: 9,
                url: require("@/assets/img/c985eeb2a24359d3730c55cf54c2b0a94783004.jpg"),
                title: "一秒钟",
                isRelease: false,
                number: 53095,
              },
              {
                id: 10,
                url: require("@/assets/img/6fb1855f663f9856bfc47b7d013e0474651230.jpg"),
                title: "疯狂原始人2",
                isRelease: false,
                number: 44182,
              },
            ],
          ],
        },
      ],
    };
  },
  // 初始化结束
  created() {
    // 对 展示数据 的 数组 赋值
    this.sliderList = this.ajaxData[0].data[0];

    // this.sliderList = [
    //         {
    //           id: 6,
    //           url: require("@/assets/img/5cbf9a626b7ed27c96ca3c748655b3ec2550103.jpg"),
    //           title: "金刚川",
    //           isRelease: true,
    //           number: 7.9,
    //         },]

    /**
     *  对 父级容器 的 宽度 变量 进行赋值
     *  父级的宽度 = 子容器的个数 * 230
     **/
    this.sliderWidth = this.sliderList.length * 230;
  },
  // 数据挂载完毕
  mounted() {
    // 对父级容器进行样式进行改变
    this.$refs.slider.style.width = this.sliderWidth + "px";
  },
  methods: {
    /**
     * 父级容器偏移函数
     * @param {Number} val 填入 -1 和 +1 用于判断父级容器向左还是向右偏移
     */
    leftPx(val) {
      // 父级容器的最大偏移量
      const max = 0;

      /**
       * 父级容器的最小偏移量
       * 当父级容器小于1179时不做任何处理
       * 当父级容器内容过多超出 1179 宽度时 才进行偏移
       */
      let min;
      if (this.sliderWidth < 1170) {
        return;
      } else {
        min = 1170 - this.sliderWidth;
      }

      let num; //偏移距离
      // 判断偏移方向
      if (val == -1) {
        num = this.leftNum - 1170;
      } else {
        num = this.leftNum + 1170;
      }
      /**
       * 边界处理
       * 当偏移量大于 最大偏移量 时直接赋值为 0
       * 当偏移量小于 最小偏移量 时直接赋值为最小偏移量
       */
      num = num > max ? max : num < min ? min : num;
      // 对偏移量重新赋值，使 视图刷新
      this.leftNum = num;
    },
    // 向右偏移按钮
    handleNext() {
      this.leftPx(1);
    },
    // 向左偏移按钮
    handlePre() {
      this.leftPx(-1);
    },

    /**
     * 鼠标划入导航模块事件
     *
     * 使用事件冒泡编写处理
     */
    hanleHover(e) {
      // 获取事件源对象
      let dom = e.target;
      // 获取事件源对象的标签名并转换成小写
      let tagname = dom.tagName.toLowerCase();
      // 判断是否为 dd 标签
      if (tagname != "dd") {
        return false;
      }
      // 获取标签身上的属性值
      this.kind = dom.getAttribute("data-type");

      //对当前点击的导航变量赋值
      if (this.kind == "isMovie") {
        // 对数据进行赋值
        this.sliderList = this.ajaxData[0].data[0];
      } else {
        // 对数据进行赋值
        this.sliderList = this.ajaxData[0].data[1];
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>