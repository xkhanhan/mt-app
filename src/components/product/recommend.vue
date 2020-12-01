<template>
  <el-row>
    <el-col :span="24" v-for="item in list" :key="item.itemId">
      <recomitem-item :meta="item"></recomitem-item>
    </el-col>
  </el-row>
</template>

<script>
import recomitemItem from "./recomItem.vue";

export default {
  components: {
    recomitemItem,
  },
  data() {
    return {
      list: [
        {
          itemId: "2412338",
          title: "金真子纸上烤肉（双桥店）",
          imgUrl: "http://p1.meituan.XXXXX.jpg",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59,
        },
      ],
    };
  },
};
</script>