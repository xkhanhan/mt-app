<template>
  <div class="page-changeCity">
    <el-row>
      <my-selectrow></my-selectrow>
    </el-row>
    <el-row>
      <my-hostcityrow :cityObject="hotcity"></my-hostcityrow>
    </el-row>
    <el-row>
      <my-hostcityrow :cityObject="recently"></my-hostcityrow>
    </el-row>
    <el-row>
      <my-hostcityrow :cityObject="letterSelect"></my-hostcityrow>
    </el-row>
    <my-letterrow :letterGroup="letterGroup"></my-letterrow>
  </div>
</template>

<script>
import mySelectrow from "@/components/changeCity/selectCity.vue";
import myHostcityrow from "@/components/changeCity/hotCity.vue";
import myLetterrow from "@/components/changeCity/letter.vue";
export default {
  components: {
    mySelectrow,
    myHostcityrow,
    myLetterrow,
  },
  data() {
    return {
      letterGroup: {
        A: [
          { name: "安徽" },
          { name: "鞍山" },
          { name: "安庆" },
          { name: "安阳" },
          { name: "安顺" },
          { name: "安康" },
          { name: "安丘" },
          { name: "安岳" },
          { name: "安陆市" },
          { name: "阿克苏" },
        ],
        B: [
          { name: "北京" },
          { name: "包头" },
          { name: "保定" },
          { name: "蚌埠" },
          { name: "亳州" },
          { name: "滨州" },
          { name: "宝鸡" },
          { name: "白城" },
          { name: "霸州" },
          { name: "巴彦淖尔" },
          { name: "北海" },
          { name: "百色" },
          { name: "巴中" },
          { name: "毕节" },
          { name: "保山" },
          { name: "本溪" },
          { name: "白银" },
          { name: "白山" },
          { name: "璧山" },
          { name: "拜泉县" },
          { name: "拜城县" },
          { name: "宝应" },
          { name: "北流" },
          { name: "博爱" },
          { name: "巴楚县" },
          { name: "宝丰" },
          { name: "博兴" },
          { name: "泌阳" },
          { name: "彬州市" },
          { name: "巴彦县" },
        ],
      },
      hotcity: {
        title: "热门城市",
        list: [
          "北京",
          "上海",
          "广州",
          "深圳",
          "天津",
          "西安",
          "重庆",
          "杭州",
          "南京",

          "武汉",
          "成都",
        ],
      },
      recently: {
        title: "最近访问",
        list: ["重庆", "杭州", "南京", "北京", "上海"],
      },
      letterSelect: {
        title: "按拼音首字母选择",
        list: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "J",
          "K",
          "L",
          "M",
          "N",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "W",
          "X",
          "Y",
          "Z",
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
@import "@/assets/css/changecity/hot.scss";
@import "@/assets/css/changecity/categroy.scss";
</style>
