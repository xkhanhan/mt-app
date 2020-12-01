<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"
          >{{ $store.state.position }}美团</el-breadcrumb-item
        >
        <el-breadcrumb-item
          ><a href="/"
            >{{ $store.state.position }}{{ $route.params.name }}
          </a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </el-row>

    <el-row class="" :gutter="10">
      <el-col :span="19">
        <el-row>
          <my-categroy></my-categroy>
        </el-row>
        <el-row>
          <my-list></my-list>
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-row></el-row>
         <my-recommend></my-recommend>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import myCategroy from "@/components/product/categroy.vue";
import myList from "@/components/product/list.vue";
import myRecommend from "@/components/product/recommend";

export default {
  components: {
    myCategroy,
    myList,
    myRecommend,
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>