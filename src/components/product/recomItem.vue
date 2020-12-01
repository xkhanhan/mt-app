<template>
  <div class="recommend_item">
    <div class="recommend_itemImg">
      <img :src="meta.imgUrl" alt="" />
    </div>
    <div class="recommend_itemMeta">
      <p>{{ meta.title }}</p>
      <p>
        <el-rate
          v-model="meta.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}分"
        >
        </el-rate>
        <span class="recommend_comment">{{ meta.commentNum }}条评论</span>
      </p>
      <p>{{ meta.areaName }}</p>
      <p>
        <span class="recommend_pirce">￥{{ meta.avgPrice }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.el-rate{
    display: inline;
}
.el-rate .el-rate__icon{
    font-size: 12px;
}
.recommend_item{
    background: #FFF;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    padding: 10px;
}

.recommend_item img{
     width: 100%;
}

 .recommend_comment{
     font-size: 12px;
        color: #ccc;
}
.recommend_pirce{
    font-size: 18px;
             color: #f60;
}
p{
    margin: 5px 0px;
}
</style>