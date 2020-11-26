<template>
  <div class="m-movie">
    <dl>
      <dt>猫眼电影</dt>
      <dd class="active">正在热映</dd>
      <dd>即将热映</dd>
      <span>
        全部
        <i class="arrow"></i>
      </span>
    </dl>
    <el-row>
      <transition mode="out-in" name="slider" >
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
      leftNum: 0,

      sliderList: [
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
          title: "我和我的家乡",
          isRelease: true,
          number: 9.2,
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
       sliderWidth : 0,
    };
  },
  created(){
      this.sliderWidth = this.sliderList.length * 230;
  },
  mounted() {
    this.$refs.slider.style.width = this.sliderWidth + "px";
  },
  methods: {
    leftPx(val) {

      const max = this.sliderWidth;
      const min = 1170 - this.sliderWidth;
      let num
    if(val == -1){
         num = this.leftNum - 1170;
    }else{
         num =  this.leftNum + 1170;
    }
      // 边界
      num = num > 0 ? 0 : (num < min ? min : num);
      this.leftNum = num;
    },
    handleNext() {
      this.leftPx(1);
    },
    handlePre() {
      this.leftPx(-1);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";

</style>