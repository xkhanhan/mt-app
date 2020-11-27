<template>
<!-- 头部上半部分导航栏组件 -->
  <el-row class="m-header-topbar ">
    <el-col :span="10">
      <my-geo></my-geo>
    </el-col>
    <el-col :span="14">
      <my-nav></my-nav>
    </el-col>
  </el-row>
</template>

<script>
// 头部上半部分导航栏的右半部分
import myGeo from './geo';
// 头部上半部扽导航栏的左半部分
import myNav from './nav';

export default {
  components: {
    myGeo,
    myNav
  }
}
</script>
